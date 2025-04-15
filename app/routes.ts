import { type RouteConfig } from "@react-router/dev/routes";
import { index, route, prefix } from "@react-router/dev/routes";
import bucketlabRoutes from './routes/bucketlab/router.tsx';

export default [
  index('./routes/bucketlab/root.tsx'),
  ...prefix('bucketlab', bucketlabRoutes),
] satisfies RouteConfig;
