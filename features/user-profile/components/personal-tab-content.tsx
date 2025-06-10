'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TabsContent } from "@/components/ui/tabs";
import { BloodTypeEnum, Gender, IAddress, IUser } from "@my-monorepo/shared-types";
import { useQueryClient } from '@tanstack/react-query'; // Import useQuery
import { Camera } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react"; // Import useEffect
import { useFetchUser } from "../hooks/fetch-user-query";
import { useUpdateUserImage } from "../hooks/update-user-inage-mutation";
import { useUpdateUserProfile } from "../hooks/update-user-profile-mutation";









export default function PersonalTabContent() {

    const [userProfile, setUserProfile] = useState<IUser | null>(null);

    const { data: fetchedUserProfile, isLoading, isError, error } = useFetchUser()

    useEffect(() => {
        if (fetchedUserProfile) {
            setUserProfile(fetchedUserProfile);
        }
    }, [fetchedUserProfile]);


    const updateUserProfileMutation = useUpdateUserProfile({ userId: userProfile?.id, userAddress: userProfile?.address });

    const uploadProfileImageMutation = useUpdateUserImage({ setUserProfile, userProfile });


    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            uploadProfileImageMutation.mutate(file);
        }
    };

    const handleSaveProfile = async () => {
        if (userProfile) {
            updateUserProfileMutation.mutate(userProfile);
        }
    };


    const updateUserField = (field: keyof IUser, value: any) => {
        setUserProfile((prev) => (prev ? {
            ...prev,
            [field]: value,
        } : null));
    };


    const updateAddressField = (field: keyof IAddress, value: any) => {
        setUserProfile((prev) => (prev ? {
            ...prev,
            address: {
                ...prev.address,
                [field]: value,
            },
        } : null));
    };


    if (isLoading) {
        return (
            <TabsContent value="personal" className="space-y-6 flex justify-center items-center h-[500px]">
                <div className="text-lg font-medium text-gray-700">Loading profile...</div>
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-paypal-medium-blue border-t-transparent ml-4" />
            </TabsContent>
        );
    }

    if (isError) {
        return (
            <TabsContent value="personal" className="space-y-6 flex justify-center items-center h-[500px]">
                <div className="text-red-500 text-center text-lg">Error loading profile: {error?.message}</div>
            </TabsContent>
        );
    }


    if (!userProfile) {
        return (
            <TabsContent value="personal" className="space-y-6 flex justify-center items-center h-[500px]">
                <div className="text-gray-500 text-center text-lg">No user profile data available.</div>
            </TabsContent>
        );
    }

    return (
        <TabsContent value="personal" className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                    <CardDescription>Upload a profile picture to personalize your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <div className="h-24 w-24 overflow-hidden rounded-full bg-muted">
                                <img
                                    src={userProfile.avatar || "/placeholder.svg"}
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                    width={96}
                                    height={96}
                                />
                            </div>
                            {uploadProfileImageMutation.isPending && (
                                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50">
                                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                </div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="profile-image" className="cursor-pointer">
                                <div className="flex items-center gap-2 rounded-md border border-paypal-medium-blue px-4 py-2 text-sm font-medium text-paypal-medium-blue hover:bg-paypal-medium-blue hover:text-white transition-colors">
                                    <Camera className="h-4 w-4" />
                                    Change Photo
                                </div>
                                <Input
                                    id="profile-image"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                    disabled={uploadProfileImageMutation.isPending}
                                />
                            </Label>
                            <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size 5MB.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                value={userProfile.firstName}
                                onChange={(e) => updateUserField("firstName", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                value={userProfile.lastName}
                                onChange={(e) => updateUserField("lastName", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={userProfile.email}
                            onChange={(e) => updateUserField("email", e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={userProfile.phone}
                            onChange={(e) => updateUserField("phone", e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="dateOfBirth">Date of Birth</Label>
                            <Input
                                id="dateOfBirth"
                                type="date"
                                // Convert Date object to YYYY-MM-DD string for input value
                                value={userProfile.dateOfBirth ? userProfile.dateOfBirth.toISOString().split('T')[0] : ''}
                                onChange={(e) => updateUserField("dateOfBirth", new Date(e.target.value))} // Convert back to Date object
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="gender">Gender</Label>
                            <Select value={userProfile.gender} onValueChange={(value) => updateUserField("gender", value as Gender)}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="bloodType">Blood Type</Label>
                            <Select value={userProfile.bloodType} onValueChange={(value) => updateUserField("bloodType", value as BloodTypeEnum)}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="A+">A+</SelectItem>
                                    <SelectItem value="A-">A-</SelectItem>
                                    <SelectItem value="B+">B+</SelectItem>
                                    <SelectItem value="B-">B-</SelectItem>
                                    <SelectItem value="AB+">AB+</SelectItem>
                                    <SelectItem value="AB-">AB-</SelectItem>
                                    <SelectItem value="O+">O+</SelectItem>
                                    <SelectItem value="O-">O-</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Address Information</CardTitle>
                    <CardDescription>Update your address details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="street">Street Address</Label>
                        <Input
                            id="street"
                            value={userProfile.address.street}
                            onChange={(e) => updateAddressField("street", e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="commune">Commune</Label>
                            <Input
                                id="commune"
                                value={userProfile.address.commune}
                                onChange={(e) => updateAddressField("commune", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="willaya">Willaya</Label>
                            <Input
                                id="willaya"
                                value={userProfile.address.commune}
                                onChange={(e) => updateAddressField("commune", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="postalCode">Postal Code</Label>
                            <Input
                                id="postalCode"
                                value={userProfile.address.postalCode}
                                onChange={(e) => updateAddressField("postalCode", e.target.value)}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button onClick={handleSaveProfile} disabled={updateUserProfileMutation.isPending}>
                    {updateUserProfileMutation.isPending ? 'Saving...' : 'Save Changes'}
                </Button>
            </div>
        </TabsContent>
    );
}
