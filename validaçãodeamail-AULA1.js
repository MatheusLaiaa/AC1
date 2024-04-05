
nome_completo = input("Digite seu nome completo: ")


nomes = nome_completo.split()

ultimo_nome = nomes[-1]


email = ultimo_nome.lower() + "@facens.br"

print("Seu e-mail é:", email)