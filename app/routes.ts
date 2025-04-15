import { type RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  route('/', './routes/bucketlab/index.tsx', [
    index('./routes/bucketlab/home/index.tsx'),
    route('/about', './routes/bucketlab/about/index.tsx'),
    route('/contact', './routes/bucketlab/contact/index.tsx'),
    route('/projects', './routes/bucketlab/projects/index.tsx'),
  ]),
  route('/bucketlab', './routes/homelab/index.tsx', [
    index('./routes/homelab/cubicle/index.tsx'),
  ]),
  route('/auth', './routes/auth/index.tsx', [
    index('./routes/auth/login/index.tsx'),
    route('new-user', './routes/auth/newUser/index.tsx'),
    route('forgot-email', './routes/auth/forgot-email/index.tsx'),
    route('reset-password', './routes/auth/reset-password/index.tsx'),
  ])
] satisfies RouteConfig;
