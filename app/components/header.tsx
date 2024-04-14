import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { getUserInitials } from '../utils/string';
import { NavDropdownMenuItem } from './nav-components';

export default async function Header() {
    const session = await getServerSession();
    const userInitials = getUserInitials(session?.user?.name);

    return (
        <nav className="flex-none z-50 shadow  bg-white dark:bg-gray-900">
            <div className="container px-4 py-2 md:px-6 flex flex-row items-center justify-between">
                <Link href="/dashboard">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        ft
                    </h3>
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage
                                src={session?.user?.image ?? undefined}
                            />
                            <AvatarFallback>{userInitials}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-2">
                        <DropdownMenuLabel>
                            {session?.user?.name}
                            <br />
                            <span className="font-light">
                                {session?.user?.email}
                            </span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <NavDropdownMenuItem
                            path="/auth/signout"
                            className="text-red-700 dark:text-red-500"
                        >
                            <LogOut className="w-4 mr-2" />
                            Sign out
                        </NavDropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}
