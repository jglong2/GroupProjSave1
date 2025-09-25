using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        // GET: api/menu/{placeId}
        [HttpGet("{placeId}")]
        public ActionResult<IEnumerable<Menu>> Get(string placeId)
        {
            var db = new Database();
            var items = db.GetMenuForPlace(placeId);
            return Ok(items);
        }
    }
}
