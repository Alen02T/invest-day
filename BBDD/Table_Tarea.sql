CREATE TABLE Tarea(Id int IDENTITY(1,1) NOT NULL PRIMARY KEY, Nombre nvarchar(50) NOT NULL, Descripcion nvarchar(150), Fecha_tarea datetime2, N_telefono int, Link_maps nvarchar(225), Pagina_web nvarchar(200), Comentarios nvarchar(300))