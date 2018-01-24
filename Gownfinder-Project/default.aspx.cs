using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.IO;

namespace Gownfinder_Project
{
    public partial class _default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Onload view homepage
            Frame.Attributes.Add("src", "homepage.aspx");
        }

        [WebMethod]
        public static string LoadPinSetData(string request)
        {
            string latLongPath = HttpContext.Current.Server.MapPath(".") + @"\LatLongs.txt";
            StreamReader input = new StreamReader(latLongPath);
            string inLine = "";
            string returnData = "";

            while ((inLine = input.ReadLine()) != null)
                returnData += inLine + "~";

            input.Close();
            return returnData;
        }
    }
}