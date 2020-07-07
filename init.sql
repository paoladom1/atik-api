CREATE EXTENSION pgcrypto;

CREATE TABLE public.categoria (
	id serial NOT NULL,
	nombre varchar(255) NULL,
	descripcion varchar(255) NULL,
	imagen varchar(255) NULL,
	CONSTRAINT categoria_pkey PRIMARY KEY (id)
);

CREATE TABLE public.orden (
	id serial NOT NULL,
	tipo varchar(255) NULL,
	fecha_entrega timestamptz NULL,
	hora_entrega time NULL,
	subtotal int4 NULL,
	total int4 NULL,
	envio int4 NULL,
	fecha_pedido timestamptz NULL,
	estado varchar(255) NULL,
	id_ubicacion int4 NULL,
	cliente int4 NULL,
	"promocionId" int4 NULL,
	CONSTRAINT orden_pkey PRIMARY KEY (id)
);

CREATE TABLE public.producto (
	id serial NOT NULL,
	nombre varchar(255) NULL,
	precio int4 NULL,
	descripcion varchar(255) NULL,
	sabor varchar(255) NULL,
	tamanio int4 NULL,
	indicaciones varchar(255) NULL,
	imagen varchar(255) NULL,
	CONSTRAINT producto_pkey PRIMARY KEY (id)
);

CREATE TABLE public.productocategoria (
	"categoriumId" int4 NOT NULL,
	"productoId" int4 NOT NULL,
	CONSTRAINT productocategoria_pkey PRIMARY KEY ("categoriumId", "productoId")
);

CREATE TABLE public.productoorden (
	"ordenId" int4 NOT NULL,
	"productoId" int4 NOT NULL,
	CONSTRAINT productoorden_pkey PRIMARY KEY ("ordenId", "productoId")
);

CREATE TABLE public.promocion (
	id serial NOT NULL,
	nombre varchar(255) NULL,
	descuento int4 NULL,
	CONSTRAINT promocion_pkey PRIMARY KEY (id)
);

CREATE TABLE public.rol (
	id serial NOT NULL,
	rol varchar(255) NULL,
	CONSTRAINT rol_pkey PRIMARY KEY (id)
);

CREATE TABLE public.ubicacion (
	id serial NOT NULL,
	nombre varchar(255) NULL,
	direccion varchar(255) NULL,
	CONSTRAINT ubicacion_pkey PRIMARY KEY (id)
);

CREATE TABLE public.usuario (
	id serial NOT NULL,
	nombre_usuario varchar(255) NULL,
	nombre varchar(255) NULL,
	apellido varchar(255) NULL,
	telefono varchar(255) NULL,
	correo varchar(255) NULL,
	contrasenia varchar(255) NULL,
	"role" int4 NULL,
	CONSTRAINT usuario_pkey PRIMARY KEY (id)
);

