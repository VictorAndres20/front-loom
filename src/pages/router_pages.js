import ContentTemplate from "./content/content_template";
import GeneratePage from "./content/generate";
import InboxPage from "./content/inbox";
import UsersPage from "./content/users";
import LoginPage from "./login";
import { content_path, generate_path, inbox_path, login_page_path, users_path } from "./path_pages";
import AuthWrapper from '../hoc/auth_wrapper';

/**
 * { 
 *      path: `${my_page_path.path}`, 
 *      component: MyPage, 
 * },
 * //Nested 
 * { 
 *      path: `${parent_path.path}`, 
 *      component: ParentTemplate, // This has <Outlet /> Component
 *      children: [
 *          {
 *              path: `${child_path.path}`, 
 *              component: ChildPage,
 *          },
 *      ],
 * },
 * 
 */

export const router_pages = [
    // My Page
    { 
        path: `${login_page_path.path}`, 
        component: LoginPage, 
    },
    { 
        path: `${content_path.path}`, 
        component: AuthWrapper(ContentTemplate), // This has <Outlet /> Component
        children: [
            {
                path: `${generate_path.path}`, 
                component: GeneratePage,
            },
            {
                path: `${inbox_path.path}`, 
                component: InboxPage,
            },
            {
                path: `${users_path.path}`, 
                component: UsersPage,
            },
        ],
    },
    
];