import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IAddress, IUser, UpdateUserPayload } from "@my-monorepo/shared-types";
import objectToFormData from "@/lib/form-data-generatore";
import { toast } from "sonner";

interface UseUpdateUserProfileProps {
    userId: string | undefined;
    userAddress: IAddress | undefined;
}

export const useUpdateUserProfile = ({ userId, userAddress }: UseUpdateUserProfileProps) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (updatedData: Partial<IUser>) => {
            if (!userId) {
                throw new Error("User ID is missing. Cannot update profile.");
            }

            const { role, address, ...userDto } = updatedData;

            const payload: UpdateUserPayload = {
                userDto,
                addressDto: userAddress ? { ...userAddress } : undefined,
            };

            let formData = new FormData();
            formData = objectToFormData(payload, formData);

            const response = await fetch(`http://localhost:3000/api/v1/patient/${userId}`, {
                method: 'PATCH',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error({ errorData });
                throw new Error(errorData || 'Failed to update profile.');
            }
            return response.json();
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['userProfile', 'me'] });
            toast.success('Profile updated successfully!');
        },
        onError: (error: Error) => {
            toast.error(`Error updating profile: ${error.message}`);
        },
    });
};