ALTER TABLE public.orden ADD CONSTRAINT orden_cliente_fkey FOREIGN KEY (cliente) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE public.orden ADD CONSTRAINT orden_id_ubicacion_fkey FOREIGN KEY (id_ubicacion) REFERENCES ubicacion(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE public.orden ADD CONSTRAINT "orden_promocionId_fkey" FOREIGN KEY ("promocionId") REFERENCES promocion(id) ON UPDATE CASCADE ON DELETE SET NULL;

ALTER TABLE public.productocategoria ADD CONSTRAINT "productocategoria_categoriumId_fkey" FOREIGN KEY ("categoriumId") REFERENCES categoria(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE public.productocategoria ADD CONSTRAINT "productocategoria_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES producto(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE public.productoorden ADD CONSTRAINT "productoorden_ordenId_fkey" FOREIGN KEY ("ordenId") REFERENCES orden(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE public.productoorden ADD CONSTRAINT "productoorden_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES producto(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE public.usuario ADD CONSTRAINT usuario_role_fkey FOREIGN KEY (role) REFERENCES rol(id) ON UPDATE CASCADE ON DELETE SET NULL;


insert into rol (rol) values ('admin');
insert into rol (rol) values ('cliente');

insert into usuario (nombre, apellido, telefono, correo, nombre_usuario, contrasenia, role) Values('cliente',	'cliente', 	'12345678',	'cliente@cliente.com',	'cliente',	crypt('cliente', gen_salt('bf')), 2);
insert into usuario (nombre, apellido, telefono, correo, nombre_usuario, contrasenia, role) Values ('admin',	'admin', 	'12345678',	'admin@admin.com',	'admin', crypt('administrador', gen_salt('bf')), 1);


insert into categoria (nombre) values ('Galletas'),('Cupcakes'),('Pasteles'),('Salados'),('Ocasiones Especiales'),('Veganos y Gluten Free');

insert into producto (nombre, precio, descripcion, sabor, tamanio, indicaciones, imagen) values
	('Choco-Chips',	1,	'Galletas con chispas de chocolate', null, null, null, null),	
	('Galletas de Avena',	1,	'Galletas de avena con chispas de chocolate', null, null, null, null),	
	('Galletas de Almendras',	1,	'Galletas de almendras con jalea de fresas', null, null, null, null),	
	('Alfajores (Caja de 4)',	3,	'Alfajores de dulce de leche', null, null, null, null),	
	('Macaroon',	1,	'Gluten free', null, null, null, null),	
	('Black and White',	1,	'Galletas cubiertas mitad y mitad con glaseado de chocolate y vainilla', null, null, null, null),
	('Galleta de chocolate blanco',	1,	'Galletas de chocolate blanco', null, null, null, null),
	('Galleta de mantequilla',	1,	'Galletas de mantequilla en formas variadas', null, null, null, null),
	('Pastel de chocolate',	17,	'Pastel de chocolate con relleno de caramelo',	'Chocolate',	12, null, null),
	('Pastel de zanahoria',	19,	'Pastel de zanahoria con cubierta de queso crema',	'Zanahoria', 12, null, null),
	('Cheesecake',	22,	'Cheesecake', null, 12, null, null),
	('Pie de manzana',	19,	'Pie de manzana con caramelo',	'Manzana', 12, null, null),
	('Brownie',	10,	'Brownie de doble chocolate',	'Chocolate', 10, null, null),
	('Mini pastel de chocolate',	7,	'Pastel de chocolate con relleno de caramelo',	'Chocolate', 6, null, null),
	('Mini pastel de zanahoria',	10,	'Pastel de zanahoria con cubierta de queso crema',	'Zanahoria', 6, null, null),
	('Pastel de Nutella',	18,	'Pastel de vainilla con relleno de nutella y cubierto con ganache de chocolate blanco', 'Vainilla', 16, null, null),
	('Galleta de jengibre',	1,	'Galletas de jengibre',	'Jengibre', null, null, null),
	('Galletas de avena y fresa',	1,	'Galletas de avena con trozos de fresas	Avena', null, null, null, null),	
	('Galletas de limón', 	1,	'Galletas de limón craqueladas de chocolate',	'Limón', null, null, null),
	('Cupcake de naranja',	1,	'Cupcake de vainilla con mermelada de naranja',	'Vainilla', null, null, null),	
	('Cupcake red velvet',	1,	'Cupcake red velvet con cubierta de crema', 'Red Velvet', null, null, null),
	('Cupcake de vainilla con flores',	2,	'Cupcake de vainilla decorado con flores comestibles',	'Vainilla', null, null, null),
	('Cupcake de chocolate',	1,	'Cupcake de chocolate con cubierta de crema',	'Chocolate', null, null, null),
	('Cupcake de cajeta',	2,	'Cupcake de chocolate relleno de cajeta	Chocolate', null, null, null, null),	
	('Cupcake de zanahoria',	2,	'Cupcake de zanahoria con cubierta de queso crema',	'Zanahoria', null, null, null),	
	('Cupcake de limón',	2,	'Cupcake de limón, rellenos con crema de limón y cubiertos con crema de mantequilla',	'Limón', null, null, null),
	('Cupcake de vainilla',	1,	'Cupcake de vainilla con cubierta de chocolate',	'Vainilla', null, null, null),
	('Empanada chilena',	1,	'Empanada chilena de queso', null, null, null, null),	
	('Croissant',	1,	'Croissant relleno de jamon y queso', null, null, null, null),
	('Focaccia', 	1,	'Focaccia italiana servida con mezcla de quesos', null, null, null, null),
	('Pastel de cumpleaños', 	18,	'Torta de vainilla relleno de caramelo con mensaje especial de cumpleaños',	'Vainilla',	16, null, null),
	('Pastel con rosas', 18,	'Torta de vainilla relleno de mermelada decorado con rosas', null, null, null, null),
	('Pastel de chocolate Gluten-Free',	19,	'Torta de chocolate vegana y sin gluten', 'Chocolate', 14, null, null),
	('Brownie Gluten-Free'	, 14, 'Brownie vegano y libre de gluten', 'Chocolate', 10, null, null),
	('Pastel de fresas Gluten-free', 15,	'Torta con trozos de fresas gluten-free',	'Fresa', 14, null, null);


insert into productocategoria ("categoriumId" , "productoId" ) values 
(1,	1),
(1,	2),
(1,	3),
(1,	4),
(1,	5),
(6,	5),
(1,	6),
(1,	7),
(1,	8),
(1,	9),
(1,	10),
(1,	11),
(2,	12),
(2,	13),
(2,	14),
(2,	15),
(2,	16),
(2,	17),
(2,	18),
(2,	19),
(3,	20),
(3,	21),
(3,	22),
(3,	23),
(3,	24),
(3,	25),
(3,	26),
(3,	27),
(4,	28),
(4,	29),
(4,	30),
(5,	31),
(5,	32),
(6,	33),
(6,	34),
(6,	35);

insert into ubicacion (nombre, direccion) 
values ('Buena Vista',	'Res. Buena Vista 1, Pasaje 13 casa #19, Santa Tecla'),
('Alpes Suizos',	'Res. Alpes Suizos 1, Senda Lourdes casa #17, Santa Tecla'); 