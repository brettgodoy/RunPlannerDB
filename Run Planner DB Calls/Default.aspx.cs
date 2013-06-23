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




public partial class _Default : Page
{
    [WebMethod]
    public static string SaveData(string ApplicationName, string Description)
    {
    //var ApplicationName = ApplicationName;
    //var Description = Description;

        System.Data.SqlClient.SqlConnection sqlConnection1 =
            new System.Data.SqlClient.SqlConnection("Data Source=(LocalDb)\\v11.0;AttachDbFilename='C:\\Users\\Brett\\Documents\\Visual Studio 2012\\WebSites\\Run Planner DB Calls\\App_Data\\aspnet-WebSite9-20130412211121.mdf';Initial Catalog=aspnet-WebSite9-20130412211121;Integrated Security=True");

        System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand("INSERT INTO Applications (ApplicationId, Description, ApplicationName) VALUES (NEWID(), @description, @applicationName)");
        cmd.Connection = sqlConnection1;

        cmd.Parameters.Add("@description", SqlDbType.NVarChar);
        cmd.Parameters.Add("@applicationName", SqlDbType.NVarChar);

        cmd.Parameters["@description"].Value = Description;
        cmd.Parameters["@applicationName"].Value = ApplicationName;

        sqlConnection1.Open();
        cmd.ExecuteNonQuery();
        sqlConnection1.Close();

        return Description.ToString();
    }

    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void FormView1_PageIndexChanging(object sender, FormViewPageEventArgs e)
    {

    }
    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //Inserting into Run Planner database. This does not work. 
        //string testData = TextBox1.Text;
        //System.Data.SqlClient.SqlConnection sqlConnection1 = 
        //    new System.Data.SqlClient.SqlConnection("Data Source=(LocalDb)\\v11.0;AttachDbFilename='C:\\Users\\Brett\\Documents\\RunPlannerDB.sdf';Initial Catalog=aspnet-WebSite9-20130412211121;Integrated Security=True");

        //System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand("INSERT INTO Run Planner Info (Username, Password) VALUES (@username, @password");
        //cmd.Connection = sqlConnection1;
        //cmd.Parameters.Add("@username", SqlDbType.NVarChar);
        //cmd.Parameters.Add("@password", SqlDbType.NVarChar);
        //cmd.Parameters["@username"].Value = testData;
        //cmd.Parameters["@password"].Value = testData;

        //sqlConnection1.Open();
        //cmd.ExecuteNonQuery();
        //sqlConnection1.Close();

        //Inserting text field values. This works. 
        string testData = TextBox1.Text;

        System.Data.SqlClient.SqlConnection sqlConnection1 =
            new System.Data.SqlClient.SqlConnection("Data Source=(LocalDb)\\v11.0;AttachDbFilename='C:\\Users\\Brett\\Documents\\Visual Studio 2012\\WebSites\\Run Planner DB Calls\\App_Data\\aspnet-WebSite9-20130412211121.mdf';Initial Catalog=aspnet-WebSite9-20130412211121;Integrated Security=True");

        System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand("INSERT INTO Applications (ApplicationId, Description, ApplicationName) VALUES (NEWID(), @description, @applicationName)");
        cmd.Connection = sqlConnection1;

        cmd.Parameters.Add("@description", SqlDbType.NVarChar);
        cmd.Parameters.Add("@applicationName", SqlDbType.NVarChar);

        cmd.Parameters["@description"].Value = testData;
        cmd.Parameters["@applicationName"].Value = testData;

        sqlConnection1.Open();
        cmd.ExecuteNonQuery();
        sqlConnection1.Close();
        
        //Different database. Not using data from text field. This code works.
        //var testData = TextBox1.Text;

        //System.Data.SqlClient.SqlConnection sqlConnection1 =
        //    new System.Data.SqlClient.SqlConnection("Data Source=(LocalDb)\\v11.0;AttachDbFilename='C:\\Users\\Brett\\Documents\\Visual Studio 2012\\WebSites\\WebSite9\\App_Data\\aspnet-WebSite9-20130412211121.mdf';Initial Catalog=aspnet-WebSite9-20130412211121;Integrated Security=True");

