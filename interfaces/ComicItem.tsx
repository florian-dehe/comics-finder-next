interface ComicItemData {
    id: number,
    title: string
    volume: number
    cover_url: string
    description: string,
    isbn: number,
    pages: number
    release_date: Date
    serie: {
      id: number,
      serie_name: string
      collection: {
        id: number
        name: string
        editor: {
            id: number
            name: string
        }
      }
    }
}

export default ComicItemData;