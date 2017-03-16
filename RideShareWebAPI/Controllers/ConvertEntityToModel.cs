using System;
using System.Collections.Generic;
using System.Linq;
using DM = RideShareWebAPI.Models;
using System.Web;
using System.Web.Http.Cors;

namespace RideShareWebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public static class ConvertEntityToModel
    {
        public static DM.Customer CustomerToModel(RideShare.DAL.Customer entity)
        {
            DM.Customer result = new Models.Customer(entity.Email, entity.Password, entity.Name, entity.PhoneNo, entity.XCoordinate, entity.YCoordinate);
            return result;
        }

        public static DM.Driver DriverToModel(RideShare.DAL.Driver entity)
        {
            DM.Driver result = new Models.Driver(entity.DriverId, entity.LicensePlateNo, entity.Name, entity.Rating, entity.XCoordinate, entity.YCoordinate);
            return result;
        }
    }
}