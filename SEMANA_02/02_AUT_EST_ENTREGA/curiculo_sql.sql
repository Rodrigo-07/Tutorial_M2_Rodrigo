CREATE TABLE Experiencia ( 
	ID_Pessoa            INT NOT NULL    ,
	ID_Experiencia       INT NOT NULL    ,
	Nome                 VARCHAR(50)     ,
	Cargo                VARCHAR(100)     ,
	Empresa              VARCHAR(70)     ,
	Inicio               DATE     ,
	Fim                  DATE     ,
	Local                VARCHAR(50)     ,
	conquistas           TEXT     ,
	CONSTRAINT pk_Experiência PRIMARY KEY ( ID_Experiencia, ID_Pessoa )
 );

CREATE TABLE Formacao ( 
	ID_pessoa            INT NOT NULL    ,
	ID_formacao          INT NOT NULL    ,
	instituicao          VARCHAR(150)     ,
	curso                VARCHAR(70)     ,
	inicio               DATE  DEFAULT inicio   ,
	fim                  DATE     ,
	local                VARCHAR(50)     ,
	tipo                 VARCHAR(100)     ,
	conquistas           TEXT     ,
	CONSTRAINT pk_Formação PRIMARY KEY ( ID_formacao, ID_pessoa )
 );

CREATE TABLE Habilidades ( 
	Id_habilidade        INT NOT NULL    ,
	ID_Pessoa            INT NOT NULL    ,
	Habilidade           INT     ,
	CONSTRAINT pk_Habilidades PRIMARY KEY ( Id_habilidade, ID_Pessoa )
 );

CREATE TABLE Personalidades ( 
	ID_personalidade     INT NOT NULL    ,
	ID_pessoa            INT NOT NULL    ,
	Traco_de_personalidade VARCHAR(70)     ,
	CONSTRAINT pk_Personalidades PRIMARY KEY ( ID_personalidade, ID_pessoa )
 );

CREATE TABLE Pessoa ( 
	ID                   INT NOT NULL  PRIMARY KEY  ,
	Nome                 VARCHAR(50) NOT NULL    ,
	Sobrenome            VARCHAR(150) NOT NULL    ,
	Telefone             INT NOT NULL    ,
	Genero               VARCHAR(30)     ,
	Email                VARCHAR(150) NOT NULL    ,
	Descricao            TEXT     ,
	Data_de_nascimento   DATE NOT NULL    ,
	Github               TEXT     ,
	Linkedln             TEXT     ,
	Foto                 TEXT     
 );

CREATE TABLE Realizacoes ( 
	ID_realizacao        INT NOT NULL    ,
	ID_Pessoa            INT NOT NULL    ,
	Título               VARCHAR(50)     ,
	Data                 DATE     ,
	Tipo                 VARCHAR(70)     ,
	Area                 VARCHAR(50)     ,
	CONSTRAINT pk_Realizações PRIMARY KEY ( ID_realizacao, ID_Pessoa )
 );

