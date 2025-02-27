"use client"

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("xzzdnpvv");

    if (state.succeeded) {
        return (
            <div className="flex justify-center py-20">
                <Card className="w-full max-w-lg backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl">
                    <CardContent className="flex flex-col items-center justify-center py-10">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                            Message Sent!
                        </div>
                        <p className="text-white text-center">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <section className="py-10 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Title with gradient effect */}
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-md">
                    Contact Me
                </h2>
                <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 mb-6"></div>
                <p className="text-gray-400 mt-2">Let's build something amazing together!</p>
            </div>

            {/* Contact Card */}
            <div className="flex justify-center mt-10">
                <Card className="w-full max-w-lg backdrop-blur-lg bg-white/10 border border-white/10
                    hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 rounded-xl relative">

                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10
                        opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <CardHeader>
                        <CardTitle className="text-white text-2xl">Let's Talk</CardTitle>
                        <CardDescription className="text-gray-300">
                            Fill out the form and I'll get back to you as soon as possible.
                        </CardDescription>
                    </CardHeader>

                    {/* Form - Now wrapped around both CardContent and CardFooter */}
                    <form onSubmit={handleSubmit}>
                        <CardContent className="relative z-10">
                            <div className="space-y-4">
                                {/* Name Input */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name" className="text-white">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="bg-white/10 text-white placeholder-gray-400
                                            border border-white/10 focus:ring-purple-500"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email" className="text-white">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="bg-white/10 text-white placeholder-gray-400
                                            border border-white/10 focus:ring-purple-500"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="message" className="text-white">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write your message here..."
                                        className="bg-white/10 text-white placeholder-gray-400
                                            border border-white/10 focus:ring-purple-500"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>
                        </CardContent>

                        {/* Submit Button - Now inside the form */}
                        <CardFooter className="flex justify-center relative z-10">
                            <Button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white
                                    hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                            >
                                {state.submitting ? "Sending..." : "Send Message"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </section>
    );
}