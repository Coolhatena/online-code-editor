lexer grammar CommonLexerRules;

OPEN_PARENTH	: '(';
CLOSE_PARENTH	: ')';
OPEN_CURL		: '{';
CLOSE_CURL		: '}';
EQUALS			: '=';
PLUS			: '+';
MINUS			: '-';
MULT			: '*';
MOD				: '%';
PRINT			: 'ptr';
DIV				: '/';
IF_PR			: 'if';
ELSE_PR			: 'else';
WHILE_PR		: 'while';
DO_PR			: 'do';
COND_MAT		: ('<'|'>'|'<='|'>=');
COND_LOG		: ('||'|'&&'|'=='|'!='|'true'|'false');
STRING			: '"'.*?'"';
CHAR			: '"'[a-zA-Z ]?'"';
INT 			: [0-9]+;
FLOAT 			: [0-9]+[.][0-9]+;
SEMI			: '!''\n'?;
NEWLINE 		: '\r'? '\n';
ID				: [A-Za-z0-9_]+;
WS				: [ \t\r\n]+ -> skip;