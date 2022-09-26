

// This Scraper will perform it's purpose on the google sheet editor excution log 

function Scraper() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    const activesheet = spreadsheet.getActiveSheet()
  
    const search = YouTube.Search.list('snippet, id', {q: "coding with javaScript", maxResults: 200} )
  
    Logger.log(search)
  
    const res = search.items.map((item) => [item.id.videoId, item.snippet.title, item.snippet.publishAt])
  
    const view = res.map((id) => id[0]).join(",")
  
    const stats = YouTube.Videos.list("statistics", {id: view})
  
  
  const videoStats = stats.items.map((item) => [item.statistics.likeCount,item.statistics.favoriteCount, item.statistics.commentCount] )
  
  activesheet.getRange(2, 1, res.length, res[0].length).setValues(res)
  
  activesheet.getRange(2, 3, videoStats.length, res[0].length).setValues(videoStats)
  
  }
  