import { IUser } from "@my-monorepo/shared-types";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";

interface UseUpdateUserProfileProps {
    userProfile: IUser | null;
    setUserProfile: React.Dispatch<React.SetStateAction<IUser | null>>;

}

export const useUpdateUserImage = ({ userProfile, setUserProfile }: UseUpdateUserProfileProps) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (imageFile: File) => {
            if (!userProfile?.id) {
                throw new Error("User ID is missing. Cannot upload avatar.");
            }
            const formData = new FormData();
            formData.append('avatar', imageFile);

            // Replace with your actual API endpoint and authentication
            const response = await fetch(`http://localhost:3000/api/v1/patient/${userProfile?.id}`, { // Example avatar upload endpoint
                method: 'PATCH',
                // 'Authorization': `Bearer ${yourAuthToken}`, // Add authentication if needed
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error({ errorData });
                throw new Error(errorData.message || 'Failed to upload image.');
            }
            return response.json();
        },
        onSuccess: (data) => {
            toast.success('Profile image uploaded successfully!');
            // Assuming the API returns the URL of the uploaded image to set as avatar
            if (userProfile && data.avatarUrl) { // Adjust 'avatarUrl' to match your API's response field for the avatar URL
                setUserProfile((prev: IUser | null) => prev ? { ...prev, avatar: data.avatarUrl } : null);
            }
            queryClient.invalidateQueries({ queryKey: ['userProfile', 'me'] });
        },
        onError: (error: Error) => {
            toast.error(`Error uploading image: ${error.message}`);
        },
    });
};