        //System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand();
        //cmd.CommandType = System.Data.CommandType.Text;
        //cmd.CommandText = "INSERT INTO Applications (ApplicationId, Description, ApplicationName) VALUES (NEWID(), '1234242', 'name')";
        ////cmd.CommandText = "INSERT INTO [dbo].[Applications] ([ApplicationName], [ApplicationId], [Description]) VALUES (N'/', NEWID(), NULL)";
        //cmd.Connection = sqlConnection1;

        //sqlConnection1.Open();
        //cmd.ExecuteNonQuery();
        //sqlConnection1.Close();
       

        //Third try
        //var testData = TextBox1.Text;

        //System.Data.SqlClient.SqlConnection sqlConnection1 = SqlDataSource1;

        //System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand();
        //cmd.CommandType = System.Data.CommandType.Text;
        //cmd.CommandText = "INSERT Username (Username, Test_1) VALUES (testData, testData)";
        //cmd.Connection = sqlConnection1;

        //sqlConnection1.Open();
        //cmd.ExecuteNonQuery();
        //sql.Connection1.Close();


        
            
            // Second try  
        //var testData = TextBox1.Text;
        //System.Data.SqlClient.SqlConnection sqlConnection1 =
        //    new System.Data.SqlClient.SqlConnection("Data Source='C:\\Users\\Brett\\My Documents\\RunPlannerDB.sdf';Password=rammasnur68");

        //System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand();
        //cmd.CommandType = System.Data.CommandType.Text;
        //cmd.CommandText = "INSERT Username (Username, Test_1) VALUES (testData, testData)";
        //cmd.Connection = sqlConnection1;

        //sqlConnection1.Open();
        //cmd.ExecuteNonQuery();
        //sqlConnection1.Close();
    

        // First try
        //var testData = TextBox1.Text;
        //var insertSQL = "INSERT INTO Run Planner Info (Test 1) VALUES (testData)";
 
        //string connectionString = "Data Source=C:\\Users\\Brett\\Documents\\RunPlannerDB.sdf;Password=***********";

        //using (var cn = new SqlConnection(connectionString))
        //using (var cmd = new SqlCommandType(insertSQL, cn))
        //{
        //    cn.Open();

        //    cmd.Parameters.Add("Test 1", SqlDbType.NVarChar);
        //    cmd.Parameters.Add("Username", SqlDbType.NVarChar);

        //    cmd.Parameters.["Test 1"].Value = testData;
        //    cmd.Parameters.["Username"].Value = testData;
        //    cmd.ExecuteNonQuery();
        //}
    }
    protected void CreateUserWizard1_CreatedUser(object sender, EventArgs e)
    {
        
    }

    [WebMethod]
    public static string SaveRunningData(decimal avgMile, string plan, int totalDistance, decimal avgFeeling)
    {
        //var ApplicationName = ApplicationName;
        //var Description = Description;

        System.Data.SqlClient.SqlConnection sqlConnection1 =
            new System.Data.SqlClient.SqlConnection("Data Source=(LocalDb)\\v11.0;AttachDbFilename='C:\\Users\\Brett\\Documents\\Visual Studio 2012\\WebSites\\Run Planner DB Calls\\App_Data\\aspnet-WebSite9-20130412211121.mdf';Initial Catalog=aspnet-WebSite9-20130412211121;Integrated Security=True");

        System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand("INSERT INTO RunningData (UserId, DateCreated, AvgMile, RunPlan, TotalDistance, AvgFeeling) VALUES ('robert123', GETDATE(), @AvgMile, @Plan, @TotalDistance, @AvgFeeling)");
        cmd.Connection = sqlConnection1;

        cmd.Parameters.Add("@AvgMile", SqlDbType.Decimal);
        cmd.Parameters.Add("@Plan", SqlDbType.NVarChar);
        cmd.Parameters.Add("@TotalDistance", SqlDbType.NVarChar);
        cmd.Parameters.Add("@AvgFeeling", SqlDbType.Decimal);

        cmd.Parameters["@AvgMile"].Value = avgMile;
        cmd.Parameters["@Plan"].Value = plan;
        cmd.Parameters["@TotalDistance"].Value = totalDistance;
        cmd.Parameters["@AvgFeeling"].Value = avgFeeling;

        sqlConnection1.Open();
        cmd.ExecuteNonQuery();
        sqlConnection1.Close();

        return totalDistance.ToString();
    }
}