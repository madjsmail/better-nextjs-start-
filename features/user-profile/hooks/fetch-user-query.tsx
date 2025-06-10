import { IUser } from "@my-monorepo/shared-types";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface props {

}

export const useFetchUser = () => {
    const queryClient = useQueryClient();
    const { data: sessionData } = useSession();

    return useQuery<IUser, Error>({
            queryKey: ['userProfile', 'me'],
            queryFn: async () => {
                const response = await fetch('http://localhost:3000/api/v1/auth/me', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionData?.tokens.accessToken}`,
                    },
                });;
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch user profile.');
                }
                const userData: IUser = await response.json();
    
    
                if (typeof userData.dateOfBirth === 'string') {
                    userData.dateOfBirth = new Date(userData.dateOfBirth);
                }
                if (typeof userData.createdAt === 'string') {
                    userData.createdAt = new Date(userData.createdAt);
                }
                if (typeof userData.updatedAt === 'string') {
                    userData.updatedAt = new Date(userData.updatedAt);
                }
                if (typeof userData.verificationDate === 'string') {
                    userData.verificationDate = new Date(userData.verificationDate);
                }
    
                return userData;
            },
            // You might add an 'enabled' option here if user authentication is required
            // enabled: !!someAuthToken,
        });
};