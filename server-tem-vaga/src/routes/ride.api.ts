import Ride from '../../../common/src/Ride/ride';
import RideRegister from '../ride.register';
import { Request, Response, Router } from 'express';

const rideRoutes = Router();

const rideRegister: RideRegister = new RideRegister();

rideRoutes.get('/ride/some', (req: Request, res: Response) => {
  // prettier-ignore
  console.log(req.query.ids)
  res.send({ success: 'ok' });
  // const rides: Ride[] = rideRegister.getRides(req.);
});

rideRoutes.get('/ride/all', (req: Request, res: Response) => {
  res.send(JSON.stringify(rideRegister.getAllRides()));
});

rideRoutes.get('/ride/filtered', (req: Request, res: Response) => {
  // rideRegister.getFilteredRides(ride)
});

rideRoutes.get('/ride/:id', (req: Request, res: Response) => {
  const ride: Ride = rideRegister.getRide(req.params.id);
  res.send(JSON.stringify(ride));
});

rideRoutes.post('/ride', (req: Request, res: Response) => {
  const ride = rideRegister.register(<Ride>req.body);
  if (ride) {
    res.send({
      success: 'The ride was registered successfully!',
      ride: JSON.stringify(ride),
    });
  } else {
    res.send({ failure: 'Something went wrong on ride registration' });
  }
});

rideRoutes.delete('/ride/:id', (req: Request, res: Response) => {
  // rideRegister.delete(id)
});

rideRoutes.put('/ride', (req: Request, res: Response) => {
  // rideRegister.update(ride)
});

rideRoutes.put('/ride/request/create/:id', (req: Request, res: Response) => {
  // rideRegister.createRequest(id, requesterCpf)
});

rideRoutes.put('/ride/request/cancel/:id', (req: Request, res: Response) => {
  // rideRegister.cancelRequest(id, requesterCpf)
});

rideRoutes.put('/ride/request/accept/:id', (req: Request, res: Response) => {
  // rideRegister.acceptRequest(id, acceptedCpf)
});

rideRoutes.put('/ride/request/reject/:id', (req: Request, res: Response) => {
  // rideRegister.rejectRequest(id, rejectedCpf)
});

rideRoutes.put('/ride/route/create/:id', (req: Request, res: Response) => {
  // rideRegister.createRoute(Route)
});

rideRoutes.put('/ride/route/update/:id', (req: Request, res: Response) => {
  // rideRegister.updateRoute(Route)
});

module.exports = rideRoutes;
