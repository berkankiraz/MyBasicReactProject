using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using DailyNews.Models;

namespace DailyNews.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    
    public class NewsController : ControllerBase
    {
       private readonly IConfiguration _configuration;

         public NewsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/News
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select NewsId, NewsName ,NewsPhotoUrl,Newscontents from dbo.NewsTable";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DailyNewsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
       }

        [HttpPost]
        public JsonResult Post(News dep)
        {
            string query = @"
                    insert into dbo.NewsTable
                    (NewsName,NewsPhotoUrl,Newscontents)
                    values 
                    ('" + dep.NewsName + @"','" + dep.NewsPhotoUrl + @"','" + dep.Newscontents + @"')
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DailyNewsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(News emp)
        {
            string query = @"
                    update dbo.NewsTable set 
                    NewsName = '" + emp.NewsName + @"'
                    ,NewsPhotoUrl = '" + emp.NewsPhotoUrl + @"'
                    ,Newscontents = '" + emp.Newscontents + @"'
                    where NewsId = " + emp.NewsId + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DailyNewsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.NewsTable
                    where NewsId = " + id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DailyNewsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }





















    }
}


/*

    public class NewsController : ControllerBase
    {
        private readonly NewsContext _context;

        public NewsController(NewsContext context)
        {
            _context = context;
        }

        // GET: api/News
        [HttpGet]
        public async Task<ActionResult<IEnumerable<News>>> GetTodoItems()
        {
          if (_context.TodoItems == null)
          {
              return NotFound();
          }
            return await _context.TodoItems.ToListAsync();
        }

        // GET: api/News/5
        [HttpGet("{id}")]
        public async Task<ActionResult<News>> GetNews(int id)
        {
          if (_context.TodoItems == null)
          {
              return NotFound();
          }
            var news = await _context.TodoItems.FindAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return news;
        }

        // PUT: api/News/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNews(int id, News news)
        {
            if (id != news.NewsId)
            {
                return BadRequest();
            }

            _context.Entry(news).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/News
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<News>> PostNews(News news)
        {
          if (_context.TodoItems == null)
          {
              return Problem("Entity set 'NewsContext.TodoItems'  is null.");
          }
            _context.TodoItems.Add(news);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNews", new { id = news.NewsId }, news);
        }

        // DELETE: api/News/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            if (_context.TodoItems == null)
            {
                return NotFound();
            }
            var news = await _context.TodoItems.FindAsync(id);
            if (news == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(news);
            await _context.SaveChangesAsync();

            return NoContent();
        }
*/