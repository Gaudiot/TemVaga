import Ride from '../../../common/src/Ride/ride';
import RideRegister from '../ride.register';
import express = require('express');

const rideRoutes = express.Router();

const rideRegister: RideRegister = new RideRegister();

rideRoutes.post('/ride', (req: express.Request, res: express.Response) => {
  // rideRegister.register(ride);
});

rideRoutes.put('/ride', (req: express.Request, res: express.Response) => {
  // rideRegister.update(ride)
});

rideRoutes.get('/ride/:id', (req: express.Request, res: express.Response) => {
  //rideRegister.getRide(id)
});

rideRoutes.get('/ride/some', (req: express.Request, res: express.Response) => {
  //rideRegister.getRides(id[])
});

rideRoutes.get('/ride/all', (req: express.Request, res: express.Response) => {
  rideRegister.getAllRides()
});

rideRoutes.get(
  '/ride/filtered',
  (req: express.Request, res: express.Response) => {
    // rideRegister.getFilteredRides(ride)
  }
);

rideRoutes.delete(
  '/ride/:id',
  (req: express.Request, res: express.Response) => {
    // rideRegister.delete(id)
  }
);

rideRoutes.put(
  '/ride/request/create/:id',
  (req: express.Request, res: express.Response) => {
    // rideRegister.createRequest(id, requesterCpf)
  }
);

rideRoutes.put(
  '/ride/request/cancel/:id',
  (req: express.Request, res: express.Response) => {
    // rideRegister.cancelRequest(id, requesterCpf)
  }
);

rideRoutes.put(
  '/ride/request/accept/:id',
  (req: express.Request, res: express.Response) => {
    // rideRegister.acceptRequest(id, acceptedCpf)
  }
);

rideRoutes.put(
  '/ride/request/reject/:id',
  (req: express.Request, res: express.Response) => {
    // rideRegister.rejectRequest(id, rejectedCpf)
  }
);

rideRoutes.put(
  '/ride/route/create/:id',
  (req: express.Request, res: express.Response) => {
    // rideRegister.createRoute(Route)
  }
);

rideRoutes.put(
  '/ride/route/update/:id',
  (req: express.Request, res: express.Response) => {
    // rideRegister.updateRoute(Route)
  }
);

module.exports = rideRoutes;
