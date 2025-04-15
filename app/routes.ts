import { type RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  route('/bucketlab', './routes/bucketlab', [
    index('./routes/bucketlab/home'),
    route('/about', './routes/bucketlab/about'),
    route('/contact', './routes/bucketlab/contact'),
    route('/projects', './routes/bucketlab/projects'),
  ]),
  route('/homelab', './routes/homelab', [
    index('./routes/homelab/cubicle'),
  ]),
  route('/auth', './routes/auth', [
    index('./routes/auth/login'),
    route('/newUser', './routes/auth/newUser'),
    route('/forgot-password', './routes/auth/forgot-password'),
    route('/reset-password', './routes/auth/reset-password'),
  ])
] satisfies RouteConfig;
