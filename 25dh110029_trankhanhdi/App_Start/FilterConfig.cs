using System.Web;
using System.Web.Mvc;

namespace _25dh110029_trankhanhdi
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
