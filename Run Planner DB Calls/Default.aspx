<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content runat="server" ID="FeaturedContent" ContentPlaceHolderID="FeaturedContent">
    <section class="featured">
        <div class="content-wrapper">
            <hgroup class="title">
                <h1><%: Title %>.</h1>
                <h2>Modify this template to jump-start your ASP.NET application.</h2>
            </hgroup>
            <p>
                To learn more about ASP.NET, visit <a href="http://asp.net" title="ASP.NET Website">http://asp.net</a>. 
                The page features <mark>videos, tutorials, and samples</mark> to help you get the most from 
                ASP.NET. If you have any questions about ASP.NET visit 
                <a href="http://forums.asp.net/18.aspx" title="ASP.NET Forum">our forums</a>.
                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
            </p>
        </div>
    </section>
</asp:Content>

<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <h3>We suggest the following:</h3>
    <ol class="round">
        <li class="one">
            <h5>Getting Started<asp:DataList ID="DataList1" runat="server" DataKeyField="Username" DataSourceID="SqlDataSource1">
                <ItemTemplate>
                    Username:
                    <asp:Label ID="UsernameLabel" runat="server" Text='<%# Eval("Username") %>' />
                    <br />
                    Test_1_:
                    <asp:Label ID="Test_1_Label" runat="server" Text='<%# Eval("Test_1_") %>' />
                    <br />
                    <br />
                </ItemTemplate>
                </asp:DataList>
                <asp:Login ID="Login1" runat="server">
                </asp:Login>
                <asp:LoginStatus ID="LoginStatus1" runat="server" />
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT [Username], [Test 1 ] AS Test_1_ FROM [ Run Planner Info]" DeleteCommand="DELETE FROM [ Run Planner Info] WHERE [Username] = @Username" InsertCommand="INSERT INTO [ Run Planner Info] ([Username], [Test 1 ]) VALUES (@Username, @Test_1_)" UpdateCommand="UPDATE [ Run Planner Info] SET [Test 1 ] = @Test_1_ WHERE [Username] = @Username">
                    <DeleteParameters>
                        <asp:Parameter Name="Username" Type="String" />
                    </DeleteParameters>
                    <InsertParameters>
                        <asp:Parameter Name="Username" Type="String" />
                        <asp:Parameter Name="Test_1_" Type="String" />
                    </InsertParameters>
                    <UpdateParameters>
                        <asp:Parameter Name="Test_1_" Type="String" />
                        <asp:Parameter Name="Username" Type="String" />
                    </UpdateParameters>
                </asp:SqlDataSource>
            </h5>
            ASP.NET Web Forms lets you build dynamic websites using a familiar drag-and-drop, event-driven model.
            A design surface and hundreds of controls and components let you rapidly build 
                <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click" />
            sophisticated, powerful UI-driven s<asp:TextBox ID="TextBox1" runat="server" OnTextChanged="TextBox1_TextChanged"></asp:TextBox>
                ites with data access.
            <a href="http://go.microsoft.com/fwlink/?LinkId=245146">Learn more…</a>
        </li>
        <li class="two">
            <h5>Add NuGet packages and jump-start your coding</h5>
            NuGet makes it easy to install and update free libraries and tools.
            <a href="http://go.microsoft.com/fwlink/?LinkId=245147">Learn more…</a>
            <asp:CreateUserWizard ID="CreateUserWizard1" runat="server" OnCreatedUser="CreateUserWizard1_CreatedUser">
                <WizardSteps>
                    <asp:CreateUserWizardStep runat="server" />
                    <asp:CompleteWizardStep runat="server" />
                </WizardSteps>
            </asp:CreateUserWizard>
            <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" DeleteCommand="DELETE FROM [ Run Planner Info] WHERE [Username] = @Username" InsertCommand="INSERT INTO [ Run Planner Info] ([Test 1 ], [Username]) VALUES (@Test_1_, @Username)" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT [Test 1 ] AS Test_1_, [Username] FROM [ Run Planner Info]" UpdateCommand="UPDATE [ Run Planner Info] SET [Test 1 ] = @Test_1_ WHERE [Username] = @Username">
                <DeleteParameters>
                    <asp:Parameter Name="Username" Type="String" />
                </DeleteParameters>
                <InsertParameters>
                    <asp:Parameter Name="Test_1_" Type="String" />
                    <asp:Parameter Name="Username" Type="String" />
                </InsertParameters>
                <UpdateParameters>
                    <asp:Parameter Name="Test_1_" Type="String" />
                    <asp:Parameter Name="Username" Type="String" />
                </UpdateParameters>
            </asp:SqlDataSource>
        </li>
        <li class="three">
            <h5>Find Web Hosting</h5>
            You can easily find a web hosting company that offers the right mix of features and price for your applications.
            <a href="http://go.microsoft.com/fwlink/?LinkId=245143">Learn more…</a>
        </li>
    </ol>
</asp:Content>