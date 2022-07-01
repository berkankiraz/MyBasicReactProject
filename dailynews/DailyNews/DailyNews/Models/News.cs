
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DailyNews.Models
{
    public class News
    {
        public int NewsId { get; set; }
        public string? NewsName { get; set; }
        public string? NewsPhotoUrl { get; set; }
        public string? Newscontents { get; set; }
        
    }
}
