"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { ChevronDown, Loader, LogOut, Menu } from "lucide-react";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const { user, isAuthenticated, isLoading, error } = useKindeBrowserClient();

  return (
    <header className="sticky top-0 z-[9] w-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Image
              src=""
              height={40}
              width={40}
              alt="ResumeX"
              className="rounded-full border-2 border-white shadow-md"
            />
            <span className="text-xl font-bold text-white md:text-2xl">
              ResumeX
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {isLoading || error ? (
            <Loader className="!size-6 animate-spin text-white" />
          ) : (
            <Fragment>
              {isAuthenticated && user ? (
                <>
                  <span className="hidden text-sm text-indigo-100 md:inline-block">
                    Welcome,
                  </span>
                  <span className="hidden font-bold text-white md:inline-block">
                    {user?.given_name} {user?.family_name}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 rounded-full p-0"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={user?.picture || ""}
                            alt={user?.given_name || ""}
                          />
                          <AvatarFallback className="bg-indigo-200 text-indigo-700">
                            {user?.given_name?.[0]}
                            {user?.family_name?.[0]}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem className="flex items-center justify-between">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {user.given_name} {user.family_name}
                          </p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <LogoutLink className="flex w-full items-center text-destructive">
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                        </LogoutLink>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : null}
            </Fragment>
          )}
        </div>
      </div>
    </header>
  );
}
