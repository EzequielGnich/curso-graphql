select * from prefeitos;
select * from cidades;

select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;

select * from cidades c right join prefeitos p on c.id = p.cidade_id;

-- Comando "full join" não funciona no MySql
-- select * from cidades c full join prefeitos p on c.id = p.cidade_id;

-- Funciona como um full join
select * from cidades c left join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right join prefeitos p on c.id = p.cidade_id;