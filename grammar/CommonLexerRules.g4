lexer grammar CommonLexerRules;

OPEN_CURL	: '{';
CLOSE_CURL	: '}';
EQUALS		: '=';
PLUS		: '+';
MINUS		: '-'; 
MULT		: '*';
PRINT		: 'ptr';
DIV			: '/'; 
INT 		: [0-9]+ ;
FLOAT 		: [0-9]+[.][0-9]+;
ID			: [a-zA-Z]([a-zA-Z0-9_]+)?;
CHAR		: [a-zA-Z];	
SEMI		: '!';
INV_ID 		: [A-Za-z0-9+\-]+;
NEWLINE 	: '\r'? '\n';
WS			: [ \t\r\n]+ -> skip;