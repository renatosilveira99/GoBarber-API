import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvaliabilityService from '@modules/appointments/services/ListProviderDayAvaliabilityService';

export default class ProviderDayAvaliabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { day, month, year } = request.body;
    const { provider_id } = request.params;

    const listProviderDayAvaliability = container.resolve(
      ListProviderDayAvaliabilityService,
    );

    const avaliability = await listProviderDayAvaliability.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(avaliability);
  }
}
