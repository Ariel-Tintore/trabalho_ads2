livro = "Senhor dos Anéis"
localizado = ""

if livro == "Harry Potter":
    localizado = "Prateleira A"
elif livro == "Percy Jackson":
    localizado = "Prateleira B"
elif livro == "Senhor dos Anéis":
    localizado = "Prateleira C"
else:
    localizado = "Não Encontrado"

print("O livro", livro, "esta na", localizado)
