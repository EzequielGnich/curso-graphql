alter table empresas modify cnpj VARCHAR(14);

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 54235874569851),
    ('Vale', 87598632541525),
    ('Cielo', 78543698547854);

desc empresas

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (7,1,1),
    (7,2,0),
    (8,1,0),
    (8,2,1);