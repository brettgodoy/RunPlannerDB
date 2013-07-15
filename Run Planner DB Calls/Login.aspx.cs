using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;


public partial class Login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
         //If the user is logged in, displays their user name using the session data
        if (Context.User.Identity.Name != "")
        {
            Response.Write("Hello " + Context.User.Identity.Name);
        }
    }
}