'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { TabsContent } from "@/components/ui/tabs";
import { IUser } from "@my-monorepo/shared-types";
interface Prop {
    userProfile: IUser
    updateProfile: (field: string, value: any) => void
    updateNotifications: (field: string, value: any) => void
}
export default function PreferenceTabContent({ userProfile, updateProfile,updateNotifications }: Prop) {
    return (
        <TabsContent value="preferences" className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Language & Communication</CardTitle>
                    <CardDescription>Set your preferred language and communication preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="preferredLanguage">Preferred Language</Label>
                        <Select
                            value={userProfile.preferredLanguage}
                            onValueChange={(value) => updateProfile("preferredLanguage", value)}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="spanish">Spanish</SelectItem>
                                <SelectItem value="french">French</SelectItem>
                                <SelectItem value="german">German</SelectItem>
                                <SelectItem value="italian">Italian</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Choose how you want to receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">
                                Receive appointment confirmations and updates via email
                            </p>
                        </div>
                        <Switch
                            id="email-notifications"
                            checked={userProfile.notifications.email}
                            onCheckedChange={(checked) => updateNotifications("email", checked)}
                        />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="sms-notifications">SMS Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive appointment reminders via text message</p>
                        </div>
                        <Switch
                            id="sms-notifications"
                            checked={userProfile.notifications.sms}
                            onCheckedChange={(checked) => updateNotifications("sms", checked)}
                        />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="reminder-notifications">Appointment Reminders</Label>
                            <p className="text-sm text-muted-foreground">Get reminded about upcoming appointments</p>
                        </div>
                        <Switch
                            id="reminder-notifications"
                            checked={userProfile.notifications.reminders}
                            onCheckedChange={(checked) => updateNotifications("reminders", checked)}
                        />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="marketing-notifications">Marketing Communications</Label>
                            <p className="text-sm text-muted-foreground">Receive health tips and promotional offers</p>
                        </div>
                        <Switch
                            id="marketing-notifications"
                            checked={userProfile.notifications.marketing}
                            onCheckedChange={(checked) => updateNotifications("marketing", checked)}
                        />
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    );
}