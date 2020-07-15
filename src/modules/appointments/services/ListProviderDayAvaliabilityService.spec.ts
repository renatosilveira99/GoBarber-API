import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvaliabilityService from './ListProviderDayAvaliabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvaliability: ListProviderDayAvaliabilityService;

describe('ListProviderDayAvaliability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvaliability = new ListProviderDayAvaliabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day avaliability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 4, 20, 11).getTime();
    });

    const avaliability = await listProviderDayAvaliability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(avaliability).toEqual(
      expect.arrayContaining([
        { hour: 8, avaliable: false },
        { hour: 9, avaliable: false },
        { hour: 10, avaliable: false },
        { hour: 14, avaliable: false },
        { hour: 15, avaliable: false },
        { hour: 16, avaliable: true },
        { hour: 13, avaliable: true },
      ]),
    );
  });
});
