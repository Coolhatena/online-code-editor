lexer grammar CommonLexerRules;

OPEN_PARENTH	: '(';
CLOSE_PARENTH	: ')';
OPEN_CURL		: '{';
CLOSE_CURL		: '}';
EQUALS			: '=';
PLUS			: '+';
MINUS			: '-'; 
MULT			: '*';
PRINT			: 'ptr';
DIV				: '/'; 
IF_PR			: 'if';
COND_MAT		: ('<'|'>'|'<='|'>=');
COND_LOG		: ('||'|'&&'|'=='|'!='|'true'|'false');
STRING			: '"'[a-zA-Z ]+'"';	
CHAR			: '"'[a-zA-Z ]'"';	
INT 			: [0-9]+ ;
FLOAT 			: [0-9]+[.][0-9]+;
ID				: [a-zA-Z]([a-zA-Z0-9_]+)?;
SEMI			: '!''\n'?;
INV_ID 			: [A-Za-z0-9+\-]+;
NEWLINE 		: '\r'? '\n';
WS				: [ \t\r\n]+ -> skip;