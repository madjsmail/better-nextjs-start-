"use client"

import type React from "react"

import { Save } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MedicalTabContent from "./components/medical-tab-content"
import PersonalTabContent from "./components/personal-tab-content"
import PreferenceTabContent from "./components/preferences-tab-content"
import SecurityTabContent from "./components/security-tab-content"
import { IUser } from "@my-monorepo/shared-types"

export default function ProfilePage() {
    const [profileImage, setProfileImage] = useState<string>("/placeholder.svg?height=150&width=150")
    const [isUploading, setIsUploading] = useState(false)
    const [isSaving, setIsSaving] = useState(false)

    // Sample user data - in a real app, this would come from your backend
    const [userProfile, setUserProfile] = useState({} as IUser)

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setIsUploading(true)
            // Simulate upload delay
            setTimeout(() => {
                const reader = new FileReader()
                reader.onload = (e) => {
                    setProfileImage(e.target?.result as string)
                    setIsUploading(false)
                }
                reader.readAsDataURL(file)
            }, 1000)
        }
    }

    const handleSave = async () => {
        setIsSaving(true)
        // Simulate save delay
        setTimeout(() => {
            setIsSaving(false)
            // In a real app, you would send the data to your backend
            alert("Profile updated successfully!")
        }, 1000)
    }

    const updateProfile = (field: string, value: any) => {
        setUserProfile((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    // const updateNotifications = (field: string, value: boolean) => {
    //     setUserProfile((prev) => ({
    //         ...prev,
    //         notifications: {
    //             ...prev?.notifications,
    //             [field]: value,
    //         },
    //     }))
    // }

    return (
        <div className="flex min-h-screen flex-col">

            <div className="flex flex-1">
                <main className="flex-1 overflow-auto">
                    <div className="container py-6">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold">Profile Settings</h1>
                            <p className="text-muted-foreground">Manage your account information and preferences</p>
                        </div>

                        <Tabs defaultValue="personal" className="space-y-6">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger
                                    value="personal"
                                    className="data-[state=active]:text-paypal-medium-blue data-[state=active]:border-b-2 data-[state=active]:border-paypal-medium-blue"
                                >
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger
                                    value="medical"
                                    className="data-[state=active]:text-paypal-medium-blue data-[state=active]:border-b-2 data-[state=active]:border-paypal-medium-blue"
                                >
                                    Medical Info
                                </TabsTrigger>
                                <TabsTrigger
                                    value="preferences"
                                    className="data-[state=active]:text-paypal-medium-blue data-[state=active]:border-b-2 data-[state=active]:border-paypal-medium-blue"
                                >
                                    Preferences
                                </TabsTrigger>
                                <TabsTrigger
                                    value="security"
                                    className="data-[state=active]:text-paypal-medium-blue data-[state=active]:border-b-2 data-[state=active]:border-paypal-medium-blue"
                                >
                                    Security
                                </TabsTrigger>
                            </TabsList>

                            <PersonalTabContent />
                            <MedicalTabContent userProfile={userProfile as any} updateProfile={updateProfile} />
                            {/* <PreferenceTabContent
                                userProfile={userProfile as any}
                                updateProfile={updateProfile}
                                updateNotifications={updateNotifications} /> */}

                            <SecurityTabContent />





                        </Tabs>

                        {/* <div className="mt-6 flex justify-end">
                            <Button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="bg-paypal-medium-blue hover:bg-paypal-medium-blue/90 text-white"
                            >
                                {isSaving ? (
                                    <>
                                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save className="mr-2 h-4 w-4" />
                                        Save Changes
                                    </>
                                )}
                            </Button>
                        </div> */}
                    </div>
                </main>
            </div>
            <footer className="w-full border-t bg-background">
                <div className="container py-6">
                    <p className="text-center text-sm text-muted-foreground">
                        © 2023 Doctofree. All rights reserved. This is a demo clone.
                    </p>
                </div>
            </footer>
        </div>
    )
}
