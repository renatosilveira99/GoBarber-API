import { Router } from 'express';

import ProviderMonthAvaliabilityController from '../controllers/ProviderMonthAvaliabilityController';
import ProviderDayAvaliabilityController from '../controllers/ProviderDayAvaliabilityController';
import ProvidersController from '../controllers/ProvidersController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvaliabilityController = new ProviderMonthAvaliabilityController();
const providerDayAvaliabilityController = new ProviderDayAvaliabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-avaliability',
  providerMonthAvaliabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-avaliability',
  providerDayAvaliabilityController.index,
);

export default providersRouter;
