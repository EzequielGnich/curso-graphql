SELECT * FROM `estados`

select nome, sigla from `estados`

select nome, sigla from `estados` where regiao = 'SUL'

select
    nome, regiao, populacao
from `estados` 
where populacao >= 10 
order by
    populacao
    desc