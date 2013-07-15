using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;
using System.Web.Services;


public partial class Login : Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
   
    protected void loginClicked(object sender, EventArgs e)
    {
        Response.Write(this.User);
    }
    protected void Login1_Authenticate(object sender, AuthenticateEventArgs e)
    {
        Response.Write(this.User);
    }
    protected void Login1_Authenticate1(object sender, AuthenticateEventArgs e)
    {

    }
}