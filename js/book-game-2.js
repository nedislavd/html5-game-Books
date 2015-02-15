// Задача 13. Игра: Книги
// Напишете игра, която показва заглавие на световноизвестен книга,
// но във всяка дума да има до 50% липсваши букви на случаен принцип всеки път.
// Ако думата е от две букви, то скритата буква трябва да е първата.
// Допълнително трябва да бъде изписано името на автора.

// За да спечели играчът трябва да познае заглавието на книгата с не повече от 3 опита в рамките на минута.

// Например:

// __лик_я_ _e_сб_,
// Франсис Скот Фицджералд
// Отговор: Великият Гетсби


var bookDataArray = [{
        "title" : "Lolita",
        "author" : "Vladimir Nabokov",
    }, {
        "title" : "Brave New World",
        "author" : "Aldous Huxley",
    }, {
        "title" : "Catch 22",
        "author" : "Joseph Heller",
    }, {
        "title" : "The Lord of the Rings",
        "author" : "J.R.R. Tolkien",
    }, {
        "title" : "Slaughterhouse Five",
        "author" : "Kurt Vonnegut",
    }
];

/////////////////////////////////////////////////////////////////////////
//	class BookData
function	BookData( title, author )
{
	//	Private data
	var	m_title	= title;
	var	m_author	= author;

	//	Public, read-only access to the internal data
	this.Title		= function()	{	return	m_title;	}
	this.Author		= function()	{	return	m_author;	}
		
	/////////////////////////////////////////////////////////////////////////
	
	//	Get a crypt-title. The user should guess it.
	this.getCryptedTitle	= function()
	{
		//	Process every word separately
		var	words	= m_title.split( " " );
		var	newTitle	= "";
		for( var i = 0; i < words.length; i++ )
		{
			var	w	= words[ i ];
			
			var	count	= w.length;
			count	= count/2;			//	We remove half of the characters (50%)
			for( ; count > 0; count-- )
			{
				var	r	= Math.random();
				r	= r * (w.length-1);
				w	= w.substr( 0, r ) + "_" + w.substr( r+1 );
			}
			
			//	Add the crypted word to the resulting new crypted title
			if( newTitle.length > 0 )
				newTitle	+= " ";
			newTitle	= newTitle + w;
		}
		
		return	newTitle;
	}
	/////////////////////////////////////////////////////////////////////////
	
	//	Check if the user guessed the title
	this.checkTitle		= function( title )
	{
		return	m_title === title;
	}
	/////////////////////////////////////////////////////////////////////////
}
/////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////
//	class BookGame
function	BookGame()
{
	//	Private data
	var	m_booksList	= bookDataArray;
	var	m_currentBook	= -1;
	
	/////////////////////////////////////////////////////////////////////////

	//	Select one book from the list
	this.selectBook		= function()
	{
		m_currentBook++;
		var	bookItem	= m_booksList[m_currentBook];
		var	book		= new BookData( bookItem["title"], bookItem["author"] );
		return	book;
	}
	/////////////////////////////////////////////////////////////////////////
}
/////////////////////////////////////////////////////////////////////////
