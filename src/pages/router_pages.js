import LoginPage from "./login";
import { login_page_path } from "./path_pages";

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
    // More pages
    
];