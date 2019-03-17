using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppAssignment.Models
{
    public class TempIs
    {
        public static string FeverCheck(double tempInput)
        {
            if (tempInput < 15)
            {
                return "You should be dead!";
            }
            if (tempInput > 15 && tempInput < 37)
            {
                return "You are colled, get some Hotchoclate. ";
            }
            if (tempInput >= 37 && tempInput < 38 )
            {
                return "You are fine!";
            }
            if (tempInput > 38 && tempInput < 45)
            {
                return "You have fever, do somthing!";
            }
            return "Error, Enter a logical temperature please!";
        }
    }
}
