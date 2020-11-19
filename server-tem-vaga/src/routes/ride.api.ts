import Ride from '../../../common/src/Ride/ride';
import RideRegister from '../ride.register';
import { Request, Response, Router } from 'express';

const rideRoutes = Router();

const rideRegister: RideRegister = new RideRegister();

rideRoutes.post('/ride', (req: Request, res: Response) => {
  // rideRegister.register(ride);
});

rideRoutes.put('/ride', (req: Request, res: Response) => {
  // rideRegister.update(ride)
});

/*rideRoutes.get('/ride/:id', (req: Request, res: Response) => {
  //rideRegister.getRide(id)
});*/

rideRoutes.get('/ride/some', (req: Request, res: Response) => {
  //rideRegister.getRides(id[])
});

rideRoutes.get('/ride/all', (req: Request, res: Response) => {
  res.send(JSON.stringify(rideRegister.getAllRides()))
});

rideRoutes.get(
  '/ride/filtered',
  (req: Request, res: Response) => {
     var ride = <Ride>req.body
     var r: Ride[]
     res.send(JSON.stringify(rideRegister.getFilteredRides(ride)));
     
     r = rideRegister.getFilteredRides(ride)
     if(r) {
     res.send(r)
     } else {
       res.send({"failure": ""})
     }
  }
);

rideRoutes.delete(
  '/ride/:id',
  (req: Request, res: Response) => {
    // rideRegister.delete(id)
  }
);

rideRoutes.put(
  '/ride/request/create/:id',
  (req: Request, res: Response) => {
    // rideRegister.createRequest(id, requesterCpf)
  }
);

rideRoutes.put(
  '/ride/request/cancel/:id',
  (req: Request, res: Response) => {
    // rideRegister.cancelRequest(id, requesterCpf)
  }
);

rideRoutes.put(
  '/ride/request/accept/:id',
  (req: Request, res: Response) => {
    // rideRegister.acceptRequest(id, acceptedCpf)
  }
);

rideRoutes.put(
  '/ride/request/reject/:id',
  (req: Request, res: Response) => {
    // rideRegister.rejectRequest(id, rejectedCpf)
  }
);

rideRoutes.put(
  '/ride/route/create/:id',
  (req: Request, res: Response) => {
    // rideRegister.createRoute(Route)
  }
);

rideRoutes.put(
  '/ride/route/update/:id',
  (req: Request, res: Response) => {
    // rideRegister.updateRoute(Route)
  }
);

module.exports = rideRoutes;
