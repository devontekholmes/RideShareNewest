//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RideShare.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Driver
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Driver()
        {
            this.RideInfoes = new HashSet<RideInfo>();
        }
    
        public int DriverId { get; set; }
        public string LicensePlateNo { get; set; }
        public string Name { get; set; }
        public double Rating { get; set; }
        public Nullable<double> XCoordinate { get; set; }
        public Nullable<double> YCoordinate { get; set; }
    
        public virtual Car Car { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RideInfo> RideInfoes { get; set; }
    }
}