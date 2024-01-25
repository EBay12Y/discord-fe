"use client";

import React, { useEffect } from "react";
import CreateServerModal from "@/components/modals/create-server-modal";
import InviteModal from "@/components/modals/invite-modal";
import EditServerModal from "@/components/modals/edit-server-modal";
import ManageMember from "@/components/modals/manage-member-modal";
import CreateChannelModal from "@/components/modals/create-channel-modal";
import LeaveServerModal from "@/components/modals/leave-server-modal";
import DeleteServerModal from "@/components/modals/delete-server-modal";

export default function ModalProvider() {
    const [isMounted, setIsMounted] = React.useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;

    return (
        <>
            <CreateServerModal />
            <EditServerModal />
            <InviteModal />
            <ManageMember />
            <CreateChannelModal />
            <LeaveServerModal />
            <DeleteServerModal />
        </>
    );
}
