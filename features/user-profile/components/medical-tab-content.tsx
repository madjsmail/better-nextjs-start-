'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { IUser } from "@my-monorepo/shared-types";


interface Prop {
    userProfile: IUser
    updateProfile: (field: string, value: any) => void
}

export default function MedicalTabContent({ userProfile, updateProfile }: Prop) {
    return (
        <TabsContent value="medical" className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Emergency Contact</CardTitle>
                    <CardDescription>Person to contact in case of emergency</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                        <Input
                            id="emergencyContact"
                            value={userProfile.emergencyContact}
                            onChange={(e) => updateProfile("emergencyContact", e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                        <Input
                            id="emergencyPhone"
                            type="tel"
                            value={userProfile.emergencyPhone}
                            onChange={(e) => updateProfile("emergencyPhone", e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Medical History</CardTitle>
                    <CardDescription>Important medical information for healthcare providers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="medicalHistory">Medical History & Allergies</Label>
                        <Textarea
                            id="medicalHistory"
                            placeholder="Include any allergies, chronic conditions, previous surgeries, etc."
                            value={userProfile.medicalHistory}
                            onChange={(e) => updateProfile("medicalHistory", e.target.value)}
                            rows={4}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="currentMedications">Current Medications</Label>
                        <Textarea
                            id="currentMedications"
                            placeholder="List all current medications, dosages, and frequency"
                            value={userProfile.currentMedications}
                            onChange={(e) => updateProfile("currentMedications", e.target.value)}
                            rows={3}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Insurance Information</CardTitle>
                    <CardDescription>Your health insurance details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                        <Input
                            id="insuranceProvider"
                            value={userProfile.insuranceProvider}
                            onChange={(e) => updateProfile("insuranceProvider", e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="insuranceNumber">Insurance Number</Label>
                        <Input
                            id="insuranceNumber"
                            value={userProfile.insuranceNumber}
                            onChange={(e) => updateProfile("insuranceNumber", e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    );
}