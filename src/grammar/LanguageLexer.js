// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,21,134,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,70,8,4,1,5,1,5,1,6,1,6,1,7,
1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,13,4,13,91,
8,13,11,13,12,13,92,1,14,4,14,96,8,14,11,14,12,14,97,1,14,1,14,4,14,102,
8,14,11,14,12,14,103,1,15,1,15,4,15,108,8,15,11,15,12,15,109,3,15,112,8,
15,1,16,1,16,1,17,1,17,1,18,4,18,119,8,18,11,18,12,18,120,1,19,3,19,124,
8,19,1,19,1,19,1,20,4,20,129,8,20,11,20,12,20,130,1,20,1,20,0,0,21,1,1,3,
2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
16,33,17,35,18,37,19,39,20,41,21,1,0,6,1,0,48,57,1,0,46,46,2,0,65,90,97,
122,4,0,48,57,65,90,95,95,97,122,5,0,43,43,45,45,48,57,65,90,97,122,3,0,
9,10,13,13,32,32,143,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,
0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,
0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,1,
43,1,0,0,0,3,45,1,0,0,0,5,47,1,0,0,0,7,49,1,0,0,0,9,69,1,0,0,0,11,71,1,0,
0,0,13,73,1,0,0,0,15,75,1,0,0,0,17,77,1,0,0,0,19,79,1,0,0,0,21,81,1,0,0,
0,23,83,1,0,0,0,25,87,1,0,0,0,27,90,1,0,0,0,29,95,1,0,0,0,31,105,1,0,0,0,
33,113,1,0,0,0,35,115,1,0,0,0,37,118,1,0,0,0,39,123,1,0,0,0,41,128,1,0,0,
0,43,44,5,10,0,0,44,2,1,0,0,0,45,46,5,40,0,0,46,4,1,0,0,0,47,48,5,41,0,0,
48,6,1,0,0,0,49,50,5,115,0,0,50,51,5,116,0,0,51,52,5,97,0,0,52,53,5,114,
0,0,53,54,5,116,0,0,54,55,5,32,0,0,55,56,5,45,0,0,56,57,5,45,0,0,57,58,5,
62,0,0,58,8,1,0,0,0,59,60,5,101,0,0,60,61,5,110,0,0,61,70,5,116,0,0,62,63,
5,112,0,0,63,64,5,100,0,0,64,65,5,101,0,0,65,70,5,99,0,0,66,67,5,99,0,0,
67,68,5,116,0,0,68,70,5,114,0,0,69,59,1,0,0,0,69,62,1,0,0,0,69,66,1,0,0,
0,70,10,1,0,0,0,71,72,5,123,0,0,72,12,1,0,0,0,73,74,5,125,0,0,74,14,1,0,
0,0,75,76,5,61,0,0,76,16,1,0,0,0,77,78,5,43,0,0,78,18,1,0,0,0,79,80,5,45,
0,0,80,20,1,0,0,0,81,82,5,42,0,0,82,22,1,0,0,0,83,84,5,112,0,0,84,85,5,116,
0,0,85,86,5,114,0,0,86,24,1,0,0,0,87,88,5,47,0,0,88,26,1,0,0,0,89,91,7,0,
0,0,90,89,1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,28,1,0,0,
0,94,96,7,0,0,0,95,94,1,0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,
98,99,1,0,0,0,99,101,7,1,0,0,100,102,7,0,0,0,101,100,1,0,0,0,102,103,1,0,
0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,30,1,0,0,0,105,111,7,2,0,0,106,108,
7,3,0,0,107,106,1,0,0,0,108,109,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,
110,112,1,0,0,0,111,107,1,0,0,0,111,112,1,0,0,0,112,32,1,0,0,0,113,114,7,
2,0,0,114,34,1,0,0,0,115,116,5,33,0,0,116,36,1,0,0,0,117,119,7,4,0,0,118,
117,1,0,0,0,119,120,1,0,0,0,120,118,1,0,0,0,120,121,1,0,0,0,121,38,1,0,0,
0,122,124,5,13,0,0,123,122,1,0,0,0,123,124,1,0,0,0,124,125,1,0,0,0,125,126,
5,10,0,0,126,40,1,0,0,0,127,129,7,5,0,0,128,127,1,0,0,0,129,130,1,0,0,0,
130,128,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,6,20,0,0,133,42,
1,0,0,0,10,0,69,92,97,103,109,111,120,123,130,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LanguageLexer extends antlr4.Lexer {

    static grammarFileName = "Language.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\\n'", "'('", "')'", "'start -->'", null, 
                         "'{'", "'}'", "'='", "'+'", "'-'", "'*'", "'ptr'", 
                         "'/'", null, null, null, null, "'!'" ];
	static symbolicNames = [ null, null, null, null, "MAIN", "TYPE", "OPEN_CURL", 
                          "CLOSE_CURL", "EQUALS", "PLUS", "MINUS", "MULT", 
                          "PRINT", "DIV", "INT", "FLOAT", "ID", "CHAR", 
                          "SEMI", "INV_ID", "NEWLINE", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "MAIN", "TYPE", "OPEN_CURL", 
                      "CLOSE_CURL", "EQUALS", "PLUS", "MINUS", "MULT", "PRINT", 
                      "DIV", "INT", "FLOAT", "ID", "CHAR", "SEMI", "INV_ID", 
                      "NEWLINE", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LanguageLexer.EOF = antlr4.Token.EOF;
LanguageLexer.T__0 = 1;
LanguageLexer.T__1 = 2;
LanguageLexer.T__2 = 3;
LanguageLexer.MAIN = 4;
LanguageLexer.TYPE = 5;
LanguageLexer.OPEN_CURL = 6;
LanguageLexer.CLOSE_CURL = 7;
LanguageLexer.EQUALS = 8;
LanguageLexer.PLUS = 9;
LanguageLexer.MINUS = 10;
LanguageLexer.MULT = 11;
LanguageLexer.PRINT = 12;
LanguageLexer.DIV = 13;
LanguageLexer.INT = 14;
LanguageLexer.FLOAT = 15;
LanguageLexer.ID = 16;
LanguageLexer.CHAR = 17;
LanguageLexer.SEMI = 18;
LanguageLexer.INV_ID = 19;
LanguageLexer.NEWLINE = 20;
LanguageLexer.WS = 21;



