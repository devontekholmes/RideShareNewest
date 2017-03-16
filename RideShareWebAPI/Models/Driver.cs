using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RideShareWebAPI.Models
{
    public class Driver
    {
       
        private double? xCoordinate;
        private double? yCoordinate;

        public Driver()
        {

        }

        public Driver(int driverId, string licensePlateNo, string name, double rating, double? xCoordinate, double? yCoordinate)
        {
            this.Id = driverId;
            this.licenseNo = licensePlateNo;
            this.Name = name;
            this.Rating = rating;
            this.xCoordinate = xCoordinate;
            this.yCoordinate = yCoordinate;
        }

        public int Id { get; set; }
        public string licenseNo{ get; set; }
        public string Name { get; set; }
        public double Rating{ get; set; }
        public double XCoordinate { get; set; }
        public double YCoordinate { get; set; }
    }
}