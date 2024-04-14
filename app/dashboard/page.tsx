import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarTrigger,
} from '@/components/ui/menubar';
import { Plus } from 'lucide-react';
import ContentWrapper from '../components/content-wrapper';
import { NavMenubarItem } from '../components/nav-components';

export default function Page() {
    const ids: number[] = [];
    for (let i = 0; i < 100; i++) {
        ids.push(i);
    }

    return (
        <ContentWrapper>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Plus className="w-4 mr-2" />
                        New
                    </MenubarTrigger>
                    <MenubarContent>
                        <NavMenubarItem path="dashboard/new/photoparadies">
                            Photoparadies
                        </NavMenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </ContentWrapper>
    );
}
