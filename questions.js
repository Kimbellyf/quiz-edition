const questionsAll = [
    {
        'question': ' 1\nSua empresa possui departamentos servais. Cada departamento possui diversas máquinas virtuais (VMs).\nA empresa tem uma assinatura do Azure que contém um grupo de recursos denominado RG1.\nTodas as VMs estão localizadas em RG1.\nVocê deseja associar cada VM ao seu respectivo departamento.\nO que você deveria fazer?\n',
        'number': '',
        'page': 0,
        'answers': [{
            'text': 'A. Crie Grupos de Gerenciamento do Azure para cada departamento.\n',
            'correct': false
        }, {
            'text': 'B. Crie um grupo de recursos para cada departamento.\n',
            'correct': false
        }, {
            'text': 'C. Atribua tags às máquinas virtuais.\n',
            'correct': true
        }, {
            'text': 'D. Modifique as configurações das máquinas virtuais.',
            'correct': false
        }
        ],
        'explication': 'C\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags\nDistribuição de votos da comunidade\nC (94%) 6%\nTópico 1'
    }, {
        'question': '2\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa tem uma assinatura do Azure Active Directory (Azure AD).\nVocê deseja implementar uma política de acesso condicional do Azure AD.\nA política deve ser configurada para exigir que os membros do grupo Administradores Globais usem a Autenticação Multifator e uma conta associada ao Azure AD.\ndispositivo quando se conectam ao Azure AD a partir de locais não confiáveis.\nSolução: Você acessa a página de autenticação multifator para alterar as configurações do usuário.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 0,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '3\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa tem uma assinatura do Azure Active Directory (Azure AD).\nVocê deseja implementar uma política de acesso condicional do Azure AD.\nA política deve ser configurada para exigir que os membros do grupo Administradores Globais usem a Autenticação Multifator e uma conta associada ao Azure AD.\ndispositivo quando se conectam ao Azure AD a partir de locais não confiáveis.\nSolução: você acessa o portal do Azure para alterar o controle de sessão da política de acesso condicional do Azure AD.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 1,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (88%) 12%\nTópico 1'
    }, {
        'question': '4\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa tem uma assinatura do Azure Active Directory (Azure AD).\nVocê deseja implementar uma política de acesso condicional do Azure AD.\nA política deve ser configurada para exigir que os membros do grupo Administradores Globais usem a Autenticação Multifator e uma conta associada ao Azure AD.\ndispositivo quando se conectam ao Azure AD a partir de locais não confiáveis.\nSolução: você acessa o portal do Azure para alterar o controle de concessão da política de acesso condicional do Azure AD.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 1,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (93%) 7%'
    }, {
        'question': '5\nVocê está planejando implantar uma máquina virtual Ubuntu Server na assinatura do Azure da sua empresa.\nÉ necessário implementar uma implantação personalizada que inclua a adição de uma autoridade de certificação (CA) raiz confiável específica.\nQual das opções a seguir você deve usar para criar a máquina virtual?\n',
        'number': '',
        'page': 2,
        'answers': [{
            'text': 'A. O cmdlet New-AzureRmVm.\n',
            'correct': false
        }, {
            'text': 'B. O cmdlet New-AzVM.\n',
            'correct': false
        }, {
            'text': 'C. O cmdlet Create-AzVM.\n',
            'correct': false
        }, {
            'text': 'D. O comando az vm create.',
            'correct': true
        }
        ],
        'explication': 'C\nDepois que Cloud-init.txt for criado, você pode implantar a VM com o cmdlet az vm create, usando o parâmetro --custom-data para fornecer o caminho\ncompleto para o arquivo cloud-init.txt.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/linux/tutorial-automate-vm-deployment\nDistribuição de votos da comunidade\nD (99%)\nTópico 1'
    }, {
        'question': '6\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa utiliza autenticação multifator para quando os usuários não estão no escritório. A opção Por Autenticação foi configurada\ncomo modelo de uso.\nApós a aquisição de uma empresa menor e a adição de novos funcionários ao Azure Active Directory (Azure AD) obtém uma empresa diferente e\nadicionando os novos funcionários ao Azure Active Directory (Azure AD), você é informado de que esses funcionários também devem fazer uso do Multi-Factor\nAutenticação.\nPara conseguir isso, a configuração Por usuário habilitado deve ser definida para o modelo de uso.\nSolução: você reconfigura o modelo de uso existente por meio do portal do Azure.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 2,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDado que não é possível alterar o modelo de utilização de um fornecedor existente como está neste momento, terá de criar um novo e reactivar o seu\nservidor existente com credenciais de ativação do novo provedor.\nReferência:\nhttps://365lab.net/2015/04/11/switch-usage-model-in-azure-multi-factor-authentication-server/\nDistribuição de votos da comunidade\nB (94%) 6%'
    }, {
        'question': '7\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nA solução Azure da sua empresa utiliza autenticação multifator para quando os usuários não estão no escritório. A opção Por autenticação tem\nfoi configurado como modelo de uso.\nApós a aquisição de uma empresa menor e a adição de novos funcionários ao Azure Active Directory (Azure AD) obtém uma empresa diferente e\nadicionando os novos funcionários ao Azure Active Directory (Azure AD), você é informado de que esses funcionários também devem fazer uso do Multi-Factor\nAutenticação.\nPara conseguir isso, a configuração Por usuário habilitado deve ser definida para o modelo de uso.\nSolução: você reconfigura o modelo de uso existente por meio da CLI do Azure.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 3,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDado que não é possível alterar o modelo de utilização de um fornecedor existente como está neste momento, terá de criar um novo e reactivar o seu\nservidor existente com credenciais de ativação do novo provedor.\nReferência:\nhttps://365lab.net/2015/04/11/switch-usage-model-in-azure-multi-factor-authentication-server/\nDistribuição de votos da comunidade\nB (90%) 10%\nTópico 1'
    }, {
        'question': '8\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nA solução Azure da sua empresa utiliza autenticação multifator para quando os usuários não estão no escritório. A opção Por autenticação tem\nfoi configurado como modelo de uso.\nApós a aquisição de uma empresa menor e a adição de novos funcionários ao Azure Active Directory (Azure AD) obtém uma empresa diferente e\nadicionando os novos funcionários ao Azure Active Directory (Azure AD), você é informado de que esses funcionários também devem fazer uso do Multi-Factor\nAutenticação.\nPara conseguir isso, a configuração Por usuário habilitado deve ser definida para o modelo de uso.\nSolução: você cria um novo provedor de autenticação multifator com um backup dos dados existentes do provedor de autenticação multifator.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 3,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'A\nDado que não é possível alterar o modelo de utilização de um fornecedor existente como está neste momento, terá de criar um novo e reactivar o seu\nservidor existente com credenciais de ativação do novo provedor.\nReferência:\nhttps://365lab.net/2015/04/11/switch-usage-model-in-azure-multi-factor-authentication-server/\nDistribuição de votos da comunidade\nB (81%) A (19%)'
    }, {
        'question': '9\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa tem um locatário do Azure Active Directory (Azure AD) chamado weyland.com que está configurado para coexistência híbrida com o local.\ninstalações Ativas\nDomínio do diretório.\nVocê tem um servidor chamado DirSync1 configurado como um servidor DirSync.\nVocê cria uma nova conta de usuário no Active Directory local. Agora você precisa replicar imediatamente as informações do usuário para o Azure AD.\nSolução: você executa o cmdlet Start-ADSyncSyncCycle -PolicyType Initial do PowerShell.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 4,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'A\nReferência:\nhttps://blog.kloud.com.au/2016/03/08/azure-ad-connect-manual-sync-cycle-with-powershell-start-adsyncsynccycle/\nDistribuição de votos da comunidade\nB (64%) A (35%)\nTópico 1'
    }, {
        'question': '10\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa tem um locatário do Azure Active Directory (Azure AD) chamado weyland.com que está configurado para coexistência híbrida com o local.\ninstalações Ativas\nDomínio do diretório.\nVocê tem um servidor chamado DirSync1 configurado como um servidor DirSync.\nVocê cria uma nova conta de usuário no Active Directory local. Agora você precisa replicar imediatamente as informações do usuário para o Azure AD.\nSolução: você usa Sites e Serviços do Active Directory para forçar a replicação do Catálogo Global em um controlador de domínio.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 4,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '11\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa tem um locatário do Azure Active Directory (Azure AD) chamado weyland.com que está configurado para coexistência híbrida com o local.\ninstalações Ativas\nDomínio do diretório.\nVocê tem um servidor chamado DirSync1 configurado como um servidor DirSync.\nVocê cria uma nova conta de usuário no Active Directory local. Agora você precisa replicar imediatamente as informações do usuário para o Azure AD.\nSolução: reinicie o serviço NetLogon em um controlador de domínio.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 5,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)\nTópico 1'
    }, {
        'question': '12\nSua empresa possui uma assinatura do Microsoft Azure.\nA empresa possui datacenters em Los Angeles e Nova York.\nVocê está configurando os dois datacenters como sites geo-agrupados para resiliência do site.\nVocê precisa recomendar uma opção de redundância de armazenamento do Azure.\nVocê tem os seguintes requisitos de armazenamento de dados:\n✑ Os dados devem ser armazenados em vários nós.\n✑ Os dados devem ser armazenados em nós em localizações geográficas separadas.\n✑ Os dados podem ser lidos tanto do local secundário como do local primário.\nQual das seguintes opções de redundância armazenada no Azure você deve recomendar?\n',
        'number': '',
        'page': 5,
        'answers': [{
            'text': 'A. Armazenamento com redundância geográfica\n',
            'correct': false
        }, {
            'text': 'B. Armazenamento com redundância geográfica somente leitura\n',
            'correct': true
        }, {
            'text': 'C. Armazenamento com redundância de zona\n',
            'correct': false
        }, {
            'text': 'D. Armazenamento localmente redundante',
            'correct': false
        }
        ],
        'explication': 'B\nO RA-GRS permite que você tenha maior disponibilidade de leitura para sua conta de armazenamento, fornecendo acesso “somente leitura” aos dados replicados para o\nlocalização secundária. Depois de ativar esse recurso, o local secundário poderá ser usado para obter maior disponibilidade caso os dados não sejam\ndisponível na região primária. Isto é um\nRecurso "opt-in" que exige que a conta de armazenamento seja replicada geograficamente.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy\nDistribuição de votos da comunidade\nB (88%) 10%'
    }, {
        'question': '13\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nA sua empresa tem uma subscrição do Azure que inclui uma conta de armazenamento, um grupo de recursos, um contentor de blobs e uma partilha de ficheiros.\nUm colega chamado Jon Ross usa um modelo solitário do Azure Resource Manager (ARM) para implantar uma máquina virtual e um modelo adicional\nConta de armazenamento do Azure.\nVocê deseja revisar o modelo ARM usado por Jon Ross.\nSolução: você acessa a lâmina da Máquina Virtual.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 6,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nVocê deve usar a folha Grupo de Recursos\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-export-template\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '14\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nA sua empresa tem uma subscrição do Azure que inclui uma conta de armazenamento, um grupo de recursos, um contentor de blobs e uma partilha de ficheiros.\nUm colega chamado Jon Ross usa um modelo solitário do Azure Resource Manager (ARM) para implantar uma máquina virtual e um modelo adicional\nConta de armazenamento do Azure.\nVocê deseja revisar o modelo ARM usado por Jon Ross.\nSolução: você acessa a folha Grupo de Recursos.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 7,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nPara visualizar um modelo do histórico de implantação:\n1. Acesse o grupo de recursos do seu novo grupo de recursos. Observe que o portal mostra o resultado da última implantação. Selecione este link.\n2. Você verá um histórico de implantações do grupo. No seu caso, o portal provavelmente lista apenas uma implantação. Selecione esta implantação.\n3. O portal exibe um resumo da implantação. O resumo inclui o status da implantação e suas operações e os valores que\nvocê forneceu os parâmetros. Para ver o modelo que você usou para a implantação, selecione Exibir modelo.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-export-template\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': '15\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nA sua empresa tem uma subscrição do Azure que inclui uma conta de armazenamento, um grupo de recursos, um contentor de blobs e uma partilha de ficheiros.\nUm colega chamado Jon Ross usa um modelo solitário do Azure Resource Manager (ARM) para implantar uma máquina virtual e um modelo adicional\nConta de armazenamento do Azure.\nVocê deseja revisar o modelo ARM usado por Jon Ross.\nSolução: você acessa a folha Container.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 8,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nVocê deve usar a folha Grupo de Recursos\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-export-template\nDistribuição de votos da comunidade\nB (100%)\nTópico 1'
    }, {
        'question': '16\nA sua empresa tem três máquinas virtuais (VMs) incluídas num conjunto de disponibilidade.\nVocê tenta redimensionar uma das VMs, o que retorna uma mensagem de falha de alocação.\nÉ imperativo que a VM seja redimensionada.\nQual das seguintes ações você deve realizar?\n',
        'number': '',
        'page': 8,
        'answers': [{
            'text': 'A. Você só deve parar uma das VMs.\n',
            'correct': false
        }, {
            'text': 'B. Você deve parar duas das VMs.\n',
            'correct': false
        }, {
            'text': 'C. Você deve parar todas as três VMs.\n',
            'correct': true
        }, {
            'text': 'D. Você deve remover a VM necessária do conjunto de disponibilidade.',
            'correct': false
        }
        ],
        'explication': 'C\nSe a VM que você deseja redimensionar fizer parte de um conjunto de disponibilidade, você deverá parar todas as VMs no conjunto de disponibilidade antes de alterar o tamanho de qualquer VM no\no conjunto de disponibilidade.\nA razão pela qual todas as VMs no conjunto de disponibilidade devem ser interrompidas antes de executar a operação de redimensionamento para um tamanho que exija hardware diferente é\nque todas as VMs em execução no conjunto de disponibilidade devem usar o mesmo cluster de hardware físico. Portanto, se uma mudança de cluster de hardware físico\nfor necessário alterar o tamanho da VM, todas as VMs deverão ser primeiro interrompidas e depois reiniciadas uma por uma em clusters de hardware físico diferentes.\nReferência:\nhttps://azure.microsoft.com/es-es/blog/resize-virtual-machines/\nDistribuição de votos da comunidade\nC (95%) 3%'
    }, {
        'question': '17\nVocê tem uma máquina virtual (VM) do Azure que possui um único disco de dados. Você foi encarregado de anexar esse disco de dados a outra VM do Azure.\nVocê precisa ter certeza de que sua estratégia permite que as máquinas virtuais fiquem ociosas pelo menor tempo possível.\nQual das alternativas a seguir é a ação que você deve realizar PRIMEIRO?\n',
        'number': '',
        'page': 9,
        'answers': [{
            'text': 'A. Pare a VM que inclui o disco de dados.\n',
            'correct': false
        }, {
            'text': 'B. Pare a VM à qual o disco de dados deve estar conectado.\n',
            'correct': false
        }, {
            'text': 'C. Retire o disco de dados.\n',
            'correct': true
        }, {
            'text': 'D. Exclua a VM que inclui o disco de dados.',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/detach-disk https://docs.microsoft.com/en-us/azure/lab-services/devtest-\nlaboratório-anexar-desanexar-disco de dados\nDistribuição de votos da comunidade\nC (72%) A (27%)\nTópico 1'
    }, {
        'question': '18\nSua empresa possui uma assinatura do Azure.\nVocê precisa implantar várias máquinas virtuais (VMs) do Azure usando modelos do Azure Resource Manager (ARM). Você foi informado de que\nAs VMs serão incluídas em um único conjunto de disponibilidade.\nVocê deve certificar-se de que o modelo ARM configurado permite que o maior número possível de VMs permaneça acessível em caso de falha na malha.\nfalha ou manutenção.\nQual das opções a seguir é o valor que você deve configurar para a propriedade platformFaultDomainCount?\n',
        'number': '',
        'page': 9,
        'answers': [{
            'text': 'A. 10\n',
            'correct': false
        }, {
            'text': 'B. 30\n',
            'correct': false
        }, {
            'text': 'C. Valor mínimo\n',
            'correct': false
        }, {
            'text': 'D. Valor máximo',
            'correct': true
        }
        ],
        'explication': 'D\nO número de domínios de falha para conjuntos de disponibilidade gerenciados varia de acordo com a região – dois ou três por região.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/manage-availability\nDistribuição de votos da comunidade\nD (100%)'
    }, {
        'question': '19\nSua empresa possui uma assinatura do Azure.\nVocê precisa implantar várias máquinas virtuais (VMs) do Azure usando modelos do Azure Resource Manager (ARM). Você foi informado de que\nAs VMs serão incluídas em um único conjunto de disponibilidade.\nVocê deve certificar-se de que o modelo ARM configurado permite que o maior número possível de VMs permaneça acessível em caso de falha na malha.\nfalha ou manutenção.\nQual das opções a seguir é o valor que você deve configurar para a propriedade platformUpdateDomainCount?\n',
        'number': '',
        'page': 10,
        'answers': [{
            'text': 'A. 10\n',
            'correct': false
        }, {
            'text': 'B. 20\n',
            'correct': true
        }, {
            'text': 'C. 30\n',
            'correct': false
        }, {
            'text': 'D. 40',
            'correct': false
        }
        ],
        'explication': 'B\nCada máquina virtual no seu conjunto de disponibilidade recebe um domínio de atualização e um domínio de falha pela plataforma Azure subjacente. Para um dado\nconjunto de disponibilidade, cinco domínios de atualização não configuráveis \u200b\u200bpelo usuário são atribuídos por padrão (as implantações do Resource Manager podem então ser aumentadas para\nfornecem até 20 domínios de atualização) para indicar grupos de máquinas virtuais e hardware físico subjacente que podem ser reinicializados ao mesmo tempo\ntempo.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/availability-set-overview\nDistribuição de votos da comunidade\nB (100%)'
    },
    {
        'question': `20. ARRASTAR E SOLTAR -\n (OBS: NO MOMENTO NÃO ESTÁ CONTANDO NA CONTAGEM DE ACERTO, SE QUISER SABER SE RESPONDEU CORRETO CLIQUE EM VER RESPOSTA)
            Você baixou um modelo do Azure Resource Manager (ARM) para implantar várias máquinas virtuais (VMs). O modelo ARM é baseado em uma VM atual, mas deve ser adaptado para fazer referência a uma senha administrativa.
            Você precisa ter certeza de que a senha não pode ser armazenada em texto simples.
            Você está se preparando para criar os componentes necessários para atingir seu objetivo.
            Qual dos seguintes você deve criar para atingir seu objetivo? Responda arrastando a opção correta da lista para a área de resposta.
            Selecione e coloque:`,
        'number': '',
        'page': 0,
        'answers': [
            [
                {
                    'text': 'Options \n',
                    'options': [
                        { 'text': 'Um cofre de chaves do Azure', 'correct': true, 'index': 'any' },
                        { 'text': 'Uma conta de armazenamento do Azure', 'correct': false, 'index': 'any' },
                        { 'text': 'Proteção de identidade do Azure Active Directory (AD)', 'correct': false, 'index': 'any' },
                        { 'text': 'Uma política de acesso', 'correct': true, 'index': 'any' },
                        { 'text': 'Uma política do Azure', 'correct': false, 'index': 'any' },
                        { 'text': 'Uma política de backup', 'correct': false, 'index': 'any' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer \n',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': 'Você pode usar um modelo que permite que você implante uma VM Windows simples recuperando a senha que está armazenada em um Key Vault. Portanto, a senha nunca é colocada em texto simples no arquivo de parâmetros do modelo.',
        'typeQuestion': 'dragdrop'
    },

    {
        'question': '21\nSua empresa tem um locatário do Azure Active Directory (Azure AD) configurado para coexistência híbrida com o domínio do Active Directory\nlocal.\nO ambiente virtual local consiste em máquinas virtuais (VMs) em execução em servidores host do Windows Server 2012 R2 Hyper-V.\nVocê criou alguns scripts do PowerShell para automatizar a configuração de VMs recém-criadas. Você planeja criar várias VMs novas.\nVocê precisa de uma solução que garanta que os scripts sejam executados nas novas VMs.\nQual das seguintes é a melhor solução?\n',
        'number': '',
        'page': 13,
        'answers': [{
            'text': 'A. Configure um arquivo de lote SetupComplete.cmd no diretório %windir%\\setup\\scripts.\n',
            'correct': true
        }, {
            'text': 'B. Configure um Objeto de Política de Grupo (GPO) para executar os scripts como scripts de logon.\n',
            'correct': false
        }, {
            'text': 'C. Configure um Objeto de Política de Grupo (GPO) para executar os scripts como scripts de inicialização.\n',
            'correct': false
        }, {
            'text': 'D. Coloque os scripts em um novo disco rígido virtual (VHD).',
            'correct': false
        }
        ],
        'explication': 'A\nDepois de implantar uma máquina virtual, normalmente você precisa fazer algumas alterações antes que ela esteja pronta para uso. Isso é algo que você pode fazer manualmente ou\nvocê poderia usar\nPowerShell remoto para automatizar a configuração da sua VM após a implantação, por exemplo.\nMas agora há uma terceira alternativa disponível que permite personalizar sua VM: a extensão CustomScript.\nEsta extensão CustomScript é executada pelo VM Agent e é muito simples: você especifica quais arquivos ele precisa baixar do seu\nconta de armazenamento e qual arquivo ele precisa executar. Você pode até especificar argumentos que precisam ser passados \u200b\u200bao script. O único requisito\né que você executa um arquivo .ps1.\nReferência:\nhttps://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/add-a-custom-script-to-windows-setup\nhttps://azure.microsoft.com/en-us/blog/automating-vm-customization-tasks-using-custom-script-extension/\nDistribuição de votos da comunidade\nA (60%) C (40%)\nTópico 1'
    }, {
        'question': '22\nSua empresa tem um locatário do Azure Active Directory (Azure AD) configurado para coexistência híbrida com o Active Directory local\ndomínio.\nVocê planeja implantar várias novas máquinas virtuais (VMs) no Azure. As VMs terão o mesmo sistema operacional e software personalizado\nrequisitos.\nVocê configura uma VM de referência no ambiente virtual local. Em seguida, você generaliza a VM para criar uma imagem.\nVocê precisa carregar a imagem no Azure para garantir que ela esteja disponível para seleção ao criar as novas VMs do Azure.\nQuais cmdlets do PowerShell você deve usar?\n',
        'number': '',
        'page': 13,
        'answers': [{
            'text': 'A. Adicionar-AzVM\n',
            'correct': false
        }, {
            'text': 'B. Adicionar-AzVhd\n',
            'correct': true
        }, {
            'text': 'C. Adicionar-AzImage\n',
            'correct': false
        }, {
            'text': 'D. Adicionar-AzImageDataDisk',
            'correct': false
        }
        ],
        'explication': 'B\nO cmdlet Add-AzVhd carrega discos rígidos virtuais locais, em formato de arquivo .vhd, para uma conta de armazenamento de blob como discos rígidos virtuais fixos.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/upload-generalized-owned\nDistribuição de votos da comunidade\nB (91%) 9%'
    },

    {
        'question': `ARRASTAR E SOLTAR -\n (OBS: NO MOMENTO NÃO ESTÁ CONTANDO NA CONTAGEM DE ACERTO, SE QUISER SABER SE RESPONDEU CORRETO CLIQUE EM VER RESPOSTA)
                \nSua empresa tem uma assinatura do Azure que inclui várias máquinas virtuais (VMs) do Azure, que são todas parte da mesma rede virtual.
                \nSua empresa também tem um servidor Hyper-V local que hospeda uma VM, chamada VM1, que deve ser replicada para o Azure.
                \nQual dos seguintes objetos deve ser criado para atingir esse objetivo? Responda arrastando a opção correta da lista para a área de resposta.
                \nSelecione e coloque:`,
        'number': '',
        'page': 0,
        'answers': [
            [
                {
                    'text': 'Options \n',
                    'options': [
                        { 'text': 'Site Hyper-V', 'correct': true, 'index': 'any' },
                        { 'text': 'Conta de armazenamento', 'correct': false, 'index': 'any' },
                        { 'text': 'Cofre dos Serviços de Recuperação do Azure', 'correct': true, 'index': 'any' },
                        { 'text': 'Instância do Gerenciador de Tráfego do Azure', 'correct': false, 'index': 'any' },
                        { 'text': 'Política de replicação', 'correct': true, 'index': 'any' },
                        { 'text': 'Ponto final', 'correct': false, 'index': 'any' },

                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer \n',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': '',
        'typeQuestion': 'dragdrop'
    },

    {
        'question': '24\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nA assinatura do Azure da sua empresa inclui duas redes do Azure chamadas VirtualNetworkA e VirtualNetworkB.\nVirtualNetworkA inclui um gateway VPN configurado para usar roteamento estático. Além disso, existe uma conexão VPN site a site entre o seu\nrede local da empresa e VirtualNetworkA.\nVocê configurou uma conexão VPN ponto a site com VirtualNetworkA a partir de uma estação de trabalho executando o Windows 10. Depois de configurar a rede virtual\nespiando entre\nVirtualNetworkA e VirtualNetworkB, você confirma que é capaz de acessar VirtualNetworkB a partir da rede local da empresa.\nNo entanto, você descobrirá que não consegue estabelecer uma conexão com VirtualNetworkB a partir da estação de trabalho Windows 10.\nVocê deve certificar-se de que uma conexão com VirtualNetworkB possa ser estabelecida a partir da estação de trabalho Windows 10.\nSolução: você escolhe a configuração Permitir trânsito de gateway em VirtualNetworkA.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 15,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-point-to-site-routing\nDistribuição de votos da comunidade\nB (100%)\nTópico 1'
    }, {
        'question': '25\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nA assinatura do Azure da sua empresa inclui duas redes do Azure chamadas VirtualNetworkA e VirtualNetworkB.\nVirtualNetworkA inclui um gateway VPN configurado para usar roteamento estático. Além disso, existe uma conexão VPN site a site entre o seu\nrede local da empresa e VirtualNetworkA.\nVocê configurou uma conexão VPN ponto a site com VirtualNetworkA a partir de uma estação de trabalho executando o Windows 10. Depois de configurar a rede virtual\nespiando entre\nVirtualNetworkA e VirtualNetworkB, você confirma que é capaz de acessar VirtualNetworkB a partir da rede local da empresa.\nNo entanto, você descobrirá que não consegue estabelecer uma conexão com VirtualNetworkB a partir da estação de trabalho Windows 10.\nVocê deve certificar-se de que uma conexão com VirtualNetworkB possa ser estabelecida a partir da estação de trabalho Windows 10.\nSolução: você escolhe a configuração Permitir trânsito de gateway em VirtualNetworkB.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 15,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-point-to-site-routing\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '26\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nA assinatura do Azure da sua empresa inclui duas redes do Azure chamadas VirtualNetworkA e VirtualNetworkB.\nVirtualNetworkA inclui um gateway VPN configurado para usar roteamento estático. Além disso, existe uma conexão VPN site a site entre o seu\nrede local da empresa e VirtualNetworkA.\nVocê configurou uma conexão VPN ponto a site com VirtualNetworkA a partir de uma estação de trabalho executando o Windows 10. Depois de configurar a rede virtual\nespiando entre\nVirtualNetworkA e VirtualNetworkB, você confirma que é capaz de acessar VirtualNetworkB a partir da rede local da empresa.\nNo entanto, você descobrirá que não consegue estabelecer uma conexão com VirtualNetworkB a partir da estação de trabalho Windows 10.\nVocê deve certificar-se de que uma conexão com VirtualNetworkB possa ser estabelecida a partir da estação de trabalho Windows 10.\nSolução: baixe e reinstale o pacote de configuração do cliente VPN na estação de trabalho Windows 10.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 16,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-point-to-site-routing\nDistribuição de votos da comunidade\nUm (97%)\nTópico 1'
    }, {
        'question': '27\nSua empresa possui máquinas virtuais (VMs) hospedadas no Microsoft Azure. As VMs estão localizadas em uma única rede virtual do Azure chamada VNet1.\nA empresa possui usuários que trabalham remotamente. Os trabalhadores remotos necessitam de acesso aos VMs na VNet1.\nVocê precisa fornecer acesso para os trabalhadores remotos.\nO que você deveria fazer?\n',
        'number': '',
        'page': 16,
        'answers': [{
            'text': 'A. Configure uma VPN Site-to-Site (S2S).\n',
            'correct': false
        }, {
            'text': 'B. Configurar uma VPN VNet-toVNet.\n',
            'correct': false
        }, {
            'text': 'C. Configure uma VPN ponto a site (P2S).\n',
            'correct': true
        }, {
            'text': 'D. Configure o DirectAccess em uma VM do servidor Windows Server 2012.\n',
            'correct': false
        }, {
            'text': 'E. Configurar uma VPN multi-site',
            'correct': false
        }
        ],
        'explication': 'C\nUma conexão de gateway VPN ponto a site (P2S) permite que você crie uma conexão segura com sua rede virtual a partir de um computador cliente individual.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways\nDistribuição de votos da comunidade\nC (93%) 7%'
    }, {
        'question': '28\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa tem um grupo de disponibilidade Always On do Microsoft SQL Server configurado em suas máquinas virtuais (VMs) do Azure.\nVocê precisa configurar um balanceador de carga interno do Azure como ouvinte do grupo de disponibilidade.\nSolução: você cria uma investigação de integridade HTTP na porta 1433.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 17,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)\nTópico 1'
    }, {
        'question': '29\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa tem um grupo de disponibilidade Always On do Microsoft SQL Server configurado em suas máquinas virtuais (VMs) do Azure.\nVocê precisa configurar um balanceador de carga interno do Azure como ouvinte do grupo de disponibilidade.\nSolução: você define a persistência da sessão como IP do cliente.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 17,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/sql/virtual-machines-windows-portal-sql-alwayson-int-listener\nDistribuição de votos da comunidade\nB (71%) A (29%)\nTópico 1'
    }, {
        'question': '30\nNota: A pergunta está incluída em uma série de perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto.\nEstabeleça se a solução satisfaz os requisitos.\nSua empresa tem um grupo de disponibilidade Always On do Microsoft SQL Server configurado em suas máquinas virtuais (VMs) do Azure.\nVocê precisa configurar um balanceador de carga interno do Azure como ouvinte do grupo de disponibilidade.\nSolução: você habilita o IP flutuante.\nA solução atende ao objetivo?\n',
        'number': '',
        'page': 17,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nA (79%) B (18%)4%'
    }, {
        'question': '31\nSua empresa possui dois servidores locais chamados SRV01 e SRV02. Os desenvolvedores criaram um aplicativo que roda em SRV01. O\no aplicativo chama um serviço no SRV02 por endereço IP.\nVocê planeja migrar o aplicativo em VMs (máquinas virtuais) do Azure. Você configurou duas VMs em uma única sub-rede em uma rede virtual do Azure.\nVocê precisa configurar as duas VMs com endereços IP internos estáticos.\nO que você deveria fazer?\n',
        'number': '',
        'page': 18,
        'answers': [{
            'text': 'A. Execute o cmdlet New-AzureRMVMCon g do PowerShell.\n',
            'correct': false
        }, {
            'text': 'B. Execute o cmdlet Set-AzureSubnet do PowerShell.\n',
            'correct': false
        }, {
            'text': 'C. Modifique as propriedades da VM no Portal de Gerenciamento do Azure.\n',
            'correct': false
        }, {
            'text': 'D. Modifique as propriedades de IP no Centro de Rede e Compartilhamento do Windows.\n',
            'correct': false
        }, {
            'text': 'E. Execute o cmdlet Set-AzureStaticVNetIP do PowerShell.',
            'correct': true
        }
        ],
        'explication': 'E\nEspecifique um IP interno estático para uma VM criada anteriormente\nSe quiser definir um endereço IP estático para uma VM criada anteriormente, você poderá fazer isso usando os cmdlets a seguir. Se você já definiu um IP\nendereço para o\nVM e quiser alterá-lo para um endereço IP diferente, você precisará remover o endereço IP estático existente antes de executar esses cmdlets. Ver\nsiga as instruções abaixo para remover um IP estático.\nPara este procedimento, você usará o cmdlet Update-AzureVM. O cmdlet Update-AzureVM reinicia a VM como parte do processo de atualização. O mergulho\nque você especificar será atribuído após a reinicialização da VM. Neste exemplo, definimos o endereço IP para VM2, que está localizado no serviço de nuvem\nDemonstração estática.\nGet-AzureVM -ServiceName StaticDemo -Name VM2 | Set-AzureStaticVNetIP -IPAddress 192.168.4.7 | Atualização-AzureVM\nDistribuição de votos da comunidade\nE (69%) C (31%)\nTópico 1'
    }, {
        'question': '32\nSua empresa tem uma assinatura do Azure Active Directory (Azure AD).\nVocê precisa implantar cinco máquinas virtuais (VMs) na sub-rede da rede virtual da sua empresa.\nCada uma das VMs terá um endereço IP público e privado. As regras de segurança de entrada e saída para todas essas máquinas virtuais devem ser\nidêntico.\nQual das opções a seguir representa a menor quantidade de interfaces de rede necessárias para esta configuração?\n',
        'number': '',
        'page': 18,
        'answers': [{
            'text': 'A. 5\n',
            'correct': true
        }, {
            'text': 'B. 10\n',
            'correct': false
        }, {
            'text': 'C. 20\n',
            'correct': false
        }, {
            'text': 'D. 40',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nA (95%) 5%'
    }, {
        'question': '33\nSua empresa tem uma assinatura do Azure Active Directory (Azure AD).\nVocê precisa implantar cinco máquinas virtuais (VMs) na sub-rede da rede virtual da sua empresa.\nCada uma das VMs terá um endereço IP público e privado. As regras de segurança de entrada e saída para todas essas máquinas virtuais devem ser\nidêntico.\nQual das alternativas a seguir representa a menor quantidade de grupos de segurança necessários para esta configuração?\n',
        'number': '',
        'page': 19,
        'answers': [{
            'text': 'A. 4\n',
            'correct': false
        }, {
            'text': 'B. 3\n',
            'correct': false
        }, {
            'text': 'C. 2\n',
            'correct': false
        }, {
            'text': 'D. 1',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)\nTópico 1'
    }, {
        'question': '34\nA assinatura do Azure da sua empresa inclui máquinas virtuais (VMs) do Azure que executam o Windows Server 2016.\nÉ feito backup de uma das VMs todos os dias usando o Azure Backup Instant Restore.\nQuando a VM é infectada com ransomware de criptografia de dados, você decide recuperar os arquivos da VM.\nQual das alternativas a seguir é VERDADEIRA neste cenário?\n',
        'number': '',
        'page': 19,
        'answers': [{
            'text': 'A. Você só pode recuperar os arquivos para a VM infectada.\n',
            'correct': false
        }, {
            'text': 'B. Você pode recuperar os arquivos para qualquer VM dentro da assinatura da empresa.\n',
            'correct': true
        }, {
            'text': 'C. Você só pode recuperar os arquivos para uma nova VM.\n',
            'correct': false
        }, {
            'text': 'D. Você não poderá recuperar os arquivos.',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nB (63%) A (25%) 12%\nTópico 1'
    }, {
        'question': '35\nA assinatura do Azure da sua empresa inclui máquinas virtuais (VMs) do Azure que executam o Windows Server 2016.\nÉ feito backup de uma das VMs todos os dias usando o Azure Backup Instant Restore.\nQuando a VM é infectada com ransomware de criptografia de dados, é necessário restaurá-la.\nQual das seguintes ações você deve realizar?\n',
        'number': '',
        'page': 19,
        'answers': [{
            'text': 'A. Você deve restaurar a VM após excluir a VM infectada.\n',
            'correct': false
        }, {
            'text': 'B. Você deve restaurar a VM para qualquer VM dentro da assinatura da empresa.\n',
            'correct': false
        }, {
            'text': 'C. Você deve restaurar a VM para uma nova VM do Azure.\n',
            'correct': true
        }, {
            'text': 'D. Você deve restaurar a VM em um dispositivo Windows local.',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nC (87%) 11%'
    }, {
        'question': '36\nVocê administra uma solução no Azure que atualmente apresenta problemas de desempenho.\nVocê precisa encontrar a causa dos problemas de desempenho relativos às métricas na infraestrutura do Azure.\nQual das alternativas a seguir é a ferramenta que você deve usar?\n',
        'number': '',
        'page': 20,
        'answers': [{
            'text': 'A. Azure Traffic Analytics\n',
            'correct': false
        }, {
            'text': 'B. Monitor Azure\n',
            'correct': true
        }, {
            'text': 'C. Log de atividades do Azure\n',
            'correct': false
        }, {
            'text': 'D. Assistente(Advisor) do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nAs métricas no Azure Monitor são armazenadas numa base de dados de série temporal que é otimizada para analisar dados com carimbo de data/hora. Isso torna as métricas\nparticularmente adequado para alertas e detecção rápida de problemas.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/platform/data-platform\nDistribuição de votos da comunidade\nB (100%)\nTópico 1'
    }, {
        'question': '37\nA sua empresa tem uma subscrição do Azure que inclui um cofre dos Serviços de Recuperação.\nPretende utilizar o Backup do Azure para agendar uma cópia de segurança das máquinas virtuais (VMs) da sua empresa para o cofre dos Serviços de Recuperação.\nDe quais das seguintes VMs você pode fazer backup? Escolha todas as opções aplicáveis.\n',
        'number': '',
        'page': 20,
        'answers': [{
            'text': 'A. VMs que executam o Windows 10.\n',
            'correct': true
        }, {
            'text': 'B. VMs que executam o Windows Server 2012 ou superior.\n',
            'correct': true
        }, {
            'text': 'C. VMs que NÃO foram desligadas.\n',
            'correct': true
        }, {
            'text': 'D. VMs que executam Debian 8.2+.\n',
            'correct': true
        }, {
            'text': 'E. VMs que foram desligadas.',
            'correct': true
        }
        ],
        'explication': 'ABCDE\nO Backup do Azure dá suporte ao backup do sistema operacional de servidor Windows de 64 bits do Windows Server 2008.\nO Backup do Azure dá suporte ao backup do sistema operacional Windows 10 de 64 bits.\nO Backup do Azure dá suporte ao backup do sistema operacional Debian de 64 bits do Debian 7.9+.\nO Backup do Azure dá suporte ao backup de VMs desligadas ou inativas.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/backup/backup-support-matrix-iaas https://docs.microsoft.com/en-us/azure/virtual-\nmáquinas/linux/distros endossadas\nDistribuição de votos da comunidade\nABCDE (90%) 7%'
    }, {
        'question': `38\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.
            \nVocê tem um locatário do Azure Active Directory (Azure AD) chamado contoso.com.\nVocê tem um arquivo CSV que contém os nomes e endereços de e-mail de 500 usuários externos.\nVocê precisa criar uma conta de usuário convidado em contoso.com para cada um dos 500 usuários externos.\nSolução: você cria um script do PowerShell que executa o cmdlet New-AzureADUser para cada usuário.
            \nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 21,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nO cmdlet New-AzureADUser cria um usuário no Azure Active Directory (Azure AD).\nEm vez disso, use o cmdlet New-AzureADMSInvitation que é usado para convidar um novo usuário externo para seu diretório.\nReferência:\nhttps://docs.microsoft.com/en-us/powershell/module/azuread/new-azureadmsinvitation\nDistribuição de votos da comunidade\nB (91%) 9%\nTópico 1'
    }, {
        'question': '39\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Active Directory (Azure AD) chamado contoso.com.\nVocê tem um arquivo CSV que contém os nomes e endereços de e-mail de 500 usuários externos.\nVocê precisa criar uma conta de usuário convidado em contoso.com para cada um dos 500 usuários externos.\nSolução: No Azure AD no portal do Azure, você usa a operação de criação de usuário em massa.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 21,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nEm vez disso, use o cmdlet New-AzureADMSInvitation que é usado para convidar um novo usuário externo para seu diretório.\nReferência:\nhttps://docs.microsoft.com/en-us/powershell/module/azuread/new-azureadmsinvitation\nDistribuição de votos da comunidade\nB (92%) 8%'
    }, {
        'question': '40\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Active Directory (Azure AD) chamado contoso.com.\nVocê tem um arquivo CSV que contém os nomes e endereços de e-mail de 500 usuários externos.\nVocê precisa criar uma conta de usuário convidado em contoso.com para cada um dos 500 usuários externos.\nSolução: você cria um script do PowerShell que executa o cmdlet New-AzureADMSInvitation para cada usuário externo.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 22,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nUse o cmdlet New-AzureADMSInvitation que é usado para convidar um novo usuário externo para seu diretório.\nReferência:\nhttps://docs.microsoft.com/en-us/powershell/module/azuread/new-azureadmsinvitation\nDistribuição de votos da comunidade\nA (89%) 11%'
    }, {
        question: `1. Você tem uma assinatura do Azure chamada Subscription1 que contém um grupo de recursos chamado RG1.
            No RG1, você cria um balanceador de carga interno denominado LB1 e um balanceador de carga público denominado LB2.
            Você precisa garantir que um administrador chamado Admin1 possa gerenciar LB1 e LB2.A solução deve seguir o princípio do menor privilégio.
            Qual função você deve atribuir ao Admin1 para cada tarefa? Para responder, selecione as opções apropriadas na área de resposta.
            NOTA: Cada seleção correta vale um ponto.
            Área Quente:
            `,
        number: 1,
        page: 3,
        answers: [
            {
                text: 'Para adicionar um pool de back-end ao LB1',
                options: [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        text: "Colaborador da Rede",
                        correct: false
                    }, {
                        text: "LB1 Colaborador da Rede",
                        correct: false
                    }, {
                        text: "LB1 Colaborador da Rede RG1",
                        correct: true
                    }, {
                        text: "Proprietário em LB1",
                        correct: false
                    }]
            }, {
                text: 'Para adicionar uma investigação de integridade ao LB2',
                options: [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        text: "Colaborador no LB2",
                        correct: false
                    }, {
                        text: "LB1 Colaborador da Rede no LB2",
                        correct: false
                    }, {
                        text: "LB1 Colaborador da Rede RG1",
                        correct: true
                    }, {
                        text: "Proprietário em LB2",
                        correct: false
                    }]
            }
        ],
        typeQuestion: 'select',
        explication: 'Comentário com resposta mais votada Caixa 1. Colaborador da Rede no RG1 Caixa 2. Colaborador da Rede no RG1'
    }, {
        'question': '2\nVocê tem uma assinatura do Azure que contém um locatário do Azure Active Directory (Azure AD) chamado contoso.com e um serviço Azure Kubernetes\n(AKS) denominado AKS1.\nUma administradora relata que não consegue conceder acesso ao AKS1 aos usuários em contoso.com.\nVocê precisa garantir que o acesso ao AKS1 possa ser concedido aos usuários contoso.com.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 24,
        'answers': [{
            'text': 'A. Em contoso.com, modifique as configurações de relacionamentos da organização.\n',
            'correct': false
        }, {
            'text': 'B. Em contoso.com, crie um ponto de extremidade de autorização OAuth 2.0.\n',
            'correct': true
        }, {
            'text': 'C. Recrie o AKS1.\n',
            'correct': false
        }, {
            'text': 'D. No AKS1, crie um namespace.',
            'correct': false
        }
        ],
        'explication': 'B\nReferência:\nhttps://kubernetes.io/docs/reference/access-authn-authz/authentication/\nDistribuição de votos da comunidade\nB (93%) 6%\nTópico 2'
    }, {
        'question': '3\nVocê tem um locatário do Microsoft 365 e um locatário do Azure Active Directory (Azure AD) chamado contoso.com.\nVocê planeja conceder a três usuários chamados Usuário1, Usuário2 e Usuário3 acesso a uma biblioteca de documentos temporária do Microsoft SharePoint chamada Biblioteca1.\nVocê precisa criar grupos para os usuários. A solução deve garantir que os grupos sejam excluídos automaticamente após 180 dias.\nQuais são os dois grupos que você deve criar? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 24,
        'answers': [{
            'text': 'A. um grupo do Microsoft 365 que usa o tipo de associação Atribuída\n',
            'correct': true
        }, {
            'text': 'B. um grupo de segurança que usa o tipo de associação atribuída\n',
            'correct': false
        }, {
            'text': 'C. um grupo do Microsoft 365 que usa o tipo de associação Usuário Dinâmico\n',
            'correct': true
        }, {
            'text': 'D. um grupo de segurança que usa o tipo de associação de usuário dinâmico\n',
            'correct': false
        }, {
            'text': 'E. um grupo de segurança que usa o tipo de associação Dispositivo Dinâmico',
            'correct': false
        }
        ],
        'explication': 'AC\nVocê pode definir a política de expiração somente para grupos do Office 365 no Azure Active Directory (Azure AD).\nObservação: Com o aumento no uso dos Grupos do Office 365, os administradores e usuários precisam de uma maneira de limpar grupos não utilizados. As políticas de expiração podem\najude a remover grupos inativos do sistema e torne as coisas mais limpas.\nQuando um grupo expira, todos os seus serviços associados (caixa de correio, Planner, site do SharePoint, etc.) também são excluídos.\nVocê pode configurar uma regra para associação dinâmica em grupos de segurança ou grupos do Office 365.\nRespostas incorretas:\nB, D, E: você pode definir a política de expiração somente para grupos do Office 365 no Azure Active Directory (Azure AD).\nReferência:\nhttps://docs.microsoft.com/en-us/o ce365/admin/create-groups/o ce-365-groups-expiration-policy?view=o365-worldwide\nDistribuição de votos da comunidade\nCA (92%) 6%'
        , 'filters': ['K002']
    },

    {
        'question': `Questao 4. Tópico 2.

        Hotspot -
        Tem um locatário do Azure Active Directory (Azure AD) chamado contoso.com que contém os utilizadores mostrados na tabela a seguir:

        <img src="imagesquestions/X224.png" alt="imagem da questão"></img>

        User3 é o dono do Group1.
        O Group2 é membro do Group1.
        Você configura uma revisão de acesso chamada Review1 como mostrado na seguinte exposição:

        <img src="imagesquestions/X225.jpg" alt="imagem da questão"></img>

        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada selecção correcta vale um ponto.
        Área quente:`,
        'number': '',
        'page': 0,
        'answers': [{
            'text': 'User3 pode realizar uma revisão de acesso do User1',
            'correct': false
        }, , {
            'text': 'User3 pode realizar uma revisão de acesso do UserA',
            'correct': false
        }, , {
            'text': 'User3 pode realizar uma revisão de acesso do UserB',
            'correct': false
        },
        ],
        'explication': ` Testado em laboratório
            Respostas corretas:

            User3 pode realizar uma revisão de acesso de User1 = Não
            User1 é um Membro e não uma Conta de Hóspede, apenas os hóspedes específicos da Access Review.

            User3 pode realizar uma revisão de acesso de UserA = Não
            User1 é um Membro e não uma Conta de Hóspede, apenas os hóspedes específicos da Access Review.

            User3 pode realizar uma revisão de acesso de UserB = Não
            Criado Grupo 1 e Grupo 2, acrescentou o Grupo 2 como membro no Grupo 1,
            Adicionada Contas de hóspedes ao Grupo 1 e ao Grupo 2,
            Nos resultados da Revisão de Acesso apenas as Contas de Hóspedes no Grupo 1 apareceram para revisão e "Não" as contas de Hóspedes no Grupo 2.`,
        'typeQuestion': "multiplecheckboxyesorno"
        ,
        'filters':[
            'K001'
        ]
    }

    ,

    {
        'question': `Questao 5. Tópico 2.

        Você tem os grupos de gerenciamento do Azure mostrados na tabela a seguir:
        <img src="imagesquestions/X240.png" alt="imagem da questão"></img>

        Você adiciona assinaturas do Azure aos grupos de gerenciamento conforme mostrado na tabela a seguir:
        <img src="imagesquestions/X241.png" alt="imagem da questão"></img>

        Você cria as políticas do Azure mostradas na tabela a seguir:
        
        <img src="imagesquestions/X242.png" alt="imagem da questão"></img>

        Para cada uma das instruções a seguir, selecione Sim se a afirmação é verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto.
        Área Quente:
        `,
        'number': '5',
        'page': 2,
        'answers': [{
            'text': 'Você pode criar uma rede virtual na Assinatura 1.',
            'correct': false
        }, , {
            'text': 'Você pode criar uma máquina virtual em Subscription2.',
            'correct': false
        }, , {
            'text': 'Você pode adicionar Subscription1 ao ManagementGroup11.',
            'correct': false
        },
        ],
        'explication': ` Muita discussão sobre essa questão, parece não ter um consenso explicito sobre a resposta 2 se é falso ou verdadeiro`,
        'typeQuestion': "multiplecheckboxyesorno"
    },



    {
        'question': `6\nVocê tem uma política do Azure conforme mostrado na seguinte exposição: 
                <img src="imagesquestions/X254.png" alt="imagem da questão"></img>
            \nQual é o efeito da política?\n`,
        'number': '',
        'page': 28,
        'answers': [{
            'text': 'A. Você está impedido de criar servidores SQL do Azure em qualquer lugar da Assinatura 1.\n',
            'correct': false
        }, {
            'text': 'B. Você pode criar servidores SQL do Azure somente no ContosoRG1.\n',
            'correct': true
        }, {
            'text': 'C. Você está impedido de criar Servidores SQL do Azure somente no ContosoRG1.\n',
            'correct': false
        }, {
            'text': 'D. Você pode criar servidores SQL do Azure em qualquer grupo de recursos na Assinatura 1.',
            'correct': false
        }
        ],
        'explication': 'B\nVocê está impedido de criar servidores SQL do Azure em qualquer lugar da Assinatura 1, com exceção do ContosoRG1\nDistribuição de votos da comunidade\nB (100%)'
    },

    {
        question: `7. Tópico 2. img. HOTSPOT -
            Você tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir:
            <img src="imagesquestions/X262.png" alt="imagem da questão"></img>

            Você atribui uma política ao RG6 conforme mostrado na tabela a seguir:
            <img src="imagesquestions/X263.png" alt="imagem da questão"></img>

            Ao RG6, você aplica a tag: RGroup: RG6.
            Você implanta uma rede virtual chamada VNET2 em RG6.
            Quais tags se aplicam a VNET1 e VNET2? Para responder, selecione as opções apropriadas na área de resposta.
            NOTA: Cada seleção correta vale um ponto.
            Área Quente:
            `,
        number: 7,
        page: 2,


        answers: [
            {
                text: 'VNET1:',
                options:
                    [
                        {
                            text: 'Selecione',
                            correct: false
                        },
                        {
                            text: 'Nenhum',
                            correct: false
                        },
                        {
                            text: 'Departamento: somente D1',
                            correct: true
                        },
                        {
                            text: 'Departamento: D1 e RGgrupo: somente RG6',
                            correct: false
                        },
                        {
                            text: 'Departamento: D1 e Etiqueta: Somente Valor1',
                            correct: false
                        },
                        {
                            text: 'Departamento: D1, RGgrupo: RG6 e Etiqueta: Valor1',
                            correct: false
                        },
                    ]
            },
            {
                text: 'VNET2:',
                'options': [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        text: 'Nenhum',
                        correct: false
                    }, {
                        text: 'Grupo RG: apenas RG6',
                        correct: false
                    }, {
                        'text': 'Rótulo: Somente valor1',
                        'correct': true
                    },
                    {
                        'text': 'RGgrupo: RG6 e Etiqueta: Valor1',
                        'correct': false
                    },
                ]
            }

        ],
        'typeQuestion': 'select',
        'explication': 'Comentário mais votado: A resposta correta é: VNET1 terá apenas a tag Department: D1 e a VNET 2 terá apenas a tag Label: Value1'
    },


    {
        'question': `8\nTópico 2 .
            Você tem uma assinatura do Azure chamada AZPT1 que contém os recursos mostrados na tabela a seguir:
            <img src="imagesquestions/X275.png" alt="imagem da questão"></img>
            \nVocê cria uma nova assinatura do Azure chamada AZPT2.\nVocê precisa identificar quais recursos podem ser movidos para o AZPT2.
            \nQuais recursos você deve identificar?\n`,
        'number': '',
        'page': 30,
        'answers': [{
            'text': 'A. Somente VM1, storage1, VNET1 e VM1 gerenciado\n',
            'correct': false
        }, {
            'text': 'B. Somente VM1 e VM1 gerenciada\n',
            'correct': false
        }, {
            'text': 'C. VM1, armazenamento1, VNET1, VM1Managed e RVAULT1\n',
            'correct': true
        }, {
            'text': 'D. Somente RVAULT1',
            'correct': false
        }
        ],
        'explication': 'C\nVocê pode mover uma VM e seus recursos associados para uma assinatura diferente usando o portal do Azure.\nAgora você pode mover um cofre do Azure Recovery Service (ASR) para um novo grupo de recursos dentro da assinatura atual ou para um novo\ninscrição.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription\nDistribuição de votos da comunidade\nC (95%) 5%'
    }, {
        'question': '9\nVocê criou recentemente uma nova assinatura do Azure que contém um usuário chamado Admin1.\nO Admin1 tenta implantar um recurso do Azure Marketplace usando um modelo do Azure Resource Manager. O Admin1 implanta o modelo usando o\nAzure\nPowerShell e recebe a seguinte mensagem de erro: `O usuário falhou na validação para comprar recursos.Mensagem de erro: `Os termos legais não foram\naceitos para este item nesta assinatura. Para aceitar os termos legais, acesse o portal do Azure (http://go.microsoft.com/fwlink/?LinkId=534873)\ne configure a implantação programática para o item do Marketplace ou crie-o lá pela primeira vez.`\nVocê precisa garantir que o Admin1 possa implantar o recurso do Marketplace com sucesso.\nO que você deve fazer?\n',
        'number': '',
        'page': 31,
        'answers': [{
            'text': 'A. No Azure PowerShell, execute o cmdlet Set-AzApiManagementSubscription\n',
            'correct': false
        }, {
            'text': 'B. No portal do Azure, registre o provedor de recursos Microsoft.Marketplace\n',
            'correct': false
        }, {
            'text': 'C. No Azure PowerShell, execute o cmdlet Set-AzMarketplaceTerms\n',
            'correct': true
        }, {
            'text': 'D. No portal do Azure, atribua a função de administrador de cobrança a Admin1',
            'correct': false
        }
        ],
        'explication': 'C\nReferência:\nhttps://docs.microsoft.com/en-us/powershell/module/az.marketplaceordering/set-azmarketplaceterms?view=azps-4.1.0\nDistribuição de votos da comunidade\nC (100%)\nTópico 2'
    }, {
        'question': '10\nVocê tem um locatário do Azure Active Directory (Azure AD) que contém 5.000 contas de usuário.\nVocê cria uma nova conta de usuário chamada AdminUser1.\nVocê precisa atribuir a função administrativa de administrador de usuários a AdminUser1.\nO que você deve fazer nas propriedades da conta do usuário?\n',
        'number': '',
        'page': 31,
        'answers': [{
            'text': 'A. Na folha Licenças, atribua uma nova licença\n',
            'correct': false
        }, {
            'text': 'B. Na folha Função do diretório, modifique a função do diretório\n',
            'correct': true
        }, {
            'text': 'C. Na folha Grupos, convide a conta de usuário para um novo grupo',
            'correct': false
        }
        ],
        'explication': 'B\nAtribuir uma função a um usuário -\n1. Inscreva-se no portal do Azure com uma conta que seja administrador global ou administrador com função privilegiada para o diretório.\n2. Selecione Azure Active Directory, selecione Usuários e selecione um usuário específico na lista.\n3. Para o usuário selecionado, selecione Função do diretório, selecione Adicionar função e escolha as funções administrativas apropriadas na lista Funções do diretório, como\nAdministrador de acesso condicional.\n4. Pressione Selecionar para salvar.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-users-assign-role-azure-portal\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '11\nVocê tem um locatário do Azure Active Directory (Azure AD) chamado contoso.onmicrosoft.com que contém 100 contas de usuário.\nVocê compra 10 licenças Azure AD Premium P2 para o locatário.\nVocê precisa garantir que 10 usuários possam usar todos os recursos do Azure AD Premium.\nO que você deveria fazer?\n',
        'number': '',
        'page': 32,
        'answers': [{
            'text': 'A. Na folha Licenças do Azure AD, atribua uma licença\n',
            'correct': true
        }, {
            'text': 'B. Na folha Grupos de cada usuário, convide os usuários para um grupo\n',
            'correct': false
        }, {
            'text': 'C. No domínio do Azure AD, adicione um aplicativo empresarial\n',
            'correct': false
        }, {
            'text': 'D. Na folha Função do diretório de cada usuário, modifique a função do diretório',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/active-directory/fundamentals/license-users-groups\nDistribuição de votos da comunidade\nA (92%) 8%\nTópico 2'
    }, {
        'question': '12\nVocê tem uma assinatura do Azure chamada Subscription1 e uma implantação local do Microsoft System Center Service Manager.\nSubscription1 contém uma máquina virtual chamada VM1.\nVocê precisa garantir que um alerta seja definido no Service Manager quando a quantidade de memória disponível na VM1 estiver abaixo de 10%.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 32,
        'answers': [{
            'text': 'A. Crie um runbook de automação\n',
            'correct': false
        }, {
            'text': 'B. Implantar um aplicativo de funções\n',
            'correct': false
        }, {
            'text': 'C. Implantar o Conector de Gerenciamento de Serviços de TI (ITSM)\n',
            'correct': true
        }, {
            'text': 'D. Crie uma notificação',
            'correct': false
        }
        ],
        'explication': 'C\nO Conector de Gestão de Serviços de TI (ITSMC) permite-lhe ligar o Azure e um produto/serviço de Gestão de Serviços de TI (ITSM) suportado,\ntais como o\nGerenciador de serviços do Microsoft System Center.\nCom o ITSMC, você pode criar itens de trabalho na ferramenta ITSM, com base nos alertas do Azure (alertas métricos, alertas de log de atividades e alertas de Log Analytics).\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/platform/itsmc-overview\nDistribuição de votos da comunidade\nC (88%) 9%'
    }, {
        'question': '13\nVocê se inscreve no Azure Active Directory (Azure AD) Premium P2.\nVocê precisa adicionar um usuário chamado admin1@contoso.com como administrador em todos os computadores que serão associados ao domínio do Azure AD.\nO que você deve configurar no Azure AD?\n',
        'number': '',
        'page': 33,
        'answers': [{
            'text': 'A. Configurações do dispositivo na folha Dispositivos\n',
            'correct': true
        }, {
            'text': 'B. Provedores da lâmina do servidor MFA\n',
            'correct': false
        }, {
            'text': 'C. Configurações do usuário na folha Usuários\n',
            'correct': false
        }, {
            'text': 'D. Configurações gerais da folha Grupos',
            'correct': false
        }
        ],
        'explication': 'A\nQuando você conecta um dispositivo Windows ao Azure AD usando uma associação do Azure AD, o Azure AD adiciona os seguintes princípios de segurança ao local\ngrupo de administradores no dispositivo:\n✑ A função de administrador global do Azure AD\n✑ A função de administrador do dispositivo Azure AD\n✑ O usuário que realiza a adesão ao Azure AD\nNo portal do Azure, você pode gerenciar a função de administrador de dispositivos na página Dispositivos. Para abrir a página Dispositivos:\n1. Entre no portal do Azure como administrador global ou administrador de dispositivos.\n2. Na barra de navegação esquerda, clique em Azure Active Directory.\n3. Na seção Gerenciar, clique em Dispositivos.\n4. Na página Dispositivos, clique em Configurações do dispositivo.\n5. Para modificar a função de administrador do dispositivo, configure administradores locais adicionais em dispositivos ingressados \u200b\u200bno Azure AD.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/active-directory/devices/assign-local-admin\nDistribuição de votos da comunidade\nUm (100%)'
        ,
        'filters':[
            'K001'
        ]
    },

    {
        'question': `14. Tópico 2. img. HOTSPOT -
            Você tem um locatário do Azure Active Directory chamado Contoso.com que inclui os seguintes usuários:
            <img src="imagesquestions/X304.png" alt="imagem da questão"></img>
            Contoso.com inclui os seguintes dispositivos Windows 10:
            <img src="imagesquestions/X305.png" alt="imagem da questão"></img>

            Você cria os seguintes grupos de segurança em Contoso.com:
            <img src="imagesquestions/X306.png" alt="imagem da questão"></img>

            Para cada uma das instruções a seguir, selecione Sim se a instrução for verdadeira . Caso contrário, selecione Não.
            NOTA: Cada seleção correta vale um ponto.
            Área Quente:`,
        'number': '',
        'page': 0,
        'answers': [
            {
                'text': 'O usuário1 pode adicionar o dispositivo2 ao grupo 1',
                'correct': false
            }, {
                'text': 'O usuário2 pode adicionar o dispositivo1 ao grupo1',
                'correct': true
            }, {
                'text': 'User2 pode adicionar Device2 ao Group2',
                'correct': false
            },
        ],
        'explication': `Comentário mais votado: 
        O Usuário1 pode adicionar o Dispositivo2 ao Grupo1: 
        Não O Usuário2 pode adicionar o Dispositivo1 ao Grupo1: Sim 
        O Usuário2 pode adicionar o Dispositivo2 ao Grupo2: Não
         Explicação: Os grupos podem conter dispositivos registrados e associados como membros.
          Como administrador global ou administrador de dispositivos em nuvem, você pode gerenciar
           os dispositivos registrados ou associados. Os administradores do Serviço Intune 
           podem atualizar e excluir dispositivos. O administrador de usuários pode gerenciar usuários,
            mas não dispositivos. User1 é um administrador de dispositivo em nuvem. 
            Os utilizadores nesta função podem ativar, desativar e eliminar dispositivos no Azure AD 
            e ler chaves BitLocker do Windows 10 (se presentes) no portal do Azure. 
            A função não concede permissões para gerenciar outras propriedades no dispositivo.
             O usuário2 é o proprietário do Grupo1. Ele pode adicionar o Dispositivo1 ao Grupo1.
              O Grupo2 está configurado para associação dinâmica. As propriedades nas quais são
               definidas as associações de um dispositivo em um grupo do tipo dispositivo dinâmico 
               não podem ser alteradas por um usuário final ou por um administrador de usuários.
                O Usuário2 não pode adicionar nenhum dispositivo ao Grupo2.
                 Referência: https://docs.microsoft.com/en-us/azure/active-directory/devices/device-management-azure-portal`,
        'typeQuestion': "multiplecheckboxyesorno"
        ,
        'filters':[
            'K001'
        ]
    },


    {
        'question': `15 . Tópico 2. \n
        Você tem uma assinatura do Azure que contém um grupo de recursos chamado RG26.\nO RG26 está definido para o local da Europa Ocidental e é usado para criar recursos temporários para um projeto. RG26 contém os recursos mostrados no
        \ntabela a seguir.
        <img src="imagesquestions/X318.jpg" alt="imagem da questão"></img>

        \nSQLDB01 tem backup em RGV1.\nQuando o projeto for concluído, você tenta excluir o RG26 do portal do Azure. A exclusão falha.\nVocê precisa excluir RG26.
        \nO que você deve fazer primeiro?\n`,
        'number': '',
        'page': 35,
        'answers': [{
            'text': 'A. Excluir VM1\n',
            'correct': false
        }, {
            'text': 'B. Parar VM1\n',
            'correct': false
        }, {
            'text': 'C. Pare o backup do SQLDB01\n',
            'correct': true
        }, {
            'text': 'D. Excluir sa001',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': '16\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual chamada VNet1. A VNet1 está num grupo de recursos denominado RG1.\nA assinatura1 tem um usuário chamado User1. O usuário1 tem as seguintes funções:\n✑ Leitor\n✑ Administrador de segurança\n✑ Leitor de Segurança\nVocê precisa garantir que o Usuário1 possa atribuir a função de Leitor da VNet1 a outros usuários.\nO que você deveria fazer?\n',
        'number': '',
        'page': 36,
        'answers': [{
            'text': 'A. Remova o Usuário1 das funções Leitor de Segurança e Leitor da Assinatura1.\n',
            'correct': false
        }, {
            'text': 'B. Atribua ao Usuário1 a função de Administrador de Acesso do Usuário para VNet1.\n',
            'correct': true
        }, {
            'text': 'C. Atribua ao Usuário1 a função de Contribuidor de Rede para VNet1.\n',
            'correct': false
        }, {
            'text': 'D. Atribua ao Usuário1 a função de Contribuidor de Rede para RG1.',
            'correct': false
        }
        ],
        'explication': 'B\nTem acesso total a todos os recursos, incluindo o direito de delegar acesso a outros.\nObservação:\nHá várias versões desta questão no exame. A questão tem duas possíveis respostas corretas:\n✑ Atribuir ao Usuário1 a função de Administrador de Acesso do Usuário para VNet1.\n✑ Atribuir ao Usuário1 a função de Proprietário para VNet1.\nOutras opções de resposta incorretas que você pode ver no exame incluem o seguinte:\n✑ Atribuir ao Usuário1 a função de Colaborador para VNet1.\n✑ Remover o Usuário1 das funções de Leitor de Segurança e Leitor para Assinatura1. Atribuir ao Usuário1 a função de Colaborador para Assinatura1.\n✑ Remover o Usuário1 da função de Leitor de Segurança para Assinatura1. Atribuir ao Usuário1 a função de Colaborador para RG1.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/role-based-access-control/overview\nDistribuição de votos da comunidade\nB (85%) C (15%)'
    },

    {
        'question': `17\n

            Você tem um locatário do Azure Active Directory (Azure AD) chamado contosocloud.onmicrosoft.com.
            Sua empresa tem uma zona DNS pública para contoso.com.
            Você adiciona contoso.com como um nome de domínio personalizado ao Azure AD.
            Você precisa garantir que o Azure possa verificar o nome de domínio.
            Que tipo de registro DNS você deve criar?
        
        `,
        'number': '17',
        'page': 36,

        'answers': [{
            'text': 'A. MX.\n',
            'correct': true
        }, {
            'text': 'B. Segurança Nacional.\n',
            'correct': false
        }, {
            'text': 'C. PTR.\n',
            'correct': false
        }, {
            'text': 'D. RRSIG.',
            'correct': false
        }
        ],
        'explication': `Resposta correta: A 🗳️
            Para verificar seu nome de domínio personalizado (exemplo)
            1. Entre no portal do Azure usando uma conta de administrador global para o diretório.
            2. Selecione Azure Active Directory e, em seguida, selecione Nomes de domínio personalizados.
            3. Na página Fabrikam - Nomes de domínio personalizados, selecione o nome de domínio personalizado, Contoso.
            4. Na página Contoso, selecione Verificar para certificar-se de que seu domínio personalizado esteja registrado corretamente e seja válido para o Azure AD. Use o tipo de registro TXT ou MX.
            Observação:
            há várias versões desta questão no exame. A questão pode ter duas respostas corretas:
            1. MX
            2. TXT
            A questão também pode ter outras opções de resposta incorretas, incluindo as seguintes:
            1. SRV
            2. NSEC3
            Referência:
            https://docs.microsoft.com/en-us/azure/dns/dns-web-sites-custom-domain
            Distribuição de votos na comunidade
            Um (100%)`
    },


    {
        'question': '18\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Directory (Azure AD) chamado Adatum e uma assinatura do Azure chamada Subscription1. Adatum contém um grupo chamado\nDesenvolvedores.\nSubscription1 contém um grupo de recursos denominado Dev.\nVocê precisa fornecer ao grupo de Desenvolvedores a capacidade de criar aplicativos lógicos do Azure no grupo de recursos Dev.\nSolução: na Assinatura1, você atribui a função de usuário do DevTest Labs ao grupo Desenvolvedores.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 38,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nA função de usuário do DevTest Labs só permite conectar, iniciar, reiniciar e desligar máquinas virtuais em seus Azure DevTest Labs.\nA função Colaborador de Aplicativo Lógico permite gerenciar aplicativos lógicos, mas não acessá-los. Fornece acesso para visualizar, editar e atualizar uma aplicação lógica.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles https://docs.microsoft.com/en-us/azure/logic-apps/logic -\naplicativos protegendo um aplicativo lógico\nDistribuição de votos da comunidade\nB (100%)\nTópico 2'
    }, {
        'question': '19\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Directory (Azure AD) chamado Adatum e uma assinatura do Azure chamada Subscription1. Adatum contém um grupo chamado\nDesenvolvedores.\nSubscription1 contém um grupo de recursos denominado Dev.\nVocê precisa fornecer ao grupo de Desenvolvedores a capacidade de criar aplicativos lógicos do Azure no grupo de recursos Dev.\nSolução: Na Assinatura1, você atribui a função Operador de Aplicativo Lógico ao grupo Desenvolvedores.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 38,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nVocê precisaria da função Logic App Contributor.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles https://docs.microsoft.com/en-us/azure/logic-apps/logic-\napps-securing-a-logic-app\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '20\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Directory (Azure AD) chamado Adatum e uma assinatura do Azure chamada Subscription1. Adatum contém um grupo chamado\nDesenvolvedores.\nSubscription1 contém um grupo de recursos denominado Dev.\nVocê precisa fornecer ao grupo de Desenvolvedores a capacidade de criar aplicativos lógicos do Azure no grupo de recursos Dev.\nSolução: no Dev, você atribui a função Colaborador ao grupo Desenvolvedores.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 39,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nA função Colaborador pode gerir todos os recursos (e adicionar recursos) num Grupo de Recursos.\nDistribuição de votos da comunidade\nUm (100%)'
    },

    {
        'question': `21 Tópico 2. DRAG DROP –
            Você tem uma assinatura do Azure usada por quatro departamentos da sua empresa. A assinatura contém 10 grupos de recursos. Cada departamento utiliza recursos em vários grupos de recursos.
            Você precisa enviar um relatório ao departamento financeiro. O relatório deve detalhar os custos de cada departamento.
            Quais são as três ações que você deve executar em sequência? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize-as na ordem correta.
            Selecione e coloque:`,
        'number': '',
        'page': 0,
        'answers': [

            [
                {
                    'text': 'Options \n',
                    'options': [
                        { 'text': ' Atribua uma tag a cada grupo de recursos.', 'correct': false, 'index': '-1' },
                        { 'text': 'Atribua uma tag a cada recurso.', 'correct': true, 'index': '1' },
                        { 'text': 'Baixe o relatório de uso.', 'correct': true, 'index': '3' },
                        { 'text': 'Na folha Análise de custos, filtre a exibição por tag.', 'correct': true, 'index': '2' },
                        { 'text': 'Abra a folha Custos de recursos de cada grupo de recursos.', 'correct': false, 'index': '-1' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer \n',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': 'Comentário mais votado: Resposta correta: Caixa 1: Atribua uma tag a cada recurso Caixa 2: Na folha Análise de custos, filtre a exibição por tag Caixa 3: Baixe o relatório de uso Referência: https://docs.microsoft.com/en-us/azure /azure-resource-manager/resource-group-using-tags https://docs.microsoft.com/en-us/azure/billing/billing-getting-started',
        'typeQuestion': 'dragdrop'
    },



    {
        'question': '22\nVocê tem uma assinatura do Azure chamada Subscrição1 que contém um espaço de trabalho do Azure Log Analytics chamado Workspace1.\nVocê precisa visualizar os eventos de erro de uma tabela chamada Event.\nQual consulta você deve executar no Workspace1?\n',
        'number': '',
        'page': 41,
        'answers': [{
            'text': 'A. Evento Get-Event | onde {$_.EventType == "erro"},\n',
            'correct': false
        }, {
            'text': 'B. pesquisar em (Evento) "erro"\n',
            'correct': true
        }, {
            'text': 'C. selecione * do evento onde EventType == "erro"\n',
            'correct': false
        }, {
            'text': 'D. pesquisar em (Evento) * | onde EventType -eq “erro”',
            'correct': false
        }
        ],
        'explication': 'B\nPara pesquisar um termo em uma tabela específica, adicione o nome da tabela logo após o operador de pesquisa\nObservação:\nExistem várias versões desta questão no exame. A pergunta tem duas possíveis respostas corretas:\n1. Evento | pesquise "erro"\n2. Evento | onde EventType == "erro"\n3. pesquise em (Evento) "erro"\nOutras opções de respostas incorretas que você pode ver no exame incluem o seguinte:\n1. Evento Get-Event | onde {$_.EventTye ג"€eq "erro"},\n2. Evento | onde EventType é "erro"\n3. pesquise em (Evento) * | onde EventType é"€eq "erro"\n4. selecione * em Evento onde EventType é "erro"\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/log-query/search-queries https://docs.microsoft.com/en-us/azure/azure-monitor/log-\nconsulta/portal de início https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/searchoperator?pivots=azuredataexplorer\nDistribuição de votos da comunidade\nB (92%) 8%'
    },


    {
        'question': `Questao 23. Tópico 2.

        HOTSPOT -
        Você tem uma assinatura do Azure que contém uma rede virtual chamada VNET1 na região East US 2. Uma interface de rede chamada VM1-NI está conectada à
        VNET1.
        Você implanta com sucesso o seguinte modelo do Azure Resource Manager.
        <img src="imagesquestions/X359.jpg" alt="imagem da questão"></img>

        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        OBSERVAÇÃO: Cada seleção correta vale um ponto.
        Hot Area:
        
        `,
        'number': '23',
        'page': 0,

        'answers': [{
            'text': 'VM1 e VM2 podem se conectar ao VNET1',
            'correct': true
        }, , {
            'text': 'Se um datacenter do Azure ficar indisponível, VM1 ou VM2 estarão disponíveis.',
            'correct': true
        }, , {
            'text': 'Se a região Leste dos EUA 2 ficar indisponível, VM1 ou VM2 estarão disponíveis.',
            'correct': false
        },
        ],
        'explication': `Caixa 1: Sim -

                Caixa 2: Sim -
                VM1 está na Zona 1, enquanto VM2 está na Zona 2.

                Caixa 3: Não -
                Referência:
                https://docs.microsoft.com/en-us/azure/architecture/resiliency/recovery-loss-azure-region
                Comentário mais votado: SIM SIM NÃO`,
        'typeQuestion': "multiplecheckboxyesorno"
    },



    {
        'question': `24 . Tópico 2.
            \nVocê tem uma assinatura do Azure chamada Subscription1. Subscription1 contém os grupos de recursos na tabela a seguir.
            <img src="imagesquestions/X372.png" alt="imagem da questão"></img>
            \nRG1 possui um aplicativo da web chamado WebApp1. WebApp1 está localizado na Europa Ocidental.\nVocê move WebApp1 para RG2.\nQual é o efeito da mudança?\n`,
        'number': '',
        'page': 44,
        'answers': [{
            'text': 'A. O plano de Serviço de Aplicativo para WebApp1 permanece na Europa Ocidental. A política2 se aplica ao WebApp1.\n',
            'correct': true
        }, {
            'text': 'B. O plano do Serviço de Aplicativo para WebApp1 é transferido para o Norte da Europa. A política2 se aplica ao WebApp1.\n',
            'correct': false
        }, {
            'text': 'C. O plano de Serviço de Aplicativo para WebApp1 permanece na Europa Ocidental. A Política1 se aplica ao WebApp1.\n',
            'correct': false
        }, {
            'text': 'D. O plano do Serviço de Aplicativo para WebApp1 é transferido para o Norte da Europa. A Política1 se aplica ao WebApp1.',
            'correct': false
        }
        ],
        'explication': 'A\nVocê pode mover um aplicativo para outro plano do Serviço de Aplicativo, desde que o plano de origem e o plano de destino estejam no mesmo grupo de recursos e\nregião geográfica.\nA região em que a sua aplicação é executada é a região do plano do Serviço de Aplicações em que se encontra. No entanto, não é possível alterar a região de um plano do Serviço de Aplicações.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/app-service/app-service-plan-manage\nDistribuição de votos da comunidade\nA (86%) 10%'
        , 'filters': ['K002']
    }, {
        question: `25. Você tem uma assinatura do Azure chamada Subscription1 que possui uma ID de assinatura c276fc76-9cd4-44c9-99a7-4fd71546436e.
            Você precisa criar uma função RBAC personalizada chamada CR1 que atenda aos seguintes requisitos:
            ✑ Pode ser atribuída apenas aos grupos de recursos em Subscription1
            ✑ Impede o gerenciamento das permissões de acesso para os grupos de recursos
            ✑ Permite visualizar, criar, modificar e excluir de recursos dentro dos grupos de recursos
            O que você deve especificar nos escopos atribuíveis e nos elementos de permissão da definição de CR1? Para responder, selecione as opções apropriadas na área de resposta.
            NOTA: Cada seleção correta vale um ponto.
        `,
        number: 25,
        page: 5,
        answers: [{
            text: '"assignableScopes":[',
            options: [

                {
                    text: 'Selecione',
                    correct: false
                },

                {
                    text: '"/"',
                    correct: false
                }, {
                    text: '"/subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e"',
                    correct: true
                }, {
                    text: '"/subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e/resourceGroups"',
                    correct: false
                }
            ]
        }, {
            text: `],<br>"permissions":[{"actions":["*"], "additionalProperties":{},
                "dataActions":[], "notActions":[
                `,
            options: [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    text: "Microsoft.Authorization/*",
                    correct: true
                }, {
                    text: "Microsoft.Resources/*",
                    correct: false
                }, {
                    text: "Microsoft.Security/*",
                    correct: false
                }
            ],
            textAfter: '],\n "notDataActions"];[]\n}\n],'
        }
        ],
        typeQuestion: 'select',
        explication: 'Caixa 1 /subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e. Caixa 2 Microsoft Authorization'
    }, {
        'question': '26\nVocê tem uma assinatura do Azure.\nOs usuários acessam os recursos da assinatura em casa ou nos sites dos clientes. Em casa, os usuários devem estabelecer uma VPN ponto a site para\nacessar os recursos do Azure. Os utilizadores nos sites dos clientes acedem aos recursos do Azure através de VPNs site-to-site.\nVocê tem um aplicativo de linha de negócios chamado App1 que é executado em várias máquinas virtuais do Azure. As máquinas virtuais executam o Windows Server 2016.\nVocê precisa garantir que as conexões com o App1 estejam espalhadas por todas as máquinas virtuais.\nQuais são os dois possíveis serviços do Azure que você pode usar? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 47,
        'answers': [{
            'text': 'A. um balanceador de carga interno\n',
            'correct': true
        }, {
            'text': 'B. um balanceador de carga público\n',
            'correct': false
        }, {
            'text': 'C. uma Rede de Entrega de Conteúdo (CDN) do Azure\n',
            'correct': false
        }, {
            'text': 'D. Gerente de Trânsito\n',
            'correct': false
        }, {
            'text': 'E. um Gateway de Aplicativo do Azure',
            'correct': true
        }
        ],
        'explication': 'EA\nO tráfego de rede do gateway VPN é roteado para o aplicativo em nuvem por meio de um balanceador de carga interno. O balanceador de carga está localizado no\nsub-rede front-end do aplicativo.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/vpn https://docs.microsoft.com/en-\nus/azure/load-balancer/load-balancer-overview https://docs.microsoft.com/en-us/azure/application-gateway/overview\nDistribuição de votos da comunidade\nEA (100%)\nTópico 2'
    }, {
        'question': '27\nVocê tem uma assinatura do Azure.\nVocê tem 100 máquinas virtuais do Azure.\nVocê precisa identificar rapidamente máquinas virtuais subutilizadas que podem ter seu nível de serviço alterado para uma oferta mais barata.\nQual lâmina você deve usar?\n',
        'number': '',
        'page': 47,
        'answers': [{
            'text': 'A. Monitorar\n',
            'correct': false
        }, {
            'text': 'B. Assistente(Advisor)\n',
            'correct': true
        }, {
            'text': 'C. Métricas\n',
            'correct': false
        }, {
            'text': 'D. Insights do cliente',
            'correct': false
        }
        ],
        'explication': 'B\nO Advisor ajuda você a otimizar e reduzir seus gastos gerais com o Azure, identificando recursos ociosos e subutilizados. Você pode obter custo\nrecomendações da guia Custo no painel do Advisor.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations\nDistribuição de votos da comunidade\nB (100%)'
        ,
        'filters':[
            'K001'
        ]
    },

    {
        'question': `28 . Tópico 2.
            PONTO DE ACESSO -
            Você tem um locatário do Azure Active Directory (Azure AD).
            Você precisa criar uma política de acesso condicional que exija que todos os usuários usem a autenticação multifator ao acessar o portal do Azure.
            Quais são as três configurações que você deve definir? Para responder, selecione as configurações apropriadas na área de resposta.
            NOTA: Cada seleção correta vale um ponto.
            <img src="imagesquestions/X398.png" alt="imagem da questão"></img>
            `,
        'number': '',
        'page': 47,
        'answers': [{
            'text': 'OK',
            'correct': true
        }
        ],
        'explication': `Resposta: https://kimbellyf.github.io/quiz-edition/imagesquestions/X404.png
             Reference:
            https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/app-based-mfa`
    },



    {
        'question': '29\nVocê tem um locatário do Azure Active Directory (Azure AD) chamado contoso.onmicrosoft.com.\nA função de administrador de usuário é atribuída a um usuário chamado Admin1.\nUm parceiro externo tem uma conta da Microsoft que usa a entrada user1@outlook.com.\nAdmin1 tenta convidar o parceiro externo para entrar no locatário do Azure AD e recebe a seguinte mensagem de erro: `Não é possível convidar o usuário\nuser1@outlook.com `"Exceção de autorização genérica.`\nVocê precisa garantir que Admin1 possa convidar o parceiro externo para entrar no locatário do Azure AD.\nO que você deveria fazer?\n',
        'number': '',
        'page': 49,
        'answers': [{
            'text': 'A. Na folha Configurações de usuários, modifique as configurações de colaboração externa.\n',
            'correct': true
        }, {
            'text': 'B. Na folha Nomes de domínio personalizados, adicione um domínio personalizado.\n',
            'correct': false
        }, {
            'text': 'C. Na folha Relacionamentos organizacionais, adicione um provedor de identidade.\n',
            'correct': false
        }, {
            'text': 'D. Na folha Funções e administradores, atribua a função de administrador de segurança a Admin1.',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://techcommunity.microsoft.com/t5/Azure-Active-Directory/Generic-authorization-exception-inviting-Azure-AD-gests/td-p/274742\nDistribuição de votos da comunidade\nA (100%)'
    }, {
        'question': '30\nVocê tem uma assinatura do Azure vinculada a um locatário do Azure Active Directory. O locatário inclui uma conta de usuário chamada User1.\nVocê precisa garantir que o Usuário1 possa atribuir uma política ao grupo de gerenciamento raiz do locatário.\nO que você deveria fazer?\n',
        'number': '',
        'page': 50,
        'answers': [{
            'text': 'A. Atribua a função de Proprietário da Assinatura do Azure ao Usuário1 e, em seguida, modifique as políticas de acesso condicional padrão.\n',
            'correct': false
        }, {
            'text': 'B. Atribua a função de Proprietário para a assinatura do Azure ao Usuário1 e, em seguida, instrua o Usuário1 a configurar o gerenciamento de acesso aos recursos do Azure.\n',
            'correct': false
        }, {
            'text': 'C. Atribua a função de administrador global ao Usuário1 e instrua o Usuário1 a configurar o gerenciamento de acesso aos recursos do Azure.\n',
            'correct': true
        }, {
            'text': 'D. Crie um novo grupo de gerenciamento e delegue o Usuário1 como proprietário do novo grupo de gerenciamento.',
            'correct': false
        }
        ],
        'explication': 'B\nO gráfico a seguir mostra a lista de funções e as ações suportadas em grupos de gestão.\nObservação:\nCada diretório recebe um único grupo de gerenciamento de nível superior denominado grupo de gerenciamento "Raiz". Este grupo de gerenciamento raiz está integrado ao\nhierarquia para que todos os grupos de gerenciamento e assinaturas sejam agrupados nela. Este grupo de gerenciamento raiz permite políticas globais e função do Azure\natribuições a serem aplicadas no nível do diretório. O Administrador Global do Azure AD precisa se elevar ao Acesso do Usuário\nFunção de administrador deste grupo raiz inicialmente. Após elevar o acesso, o administrador pode atribuir qualquer função do Azure a outros usuários do diretório ou\ngrupos para gerenciar a hierarquia. Como administrador, você pode atribuir sua própria conta como proprietário do grupo de gerenciamento raiz.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/governance/management-groups/overview\nDistribuição de votos da comunidade\nC (85%) Outros'
    },


    {
        question: `31. Tópico 2. HOTSPOT –
            Você tem um locatário do Azure Active Directory (Azure AD) chamado adatum.com. Adatum.com contém os grupos na tabela a seguir.
            <img src="imagens/zquestao31topico2parte1.jpg" alt="imagem da questão"></img>

            Você cria duas contas de usuário configuradas conforme mostrado na tabela a seguir.
            <img src="imagens/zquestao31topico2parte2.png" alt="imagem da questão"></img>

            De quais grupos são membros do Usuário1 e do Usuário2? Para responder, selecione as opções apropriadas na área de resposta.
            NOTA: Cada seleção correta vale um ponto.
            Área Quente:
            `,
        number: 31,
        page: 2,


        answers: [
            {
                text: 'User1:',
                options:
                    [
                        {
                            text: 'Selecione',
                            correct: false
                        },
                        {
                            text: 'Grupo1 somente',
                            correct: true
                        },
                        {
                            text: 'Grupo2 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo3 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo1 e Grupo 2 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo1 e Grupo 3 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo2 e Grupo 3 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo 1, Grupo2 e Grupo 3',
                            correct: false
                        },
                    ]
            },
            {
                text: 'User2:',
                'options':
                    [
                        {
                            text: 'Selecione',
                            correct: false
                        },
                        {
                            text: 'Grupo1 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo2 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo3 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo1 e Grupo 2 somente',
                            correct: true
                        },
                        {
                            text: 'Grupo1 e Grupo 3 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo2 e Grupo 3 somente',
                            correct: false
                        },
                        {
                            text: 'Grupo 1, Grupo2 e Grupo 3',
                            correct: false
                        },
                    ]
            }

        ],
        'typeQuestion': 'select',
        'explication': ` Caixa 1: Grupo 1 somente -
            A primeira regra se aplica -

            Caixa 2: Grupo1 e Grupo2 somente -
            Ambas as regras de associação se aplicam.
            Referência:
            https://docs.microsoft.com/en-us/sccm/core/clients/manage/collections/create-collections
        `
    },




    {
        question: `32. Tópico 2. 

        HOTSPOT -
        Você tem uma implantação híbrida do Azure Active Directory (Azure AD) que contém os usuários mostrados na tabela a seguir.
        <img src="imagens/zquestao32topico2.png" alt="imagem da questão"></img>
        Você precisa modificar os atributos JobTitle e UsageLocation para os usuários.
        Para quais usuários você pode modificar os atributos do Azure AD? Para responder, selecione as opções apropriadas na área de resposta.
        OBSERVAÇÃO: Cada seleção correta vale um ponto.
        Área de Hot:
        
            `,
        number: 32,
        page: 2,


        answers: [
            {
                text: 'JobTitle:',
                options:
                    [
                        {
                            text: 'Selecione',
                            correct: false
                        },
                        {
                            text: 'User1 somente',
                            correct: false
                        },
                        {
                            text: 'User1 e User 2 somente',
                            correct: false
                        },
                        {
                            text: 'User1 e User 3 somente',
                            correct: true
                        },
                        {
                            text: 'User1 e User 3 somente',
                            correct: false
                        },
                        {
                            text: 'User1, User2 e User 3',
                            correct: false
                        },
                    ]
            },
            {
                text: 'UsageLocation:',
                'options':
                    [
                        {
                            text: 'Selecione',
                            correct: false
                        },
                        {
                            text: 'User1 somente',
                            correct: false
                        },
                        {
                            text: 'User1 e User 2 somente',
                            correct: false
                        },
                        {
                            text: 'User1 e User 3 somente',
                            correct: false
                        },
                        {
                            text: 'User1 e User 3 somente',
                            correct: false
                        },
                        {
                            text: 'User1, User2 e User 3',
                            correct: true
                        },
                    ]
            }

        ],
        'typeQuestion': 'select',
        'explication': `Caixa 1: User1 e User3 somente -
            Você deve usar o Windows Server Active Directory para atualizar a identidade, informações de contato ou informações de trabalho para usuários cuja fonte de autoridade é o Windows Server Active
            Directory.

            Caixa 2: User1, User2 e User3 -
            Referência:
            https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-users-profile-azure-portal
        `
    },


    {
        'question': '33\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê precisa garantir que um usuário do Azure Active Directory (Azure AD) chamado Admin1 receba a função necessária para habilitar o Tra c Analytics para um\nAssinatura do Azure.\nSolução: você atribui a função Network Contributor no nível de assinatura a Admin1.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 53,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nSua conta deve atender a um dos seguintes requisitos para permitir a análise de tráfego:\nA sua conta deve ter qualquer uma das seguintes funções do Azure no âmbito da subscrição: proprietário, contribuidor, leitor ou contribuidor de rede.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/network-watcher/tra c-analytics-faq\nDistribuição de votos da comunidade\nA (60%) B (40%)\nTópico 2'
    }, {
        'question': '34\nObservação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução única que\npode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\nVocê precisa garantir que um usuário do Azure Active Directory (Azure AD) chamado Admin1 tenha a função necessária para habilitar o Tra c Analytics para uma\nassinatura do Azure.\nSolução: você atribui a função Proprietário no nível da assinatura ao Admin1.\nIsso atende à meta?\n',
        'number': '',
        'page': 53,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nSua conta deve atender a um dos seguintes requisitos para habilitar a análise de tráfego:\nSua conta deve ter qualquer uma das seguintes funções do Azure no escopo da assinatura: proprietário, colaborador, leitor ou colaborador de rede.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/network-watcher/tra c-analytics-faq\nDistribuição de votos da comunidade\nA (71%) B (29%)'
    }, {
        'question': '35\nObservação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução única que\npode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\nVocê precisa garantir que um usuário do Azure Active Directory (Azure AD) chamado Admin1 tenha a função necessária para habilitar o Tra c Analytics para uma\nassinatura do Azure.\nSolução: você atribui a função Reader no nível da assinatura ao Admin1.\nIsso atende à meta?\n',
        'number': '',
        'page': 54,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'A\nSua conta deve atender a um dos seguintes requisitos para permitir a análise de tráfego:\nA sua conta deve ter qualquer uma das seguintes funções do Azure no âmbito da subscrição: proprietário, contribuidor, leitor ou contribuidor de rede.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/network-watcher/tra c-analytics-faq\nDistribuição de votos da comunidade\nB (73%) A (27%)\nTópico 2'
    }, {
        'question': '36\nVocê tem uma assinatura do Azure que contém um usuário chamado User1.\nVocê precisa garantir que o Usuário1 possa implantar máquinas virtuais e gerenciar redes virtuais. A solução deve usar o princípio do menor privilégio.\nQual função de controle de acesso baseado em função (RBAC) você deve atribuir ao Usuário1?\n',
        'number': '',
        'page': 54,
        'answers': [{
            'text': 'A. Proprietário\n',
            'correct': false
        }, {
            'text': 'B. Colaborador de Máquina Virtual\n',
            'correct': false
        }, {
            'text': 'C. Colaborador\n',
            'correct': true
        }, {
            'text': 'D. Login de administrador de máquina virtual',
            'correct': false
        }
        ],
        'explication': 'C\nColaborador: Concede acesso total para gerenciar todos os recursos, mas não permite atribuir funções no Azure RBAC\nRespostas incorretas:\nR: Proprietário: Concede acesso total para gerenciar todos os recursos, incluindo a capacidade de atribuir funções no Azure RBAC.\nB: Contribuidor de Máquina Virtual: Permite gerenciar máquinas virtuais, mas não acessá-las, e não a rede virtual ou conta de armazenamento\neles estão conectados.\nD: Login de administrador de máquina virtual: visualize máquinas virtuais no portal e faça login como administrador.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles\nDistribuição de votos da comunidade\nC (93%) 7%'
    },


    {
        'question': `Questão 37 tópico 2. 
            HOTSPOT –
            Você tem um locatário do Azure Active Directory (Azure AD) que contém três administradores globais chamados Admin1, Admin2 e Admin3.
            O inquilino está associado a uma subscrição do Azure. O controle de acesso para a assinatura é configurado conforme mostrado na exposição Controle de acesso. (Clique na
            guia Controle de Acesso.)

            <img src="imagens/zquestao37topico2parte1.jpg" alt="imagem da questão"></img>

            Você entra no portal do Azure como Admin1 e configura o locatário conforme mostrado na exposição do locatário. (Clique na guia Locatário.)

            <img src="imagens/zquestao37topico2parte2.jpg" alt="imagem da questão"></img>

            Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
            NOTA: Cada seleção correta vale um ponto.
            Área Quente:

        \n`,
        'number': '',
        'page': 2,
        'studyCase': true,
        'answers': [{

            'text': 'Admin1 pode adicionar Admin 2 como proprietário da assinatura..\n',
            'correct': true
        }, {
            'text': 'Admin3 pode adicionar Admin 2 como proprietário da assinatura.\n',
            'correct': true
        }, {
            'text': 'Admin2 pode criar um grupo de recursos na assinatura.\n',
            'correct': false
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Comentário mais votado:
            Resposta correta: As funções do Azure (RBAC) e do Azure AD são independentes.
            As funções do AD não concedem acesso a recursos e as funções do Azure não concedem acesso
            ao Azure AD. No entanto, um Administrador Global no AD pode elevar o acesso a todas as 
            assinaturas e será o Administrador de Acesso do Usuário no escopo raiz do Azure. 
            Todos os 3 usuários são GA (AD) e Admin3 é o proprietário da assinatura (RBAC). 
            Admin1 tem acesso elevado, então ele também é Administrador de Acesso do Usuário (RBAC).
            Para atribuir a um usuário a função de proprietário no escopo da Assinatura,
            você precisa de permissões, como Administrador de Acesso do Usuário ou 
            Proprietário.
            Caixa 1: Sim Admin1 tem acesso elevado,
               então ele é Administrador de Acesso do Usuário. Isso é válido.
            Caixa 2: Sim Admi3 é Proprietário da Assinatura. Isso é válido. 
            Caixa 3: Não Admin2 é apenas um GA no escopo do Azure AD. Ele não tem permissão na Assinatura. Referência: https://docs.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal-subscription-admin
        `
    },

    {
        'question': '38\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma máquina virtual do Azure chamada VM1. VM1 está em um grupo de recursos denominado RG1.\nVM1 executa serviços que serão usados \u200b\u200bpara implantar recursos em RG1.\nVocê precisa garantir que um serviço em execução na VM1 possa gerenciar os recursos em RG1 usando a identidade da VM1.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 56,
        'answers': [{
            'text': 'A. No portal do Azure, modifique as configurações de Identidade Gerenciada da VM1\n',
            'correct': true
        }, {
            'text': 'B. No portal do Azure, modifique as configurações de controle de acesso (IAM) do RG1\n',
            'correct': false
        }, {
            'text': 'C. No portal do Azure, modifique as configurações de controle de acesso (IAM) da VM1\n',
            'correct': false
        }, {
            'text': 'D. No portal do Azure, modifique as configurações de Políticas de RG1',
            'correct': false
        }
        ],
        'explication': 'A\nAs identidades geridas para recursos do Azure fornecem aos serviços do Azure uma identidade gerida automaticamente no Azure Ative Directory. Você pode usar\nesta identidade para autenticar qualquer serviço que suporte a autenticação do Azure AD, sem ter credenciais no seu código.\nVocê pode habilitar e desabilitar a identidade gerenciada atribuída pelo sistema para VM usando o portal do Azure.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/active-directory/owned-identities-azure-resources/qs-con gure-portal-windows-vm\nDistribuição de votos da comunidade\nA (84%) B (16%)'
    }, {
        'question': `39 Tópico 2
            \nVocê tem uma assinatura do Azure que contém um grupo de recursos chamado TestRG.
            \nVocê usa TestRG para validar uma implantação do Azure.
            \nTestRG contém os seguintes recursos:
            <img src="imagens/zquestao39topico2.png" alt="imagem da questão"></img>
            \nVocê precisa excluir TestRG.
            \nO que você deve fazer primeiro?\n`,
        'number': '',
        'page': 57,
        'answers': [{
            'text': 'A. Modifique as configurações de backup da VM1 e modifique o tipo de bloqueio de recursos da VNET1\n',
            'correct': false
        }, {
            'text': 'B. Remova o bloqueio de recursos do VNET1 e exclua todos os dados no Vault1\n',
            'correct': true
        }, {
            'text': 'C. Desligue VM1 e remova o bloqueio de recursos da VNET1\n',
            'correct': false
        }, {
            'text': 'D. Desligue VM1 e exclua todos os dados no Vault1',
            'correct': false
        }
        ],
        'explication': 'C\nQuando você exclui um grupo de recursos, todos os seus recursos também são excluídos. A exclusão de um grupo de recursos exclui todas as suas implantações de modelo e\noperações atualmente armazenadas.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-resource-manager/management/delete-resource-group?tabs=azure-powershell\nDistribuição de votos da comunidade\nB (52%) A (32%) Outros\nTópico 2'
    }, {
        'question': '40\nVocê tem uma zona DNS do Azure chamada adatum.com.\nVocê precisa delegar um subdomínio chamado research.adatum.com a um servidor DNS diferente no Azure.\nO que você deveria fazer?\n',
        'number': '',
        'page': 57,
        'answers': [{
            'text': 'A. Crie um registro NS chamado research na zona adatum.com.\n',
            'correct': true
        }, {
            'text': 'B. Crie um registro PTR denominado research na zona adatum.com.\n',
            'correct': false
        }, {
            'text': 'C. Modifique o registro SOA de adatum.com.\n',
            'correct': false
        }, {
            'text': 'D. Crie um registro A chamado *.research na zona adatum.com.',
            'correct': false
        }
        ],
        'explication': 'A\nVocê precisa criar um registro de servidor de nomes (NS) para a zona.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/dns/delegate-subdomain\nDistribuição de votos da comunidade\nUm (100%)'
    },




    {
        'question': `41 Tópico 2. DRAG DROP –
            ARRASTAR E SOLTAR -
            Você tem um locatário do Azure Active Directory (Azure AD) que tem o nome de domínio contoso.onmicrosoft.com.
            Você tem um nome de domínio contoso.com registrado em um registrador terceirizado.
            Você precisa garantir que pode criar usuários do Azure AD que tenham nomes contendo um sufixo @contoso.com.
            Quais três ações você deve executar em sequência? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize-as na ordem correta.
            Selecionar e posicionar:`,
        'number': '41',
        'page': 2,
        'answers': [

            [
                {
                    'text': 'Options \n',
                    'options': [
                        {
                            'text': 'Adicionar um registro à zona DNS pública contoso.com',
                            'correct': true, 'index': '2'
                        },
                        {
                            'text': 'Adicione um locatário do Azure AD.',
                            'correct': false, 'index': '-1'
                        },
                        {
                            'text': 'Configurar a marca da empresa.',
                            'correct': false, 'index': '-1'
                        },
                        {
                            'text': 'Crie uma zona DNS do Azure.',
                            'correct': false, 'index': '-1'
                        },
                        {
                            'text': 'Adicione um nome personalizado.',
                            'correct': true, 'index': '1'
                        },
                        {
                            'text': 'Verifique o domínio.',
                            'correct': true, 'index': '3'
                        },
                    ],
                    'function': 'origin'

                },

                {
                    'text': 'Answer \n',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `
            1. Adicione o nome de domínio personalizado ao seu diretório
            2. Adicione uma entrada DNS para o nome de domínio no registrador de nomes de domínio
            3. Verifique o nome de domínio personalizado no Azure AD
            Referência:
            https://docs.microsoft.com/ en-us/azure/dns/dns-web-sites-custom-domain
        `,
        'typeQuestion': 'dragdrop'
        ,
        'filters':[
            'K001'
        ]
    },

    {
        'question': '42\nVocê tem uma assinatura do Azure chamada Subscrição1 que contém um espaço de trabalho do Azure Log Analytics chamado Workspace1.\nVocê precisa visualizar os eventos de erro de uma tabela chamada Event.\nQual consulta você deve executar no Workspace1?\n',
        'number': '',
        'page': 59,
        'answers': [{
            'text': 'A. Evento Get-Event | onde {$_.EventType == "erro"},\n',
            'correct': false
        }, {
            'text': 'B. Evento | pesquise "erro"\n',
            'correct': true
        }, {
            'text': 'C. selecione * do evento onde EventType == "erro"\n',
            'correct': false
        }, {
            'text': 'D. pesquisar em (Evento) * | onde EventType ג"€eq ג€errorג€',
            'correct': false
        }
        ],
        'explication': 'B\nO operador de pesquisa fornece uma experiência de pesquisa em várias tabelas/colunas.\nA sintaxe é:\nNome_tabela | pesquise "termo de pesquisa"\nObservação:\nExistem várias versões desta questão no exame. A pergunta tem três possíveis respostas corretas:\n1. pesquise em (Evento) "erro"\n2. Evento | pesquise "erro"\n3. Evento | onde EventType == "erro"\nOutras opções de respostas incorretas que você pode ver no exame incluem o seguinte:\n1. Evento Get-Event | onde {$_.EventTye ג"€eq "erro"},\n2. Evento | onde EventType é "erro"\n3. selecione * em Evento onde EventType é "erro"\n4. pesquise em (Evento) * | onde EventType é"€eq "erro"\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/log-query/search-queries https://docs.microsoft.com/en-us/azure/azure-monitor/log-\nconsulta/portal de início https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/searchoperator?pivots=azuredataexplorer\nDistribuição de votos da comunidade\nB (91%) 9%\nTópico 2'
    }, {
        'question': '43\nVocê tem um domínio DNS registrado chamado contoso.com.\nVocê cria uma zona DNS pública do Azure chamada contoso.com.\nVocê precisa garantir que os registros criados na zona contoso.com possam ser resolvidos na Internet.\nO que você deveria fazer?\n',
        'number': '',
        'page': 59,
        'answers': [{
            'text': 'A. Crie registros NS em contoso.com.\n',
            'correct': false
        }, {
            'text': 'B. Modifique o registro SOA no registrador de domínio DNS.\n',
            'correct': false
        }, {
            'text': 'C. Crie o registro SOA em contoso.com.\n',
            'correct': false
        }, {
            'text': 'D. Modifique os registros NS no registrador de domínio DNS.',
            'correct': true
        }
        ],
        'explication': 'D\nReferência:\nhttps://docs.microsoft.com/en-us/azure/dns/dns-delegate-domain-azure-dns\nDistribuição de votos da comunidade\nD (100%)'
    },


    {
        'question': `Questão 44 tópico 2. 
            HOTSPOT –
            você tem uma assinatura do Azure que contém uma conta de armazenamento chamada storage1. A assinatura está vinculada a um locatário do Azure Active Directory (Azure AD) chamado contoso.com que sincroniza com um domínio do Active Directory local.
            O domínio contém as entidades de segurança mostradas na tabela a seguir.

            <img src="imagens/zquestao44topico2parte1.png" alt="imagem da questão"></img>

            No Azure AD, você cria um usuário chamado User2.
            A conta storage1 contém um compartilhamento de arquivos chamado share1 e tem as configurações a seguir.
            
            <img src="imagens/zquestao44topico2parte2.png" alt="imagem da questão"></img>

            Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
            NOTA: Cada seleção correta vale um ponto.
            Área Quente:
           
        `,
        'number': '',
        'page': 549,
        'studyCase': true,
        'answers': [{

            'text': 'Você pode atribuir a função Colaborador de Compartilhamento SMB de Dados de Arquivo de Armazenamento ao Usuário1 para share1.\n',
            'correct': true
        }, {
            'text': 'Você pode atribuir a função Leitor de compartilhamento SMB de dados de arquivo de armazenamento ao Computador1 para compartilhamento1.',
            'correct': false
        }, {
            'text': 'Você pode atribuir a função de Colaborador Elevado de Compartilhamento SMB de Dados de Arquivo de Armazenamento ao Usuário2 para share1.',
            'correct': true
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `
            Referência:
            https://docs.microsoft.com/en-us/azure/storage/files/storage-files-identity-ad-ds-assign-permissions?tabs=azure-portal
         `
         ,
        'filters':[
            'K001'
        ]
    },


    {
        'question': `Questão 45  Tópico 2 
            HOTSPOT -
            Você tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual VNet1.
            Você adiciona os usuários na tabela a seguir.

            <img src="imagens/zquestao45topico2.png" alt="imagem da questão"></img>

            Qual usuário pode executar cada configuração? Para responder, selecione as opções apropriadas na área de resposta.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
        `,
        'number': 45,
        'page': 2,
        'studyCase': true,

        'answers': [{
            'text': `Adicione uma sub-rede à VNet1:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente usuário1",
                    'correct': false
                }, {
                    'text': "Somente usuário3",
                    'correct': false
                }, {
                    'text': "Somente Usuário1 e Usuário3",
                    'correct': true
                },
                {
                    'text': "Somente Usuário2 e Usuário3",
                    'correct': false
                },
                {
                    'text': "Usuário1, Usuário2 e Usuário3",
                    'correct': false
                }
            ]
        },


        {
            'text': 'Atribua a um usuário a função de Leitor à VNet1:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente usuário1",
                    'correct': true
                },
                {
                    'text': "Somente usuário2",
                    'correct': false
                },

                {
                    'text': "Somente usuário3",
                    'correct': false
                }, {
                    'text': "Somente Usuário1 e Usuário2",
                    'correct': false
                },
                {
                    'text': "Somente Usuário2 e Usuário3",
                    'correct': false
                },
                {
                    'text': "Usuário1, Usuário2 e Usuário3",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            Caixa 1: Somente Usuário1 e Usuário3.
            Usuário1: A função Proprietário permite que você gerencie tudo, incluindo acesso a recursos.
            Usuário3: A função Colaborador de rede permite que você gerencie redes, incluindo a criação de sub-redes.
            Caixa 2: Somente Usuário1.
            A função Administrador de segurança: Somente no Security Center: Pode exibir políticas de segurança, exibir estados de segurança, editar políticas de segurança, exibir alertas e recomendações, dispensar alertas e recomendações.
            Referência:
            https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations#microsoftnetwork
        `
    },


    {
        'question': `Questão 46  Tópico 2
            HOTSPOT -
            Você tem os recursos do Azure mostrados na exposição a seguir.

            <img src="imagens/zquestao46topico2.jpg" alt="imagem da questão"></img>

            Você planeja rastrear o uso de recursos e impedir a exclusão de recursos.
            A quais recursos você pode aplicar bloqueios e tags? Para responder, selecione as opções apropriadas na área de resposta.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
            Área de Hot:
        `,
        'number': 46,
        'page': 2,
        'studyCase': true,

        'answers': [{
            'text': `Locks(Fechaduras)`,
            'options': [

                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente RG1 e VM1",
                    'correct': false
                }, {
                    'text': "Somente Sub1 e RG1",
                    'correct': false
                }, {
                    'text': "Somente Sub1, RG1 e VM1",
                    'correct': true
                },
                {
                    'text': "Somente MG1, Sub1, RG1 e VM1",
                    'correct': false
                },
                {
                    'text': "Grupo raiz de locatário, MG1, Sub1, RG1 e VM1",
                    'correct': false
                }
            ]
        },


        {
            'text': 'Tags(marcas)',
            'options': [

                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente RG1 e VM1",
                    'correct': false
                }, {
                    'text': "Somente Sub1 e RG1",
                    'correct': false
                }, {
                    'text': "Somente Sub1, RG1 e VM1",
                    'correct': true
                },
                {
                    'text': "Somente MG1, Sub1, RG1 e VM1",
                    'correct': false
                },
                {
                    'text': "Grupo raiz de locatário, MG1, Sub1, RG1 e VM1",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            Caixa 1: Somente Sub1, RG1 e VM1 -
            Você pode bloquear uma assinatura, grupo de recursos ou recurso para impedir que outros usuários em sua organização excluam ou modifiquem acidentalmente recursos críticos.

            Caixa 2: Somente Sub1, RG1 e VM1 -
            Você aplica tags aos seus recursos, grupos de recursos e assinaturas do Azure.
            Referência:
            https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources?tabs=json https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources?tabs=json
        `
    },

    {
        'question': '47\nVocê tem um locatário do Azure Active Directory (Azure AD).\nVocê planeja excluir vários usuários usando a exclusão em massa no centro de administração do Azure Active Directory.\nVocê precisa criar e fazer upload de um arquivo para exclusão em massa.\nQuais atributos de usuário você deve incluir no arquivo?\n',
        'number': '',
        'page': 63,
        'answers': [{
            'text': 'A. O nome principal do usuário e o local de uso apenas de cada usuário\n',
            'correct': false
        }, {
            'text': 'B. O nome principal do usuário apenas de cada usuário\n',
            'correct': true
        }, {
            'text': 'C. Apenas o nome de exibição de cada usuário\n',
            'correct': false
        }, {
            'text': 'D. O nome de exibição e o local de uso apenas de cada usuário\n',
            'correct': false
        }, {
            'text': 'E. O nome de exibição e o nome principal do usuário apenas de cada usuário',
            'correct': false
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/users-bulk-delete\nDistribuição de votos da comunidade\nB (100%)'
    },

    {
        'question': `Questão 48 Tópico 2
            HOTSPOT –
            Você tem uma assinatura do Azure chamada Sub1 que contém os recursos do Azure mostrados na tabela a seguir.

            <img src="imagens/zquestao48topico2parte1.png" alt="imagem da questão"></img>

            Você atribui uma política do Azure que tem as seguintes configurações:
            ✑ Escopo: Sub1
            ✑ Exclusões: Sub1/RG1/VNET1
            ✑ Definição de política: anexar uma tag e seu valor aos recursos
            ✑ Aplicação de política: Habilitada
            ✑ Nome da tag: Tag4
            ✑ Valor da tag: valor4
            Você atribui tags aos recursos conforme mostrado na tabela a seguir.

            <img src="imagens/zquestao48topico2parte2.png" alt="imagem da questão"></img>

            Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
            NOTA: Cada seleção correta vale um ponto.`,
        'number': '',
        'page': 549,
        'studyCase': true,
        'answers': [{

            'text': 'RG1 possui a Tag2: tag IT atribuída apenas',
            'correct': false
        }, {
            'text': 'Storage1 tem as tags Tag1: assinatura, Tag2: IT, Tag3:valuel e Tag4: valor 4 atribuídas.',
            'correct': false
        }, {
            'text': 'VNET1 tem as tags Tag2: IT e Tag3: value2 atribuídas apenas',
            'correct': false
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': ` Algumas discordâncias nos comentários mas o mais votado escolhido foi Não, não e não.
            Caixa 1: Não -
            A Política do Azure adicionará Tag4 ao RG1.

            Caixa 2: Não -
            As tags aplicadas ao grupo de recursos ou assinatura não são herdadas pelos recursos, embora você possa habilitar a herança com a Política do Azure. Storage1 tem Tag3:
            Value1 e a Política do Azure adicionará Tag4.

            Caixa 3: Não -
            As tags aplicadas ao grupo de recursos ou assinatura não são herdadas pelos recursos, portanto, a VNET1 não tem Tag2.
            A VNET1 tem Tag3:value2. A VNET1 é excluída da Política do Azure, portanto, a Tag4 não será adicionada à VNET1.
            Referência:
            https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources?tabs=json
	`
    },


    {
        'question': '49\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê precisa garantir que um usuário do Azure Active Directory (Azure AD) chamado Admin1 receba a função necessária para habilitar o Tra c Analytics para um\nAssinatura do Azure.\nSolução: você atribui a função Tra c Manager Contributor no nível de assinatura a Admin1.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 65,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/network-watcher/tra c-analytics-faq\nDistribuição de votos da comunidade\nB (97%)\nTópico 2'
    }, {
        'question': '50\nVocê tem três escritórios e uma assinatura do Azure que contém um locatário do Azure Active Directory (Azure AD).\nVocê precisa conceder permissões de gerenciamento de usuários a um administrador local em cada escritório.\nO que você deve usar?\n',
        'number': '',
        'page': 65,
        'answers': [{
            'text': 'A. Funções do Azure AD\n',
            'correct': false
        }, {
            'text': 'B. unidades administrativas\n',
            'correct': true
        }, {
            'text': 'C. pacotes de acesso no gerenciamento de direitos do Azure AD\n',
            'correct': false
        }, {
            'text': 'D. Funções do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/active-directory/roles/administrative-units\nDistribuição de votos da comunidade\nB (93%) 8%'
    }, {
        'question': '51\nObservação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que\npode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Directory (Azure AD) chamado Adatum e uma assinatura do Azure chamada Subscription1. Adatum contém um grupo chamado\nDesenvolvedores.\nSubscription1 contém um grupo de recursos chamado Dev.\nVocê precisa fornecer ao grupo Desenvolvedores a capacidade de criar aplicativos lógicos do Azure no grupo de recursos Dev.\nSolução: em Dev, você atribui a função Logic App Contributor ao grupo Desenvolvedores.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 66,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles\nDistribuição de votos da comunidade\nA (50%) B (49%)'
    },


    {
        'question': `Questão 52 Tópico 2 

            Você tem um Azure Load Balancer chamado LB1.
            Você atribui a um usuário chamado User1 as funções mostradas na exposição a seguir.
            
            <img src="imagens/zquestao52topico2.jpg" alt="imagem da questão"></img>

            Use os menus suspensos para selecionar a opção de resposta que completa cada afirmação com base nas informações apresentadas no gráfico.
            NOTA: Cada seleção correta vale um ponto.
        `,
        'number': 1,
        'page': 540,
        'studyCase': true,

        'answers': [{
            'text': `O usuário1 pode [responder opção] LB1.`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "excluir/deletar",
                    'correct': false
                }, {
                    'text': "crie uma regra NAT para",
                    'correct': false
                }, {
                    'text': "atribuir acesso a outros usuários para",
                    'correct': true
                },
            ]
        },


        {
            'text': 'O usuário1 pode [responder à escolha] o grupo de recursos.',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "excluir uma máquina virtual de modificar as regras de",
                    'correct': true
                }, {
                    'text': "modificar as regras de",
                    'correct': false
                }, {
                    'text': "balanceamento de carga na implantação de um cluster do Azure Kubernetes Service (AKS) para",
                    'correct': false
                },


            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            Referência:
                https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#virtual-machine-contributor https://docs.microsoft.com/ en-us/azure/controle de acesso baseado em função/rbac-and-directory-admin-roles
        `
    },

    {
        'question': '53\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual chamada VNet1. A VNet1 está num grupo de recursos denominado RG1.\nA assinatura1 tem um usuário chamado User1. O usuário1 tem as seguintes funções:\n✑ Leitor\n✑ Administrador de segurança\n✑ Leitor de Segurança\nVocê precisa garantir que o Usuário1 possa atribuir a função de Leitor da VNet1 a outros usuários.\nO que você deveria fazer?\n',
        'number': '',
        'page': 68,
        'answers': [{
            'text': 'A. Remova o Usuário1 da função Leitor de Segurança para Assinatura1. Atribua ao Usuário1 a função de Colaborador para RG1.\n',
            'correct': false
        }, {
            'text': 'B. Atribua ao Usuário1 a função de Proprietário para VNet1.\n',
            'correct': true
        }, {
            'text': 'C. Atribua ao Usuário1 a função de Colaborador para VNet1.\n',
            'correct': false
        }, {
            'text': 'D. Atribua ao Usuário1 a função de Contribuidor de Rede para VNet1.',
            'correct': false
        }
        ],
        'explication': 'B\nTem acesso total a todos os recursos, incluindo o direito de delegar acesso a outros.\nObservação:\nExistem várias versões desta questão no exame. A pergunta tem duas possíveis respostas corretas:\n✑ Atribua ao Usuário1 a função de Administrador de Acesso de Usuário para VNet1.\n✑ Atribua ao Usuário1 a função de Proprietário para VNet1.\nOutras opções de respostas incorretas que você pode ver no exame incluem o seguinte:\n✑ Remova o Usuário1 das funções Leitor de Segurança e Leitor da Assinatura1. Atribua ao Usuário1 a função de Colaborador para Assinatura1.\n✑ Remova o Usuário1 das funções Leitor de Segurança e Leitor da Assinatura1.\n✑ Atribua ao Usuário1 a função de Contribuidor de Rede para RG1.\nReferências:\nhttps://docs.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles https://docs.microsoft.com/en-\nus/azure/controle de acesso baseado em função/visão geral\nDistribuição de votos da comunidade\nB (97%)'
    },

    {
        'question': `Questão 54  Tópico 2 

            HOTSPOT -
            Você configura a função personalizada mostrada na exposição a seguir.

            <img src="imagens/zquestao54topico2.png" alt="imagem da questão"></img>

            Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
            Hot Area:
        `,
        'number': 54,
        'page': 2,
        'studyCase': true,

        'answers': [{
            'text': `Para garantir que os usuários possam entrar em máquinas virtuais às quais
             foram atribuídas a função 1, modifique a seção [opção de resposta]`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Actions/ações",
                    'correct': false
                },
                {
                    'text': "roleType/tipo de função",
                    'correct': false
                }, {
                    'text': "NotActions/não ações",
                    'correct': false
                }, {
                    'text': "dataActions/ações de dados",
                    'correct': true
                },
                {
                    'text': "notDataActions/",
                    'correct': false
                },
                {
                    'text': "assignableScopes/escopos atribuíveis",
                    'correct': false
                },

            ]
        },


        {
            'text': `
                Para garantir que a função1 possa ser atribuída apenas a um grupo 
                de recursos denominado RG1, modifique a seção [opção de resposta]
            `,

            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Actions/ações",
                    'correct': false
                },
                {
                    'text': "roleType/tipo de função",
                    'correct': false
                }, {
                    'text': "NotActions/não ações",
                    'correct': false
                }, {
                    'text': "dataActions/ações de dados",
                    'correct': false
                },
                {
                    'text': "notDataActions/",
                    'correct': false
                },
                {
                    'text': "assignableScopes/escopos atribuíveis",
                    'correct': true
                },

            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentário mais votado:
            você não está definindo uma política, mas uma função personalizada.
            Você precisa fornecer um dos seguintes itens em DataActions: Microsoft.Compute/virtualMachines/login/action
            Microsoft.Compute/virtualMachines/loginAsAdmin/action 
            https://docs.microsoft.com/en-us/azure/role-based-access -control/built-in-roles?source=recommendations#virtual-machine-administrator-login
             a resposta correta é dataActions e atribuíveisScopes
        `
    },


    {
        'question': '55\nVocê tem uma assinatura do Azure que contém uma conta de armazenamento chamada storage1. A conta storage1 contém um compartilhamento de arquivo chamado share1.\nA assinatura está vinculada a um locatário híbrido do Azure Active Directory (Azure AD) que contém um grupo de segurança denominado Grupo1.\nVocê precisa conceder ao Grupo1 a função de Colaborador Elevado de Compartilhamento SMB de Dados de Arquivo de Armazenamento para share1.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 71,
        'answers': [{
            'text': 'A. Habilite a autenticação do Active Directory Domain Service (AD DS) para armazenamento1.\n',
            'correct': true
        }, {
            'text': 'B. Conceda permissões em nível de compartilhamento usando o File Explorer.\n',
            'correct': false
        }, {
            'text': 'C. Monte share1 usando o File Explorer.\n',
            'correct': false
        }, {
            'text': 'D. Crie um endpoint privado.',
            'correct': false
        }
        ],
        'explication': 'A\nAntes de ativar o Azure AD sobre SMB para ações do Azure, certifique-se de ter concluído os seguintes pré-requisitos:\n1. Selecione ou crie um locatário do Azure AD.\n2. Para dar suporte à autenticação com credenciais do Azure AD, você deve habilitar os Serviços de Domínio do Azure AD para seu locatário do Azure AD.\nEtc.\nNota: O Contribuidor Elevado de Compartilhamento SMB de Dados de Arquivo de Armazenamento permite ler, gravar, excluir e modificar permissões NTFS no arquivo de Armazenamento do Azure.\nações sobre SMB.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/les/storage-les-identity-auth-active-directory-domain-service-enable\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': '56\nVocê tem 15 assinaturas do Azure.\nVocê tem um locatário do Azure Active Directory (Azure AD) que contém um grupo de segurança chamado Grupo1.\nVocê planeja adquirir uma assinatura adicional do Azure.\nVocê precisa garantir que o Grupo1 possa gerenciar atribuições de funções para as assinaturas existentes e as assinaturas planejadas. A solução deve\natender aos seguintes requisitos:\n✑ Use o princípio do menor privilégio.\n✑ Minimize o esforço administrativo.\nO que você deveria fazer?\n',
        'number': '',
        'page': 72,
        'answers': [{
            'text': 'A. Atribua ao Grupo1 a função de Proprietário para o grupo de gerenciamento raiz.\n',
            'correct': false
        }, {
            'text': 'B. Atribua ao Grupo1 a função de Administrador de Acesso de Usuário para o grupo de gerenciamento raiz.\n',
            'correct': true
        }, {
            'text': 'C. Crie um novo grupo de gerenciamento e atribua ao Grupo1 a função de Administrador de Acesso de Usuário para o grupo.\n',
            'correct': false
        }, {
            'text': 'D. Crie um novo grupo de gerenciamento e atribua ao Grupo1 a função de Proprietário do grupo.',
            'correct': false
        }
        ],
        'explication': 'B\nA função de Administrador de Acesso ao Utilizador permite ao utilizador conceder a outros utilizadores acesso aos recursos do Azure. Essa opção pode ser útil para recuperar\nacesso a uma assinatura.\nOs grupos de gerenciamento oferecem gerenciamento de nível empresarial em escala, independentemente do tipo de assinatura que você tenha.\nCada diretório recebe um único grupo de gerenciamento de nível superior denominado grupo de gerenciamento "Raiz". Este grupo de gerenciamento raiz está integrado ao\nhierarquia para que todos os grupos de gerenciamento e assinaturas sejam agrupados nela. Este grupo de gerenciamento raiz permite políticas globais e função do Azure\natribuições a serem aplicadas no nível do diretório.\nIncorreta:\nNão C: alguns diretórios que começaram a usar grupos de gerenciamento no início da versão prévia, antes de 25 de junho de 2018, puderam ver um problema em que nem todos os\nas assinaturas estavam dentro da hierarquia. O processo para ter todas as assinaturas na hierarquia foi implementado após uma atribuição de função ou política\nfoi feito no grupo de gerenciamento raiz no diretório.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles https://docs.microsoft.com/en-\nnós/azure/governança/grupos de gerenciamento/visão geral\nDistribuição de votos da comunidade\nB (82%) Outros'
    },

    {
        'question': `Questão 57 Tópico 2
            Você tem uma assinatura do Azure que contém a hierarquia mostrada na exposição a seguir.

            <img src="imagens/zquestao57topico2.png" alt="imagem da questão"></img>

            Você cria uma definição do Azure Policy chamada Policy1.
            A quais recursos do Azure você pode atribuir a Política1 e quais recursos do Azure você pode especificar como exclusões da Política1? Para responder, selecione as opções apropriadas na área de resposta.
            NOTA: Cada seleção correta vale um ponto.
        `,
        'number': 57,
        'page': 2,
        'studyCase': true,
        'answers': [{
            'text': `Você pode atribuir a Política1 a:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente assinatura1 e RG1",
                    'correct': false
                }, {
                    'text': "Somente ManagementGroup1 e Subscription1",
                    'correct': false
                }, {
                    'text': "Somente grupo raiz de locatário, ManagementGroup1 e Subscription1",
                    'correct': false
                },
                {
                    'text': "Somente grupo raiz de locatário, ManagementGroup1, Subscription1 e RG1",
                    'correct': true
                },
                {
                    'text': `Grupo raiz de locatário, ManagementGroup1, Subscription1, RG1 e VM1`,
                    'correct': false
                },
            ]
        },

        {
            'text': `Você pode excluir a Política1 de:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente VM1",
                    'correct': false
                }, {
                    'text': "Somente RG1 e VM1",
                    'correct': false
                }, {
                    'text': "Somente assinatura1, RG1 e VM1",
                    'correct': false
                },
                {
                    'text': "Somente ManagementGroup1, Subscription1, RG1 e VM1",
                    'correct': true
                },
                {
                    'text': "Grupo raiz de locatário, ManagementGroup1, Subscription1, RG1 e VM1",
                    'correct': false
                },

            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentário mais votado:
            Como a discussão adicionou muita confusão, fez com que muitas pessoas aqui simplesmente deixassem fatos aleatórios sem qualquer prova, enganando as pessoas, eu testei em um laboratório do Azure. No campo de escopo da guia "Básico", consegui selecionar "Grupo Raiz de Inquilino" ou "Grupo de Gerenciamento1" com as entradas opcionais de Assinatura e Grupo de Recursos. Assim, ""você pode atribuir política ao Grupo Raiz de Inquilino,Grupo de Gerenciamento1,Assinatura1 e RG1"" Quanto à segunda resposta sobre as exclusões, consegui selecionar todos os itens do escopo,
            EXCETO o grupo raiz do locatário. Portanto, 
            a resposta correta seria ""ManagementGroup1,Subscription1,RG1 e VM1"" Espero que ajude
        `
        ,
        'filters':[
            'K001'
        ]
    },




    {
        'question': `58\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que
            \npode atingir os objetivos declarados. 
            Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros
            podem não ter uma solução correta.
            \nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. 
            Como resultado, estas perguntas não aparecerão na tela de revisão.
            \nVocê tem uma assinatura do Azure que contém os seguintes usuários em um locatário do Azure Active Directory chamado contoso.onmicrosoft.com:
            
            <img src="imagens/zquestao58topico2.png" alt="imagem da questão"></img>
            \nUser1 cria um novo locatário do Azure Active Directory chamado external.contoso.onmicrosoft.com.
            \nVocê precisa criar novas contas de usuário em external.contoso.onmicrosoft.com.
            \nSolução: você instrui o Usuário2 a criar as contas de usuário.
            \nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 75,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'A\nApenas um administrador global pode adicionar utilizadores a este inquilino.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/devops/organizations/accounts/add-users-to-azure-ad\nDistribuição de votos da comunidade\nB (92%) 8%'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': `59\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém os seguintes usuários em um locatário do Azure Active Directory chamado contoso.onmicrosoft.com:
            <img src="imagens/zquestao58topico2.png" alt="mesma imagem do 58 questão"></img>
            \nUser1 cria um novo locatário do Azure Active Directory chamado external.contoso.onmicrosoft.com.
            \nVocê precisa criar novas contas de usuário em external.contoso.onmicrosoft.com.
            \nSolução: você instrui o User4 a criar as contas de usuário.
            \nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 76,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nApenas um administrador global pode adicionar utilizadores a este inquilino.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/devops/organizations/accounts/add-users-to-azure-ad\nDistribuição de votos da comunidade\nB (93%) 7%'
    }, {
        'question': '60\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém os seguintes usuários em um locatário do Azure Active Directory chamado contoso.onmicrosoft.com:  <img src="imagens/zquestao58topico2.png" alt="mesma imagem do 58 questão"></img> \nUser1 cria um novo locatário do Azure Active Directory chamado external.contoso.onmicrosoft.com.\nVocê precisa criar novas contas de usuário em external.contoso.onmicrosoft.com.\nSolução: você instrui o User3 a criar as contas de usuário.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 77,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nSomente um administrador global pode adicionar usuários a este locatário.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/devops/organizations/accounts/add-users-to-azure-ad\nDistribuição de votos da comunidade\nB (83%) A (17%)'
    }, {
        'question': '61\nVocê tem duas assinaturas do Azure denominadas Sub1 e Sub2.\nUm administrador cria uma função personalizada que possui um escopo atribuível a um grupo de recursos denominado RG1 em Sub1.\nVocê precisa garantir que pode aplicar a função personalizada a qualquer grupo de recursos em Sub1 e Sub2. A solução deve minimizar o esforço administrativo.\nO que você deveria fazer?\n',
        'number': '',
        'page': 78,
        'answers': [{
            'text': 'A. Selecione a função personalizada e adicione Sub1 e Sub2 aos escopos atribuíveis. Remova RG1 dos escopos atribuíveis.\n',
            'correct': true
        }, {
            'text': 'B. Crie uma nova função personalizada para Sub1. Crie uma nova função personalizada para Sub2. Remova a função de RG1.\n',
            'correct': false
        }, {
            'text': 'C. Crie uma nova função personalizada para Sub1 e adicione Sub2 aos escopos atribuíveis. Remova a função de RG1.\n',
            'correct': false
        }, {
            'text': 'D. Selecione a função personalizada e adicione Sub1 aos escopos atribuíveis. Remova RG1 dos escopos atribuíveis. Crie uma nova função personalizada para\nSub2.',
            'correct': false
        }
        ],
        'explication': 'A\nPode ser usado como:\n"AssignableScopes": [\n"/subscriptions/{Sub1},",\n"/subscriptions/{Sub2},",\nObservação: Exemplo de função personalizada:\nO seguinte mostra a aparência de uma função personalizada conforme exibida usando o Azure PowerShell no formato JSON. Esta função personalizada pode ser usada para\nmonitorar e reiniciar máquinas virtuais.\n{\n"Name": "Operador de máquina virtual",\n"Id": "88888888-8888-8888-8888-88888888888",\n"IsCustom": true,\n"Description": "Pode monitorar e reiniciar máquinas virtuais.",\n"Actions": [\n"Microsoft.Storage/*/read",\n"Microsoft.Network/*/read",\n"Microsoft.Compute/*/read",\n"Microsoft.Compute/virtualMachines/start/action",\n"Microsoft.Compute/virtualMachines/restart/action",\n"Microsoft.Authorization/*/read",\n"Microsoft.ResourceHealth/availabilityStatuses/read",\n"Microsoft.Resources/subscriptions/resourceGroups/read",\n"Microsoft.Insights/alertRules/*",\n"Microsoft.Insights/diagnosticSettings/*",\n"Microsoft.Support/*"\n],\n"NotActions": [],\n"DataActions": [],\n"NotDataActions": [],\n"AssignableScopes": [\n"/subscriptions/{subscriptionId1},",\n"/subscriptions/{subscriptionId2},",\n"/providers/Microsoft.Management/managementGroups/{groupId1},"\n]\n},\nReferência:\nhttps://docs.microsoft.com/en-us/azure/role-based-access-control/custom-roles\nDistribuição de votos da comunidade\nA (100%)'
    }, {
        'question': `62 Tópico 2
            \nVocê tem uma assinatura do Azure que contém uma conta de armazenamento chamada storageacct1234 e dois usuários chamados Usuário1 e Usuário2.
            \nVocê atribui ao Usuário1 as funções mostradas na exposição a seguir.
            <img src="imagens/wquestao62topico2.png" alt="imagem da questão"></img>
            \nQuais são as duas ações que o Usuário1 pode realizar? 
            Cada resposta correta apresenta uma solução completa.
            \nNOTA: Cada seleção correta vale um ponto.\n`,
        'number': '',
        'page': 79,
        'answers': [{
            'text': 'A. Atribua funções ao Usuário2 para storageacct1234.\n',
            'correct': false
        }, {
            'text': 'B. Carregar dados de blob para storageacct1234.\n',
            'correct': true
        }, {
            'text': 'C. Modifique o firewall de storageacct1234.\n',
            'correct': false
        }, {
            'text': 'D. Visualize os dados do blob em storageacct1234.\n',
            'correct': true
        }, {
            'text': 'E. Visualize os compartilhamentos em storageacct1234.',
            'correct': false
        }
        ],
        'explication': 'EA\nDistribuição de votos da comunidade\nBD (99%)\nTópico 2'
    }, {
        'question': '63\nVocê tem uma assinatura do Azure chamada Subscription1 que contém um espaço de trabalho do Azure Log Analytics chamado Workspace1.\nVocê precisa visualizar os eventos de erro de uma tabela chamada Event.\nQual consulta você deve executar no Workspace1?\n',
        'number': '',
        'page': 79,
        'answers': [{
            'text': 'A. select * from Event where EventType == "error"\n',
            'correct': false
        }, {
            'text': 'B. Event | search "error"\n',
            'correct': true
        }, {
            'text': 'C. Event | where EventType is "error"\n',
            'correct': false
        }, {
            'text': 'D. Get-Event Event | where {$_.EventType == "error"},',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '64\nVocê tem um aplicativo Web dos Serviços de Aplicativo do Azure chamado App1.\nVocê planeja implantar o App1 usando Web Deploy.\nVocê precisa garantir que os desenvolvedores do App1 possam usar suas credenciais do Azure AD para implantar conteúdo no App1. A solução deve usar o princípio\nde menor privilégio.\nO que você deveria fazer?\n',
        'number': '',
        'page': 80,
        'answers': [{
            'text': 'A. Atribuir a função de Proprietário aos desenvolvedores\n',
            'correct': false
        }, {
            'text': 'B. Configurar credenciais em nível de aplicativo para FTPS\n',
            'correct': false
        }, {
            'text': 'C. Atribuir a função de Colaborador do Site aos desenvolvedores\n',
            'correct': true
        }, {
            'text': 'D. Configurar credenciais de usuário para FTPS',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nC (98%)\nTópico 2'
    }, {
        'question': '65\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Active Directory (Azure AD) chamado contoso.com.\nVocê tem um arquivo CSV que contém os nomes e endereços de e-mail de 500 usuários externos.\nVocê precisa criar uma conta de usuário convidado em contoso.com para cada um dos 500 usuários externos.\nSolução: No Azure AD no portal do Azure, você usa a operação de convidar usuários em massa.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 80,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (79%) A (21%)'
    },

    {
        'question': `Questão 66 Tópico 2
            HOTSPOT

            Você tem uma assinatura do Azure vinculada a um locatário do Azure AD. O locatário contém as funções personalizadas de controle de acesso baseado em função (RBAC) mostradas na tabela a seguir.

            <img src="imagens/wquestao66topico2.png" alt="imagem da questão"></img>

            No portal do Azure, você precisa criar duas funções personalizadas chamadas Role3 e Role4. Role3 será uma função de assinatura do Azure. Role4 será uma função do Azure AD.

            Quais funções você pode clonar para criar as novas funções? Para responder, selecione as opções apropriadas na área de resposta.

            OBSERVAÇÃO: cada seleção correta vale um ponto.
        `,
        'number': 66,
        'page': 3,
        'studyCase': false,

        'answers': [{
            'text': `Role3/Função3`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente Role1/função1",
                    'correct': false
                }, {
                    'text': "Somente roles/funções de assinatura integradas do Azure",
                    'correct': false
                }, {
                    'text': "Somente funções de assinatura Role1 e internas do Azure",
                    'correct': true
                },
                {
                    'text': "Somente roles/funções de assinatura do Azure integradas e roles/funções do Azure AD integradas",
                    'correct': false
                },
                {
                    'text': "Roles1/Função1, Roles2/Função2, funções de assinatura internas do Azure e funções internas do Azure AD",
                    'correct': false
                }
            ]
        },


        {
            'text': 'Role4/Função4',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente role2/função2",
                    'correct': true
                }, {
                    'text': "Somente funções internas do Azure AD",
                    'correct': false
                }, {
                    'text': "Somente funções Role2 e internas do Azure AD",
                    'correct': false
                },
                {
                    'text': "Somente funções integradas do Azure AD e funções de assinatura integradas do Azure",
                    'correct': false
                },
                {
                    'text': "Role1, Role2, Azure AD integrado e funções de assinatura do Azure integradas",
                    'correct': false
                },

            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentário mais votado: 
             A resposta deve ser Role3: Role1 e somente funções de assinatura do Azure integradas
             Role4: 
             somente Role2 Explicação: Você não pode clonar a função do Azure AD integrada
        `
    },


    {
        'question': `Questão 67 Tópico 2
            ARRASTAR E SOLTAR

            Você tem uma assinatura do Azure chamada Sub1 que contém dois usuários chamados Usuário1 e Usuário2.

            Você precisa atribuir funções de controle de acesso baseado em função (RBAC) ao Usuário1 e Usuário2. Os usuários devem ser capazes de executar as seguintes tarefas no Sub1:

            • O Usuário1 deve visualizar os dados em qualquer conta de armazenamento.
            • O Usuário2 deve atribuir aos usuários a função de Colaborador para contas de armazenamento.

            A solução deve usar o princípio do menor privilégio.

            Qual função RBAC você deve atribuir a cada usuário? Para responder, arraste as funções apropriadas para os usuários corretos. Cada função pode ser usada uma vez, mais de uma vez ou nunca. Pode ser necessário arrastar a barra de divisão entre os painéis ou rolar para visualizar o conteúdo.

            OBSERVAÇÃO: cada seleção correta vale um ponto.
            <img src="imagens/wquestao67topico2.png" alt="imagem da questão" style="max-width:320px"></img>
            `,
        'number': '67',
        'page': 3,
        'studyCase': false,

        'answers': [
            [
                {
                    'text': 'RBAC roles/funções \n',
                    'options': [
                        { 'text': 'Owner/Proprietário', 'correct': true, 'index': '2' },
                        { 'text': 'Contributor/Colaborador', 'correct': false, 'index': '-1' },
                        { 'text': 'Reader/Leitor e Data Acess/acesso a dados', 'correct': true, 'index': '1' },
                        { 'text': 'Storage Account Contributor/Colaborador da conta de armazenamento', 'correct': false, 'index': '-1' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer area \n',
                    'options': [
                        { 'text': 'User1', 'correct': true, 'index': '1' },
                        { 'text': 'User2', 'correct': true, 'index': '2' }
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `
            User1: Reader and Data Access
            User2: Owner
        `,
        'typeQuestion': 'dragdrop',
        'filters':[
            'K001'
        ]
    },

    {
        'question': '68\nVocê tem uma assinatura do Azure que contém 10 máquinas virtuais, um cofre de chaves denominado Vault1 e um NSG (grupo de segurança de rede) denominado NSG1. Todos\nos recursos são implantados na região do Leste dos EUA Azure.\nAs máquinas virtuais são protegidas usando NSG1. O NSG1 está configurado para bloquear todo o tráfego de saída para a Internet.\nVocê precisa garantir que as máquinas virtuais possam acessar o Vault1. A solução deve usar o princípio do menor privilégio e minimizar\nesforço\nO que você deve configurar como destino da regra de segurança de saída para NSG1?\n',
        'number': '',
        'page': 83,
        'answers': [{
            'text': 'A. um grupo de segurança de aplicativos\n',
            'correct': false
        }, {
            'text': 'B. uma etiqueta de serviço\n',
            'correct': true
        }, {
            'text': 'C. um intervalo de endereços IP',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)\nTópico 2'
    }, {
        'question': `69\nVocê tem um locatário do Azure AD chamado adatum.com que contém os grupos mostrados na tabela a seguir.
            <img src="imagens/wquestao69topico2parte1.png" alt="imagem da questão"></img>
           
            \nAdatum.com contém os usuários mostrados na tabela a seguir.
            
           <img src="imagens/wquestao69topico2parte2.png" alt="imagem da questão"></img>

           \nVocê atribui a licença do Azure Active Directory Premium Plano 2 ao Grupo1 e ao Usuário4.\nA quais usuários é atribuída a licença do Azure Active Directory Premium Plano 2?\n`,
        'number': '',
        'page': 83,
        'answers': [{
            'text': 'A. Somente usuário4\n',
            'correct': false
        }, {
            'text': 'B. Somente Usuário1 e Usuário4\n',
            'correct': true
        }, {
            'text': 'C. Somente Usuário1, Usuário2 e Usuário4\n',
            'correct': false
        }, {
            'text': 'D. Usuário1, Usuário2, Usuário3 e Usuário4',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (92%) 4%'
    },


    {
        'question': `Questão 70 Tópico 2
            Você tem um locatário do Azure AD chamado contoso.com.

            Você tem duas organizações parceiras externas chamadas fabrikam.com e litwareinc.com. Fabrikam.com está configurada como uma organização conectada.

            Você cria um pacote de acesso conforme mostrado na exposição Pacote de acesso. (Clique na guia Pacote do Access.)

            <img src="imagens/wquestao70topico2parte1.png" alt="imagem da questão"></img>


            Você define as configurações do ciclo de vida do usuário externo conforme mostrado na exposição Ciclo de Vida. (Clique na guia Ciclo de Vida.)

            <img src="imagens/wquestao70topico2parte2.png" alt="imagem da questão"></img>

            Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.

            NOTA: Cada seleção correta vale um ponto.

        
        `,
        'number': '70',
        'page': 3,
        'studyCase': true,
        'answers': [{

            'text': 'Os usuários do Litwareinc.com podem ser atribuídos ao pacote1.',
            'correct': false
        }, {
            'text': 'Após 365 dias, os usuários do fabrikam.com serão removidos do Grupo1.',
            'correct': true
        }, {
            'text': 'Após 395 dias, os usuários do fabrikam.com serão removidos do locatário contoso.com.',
            'correct': true
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Obs: ainda há uma divergência razoável para a segunda afirmação se é sim ou não mas o Comentário mais votado:
            N - Porque não está conectado.
            Y - Porque quando expira é removido do grupo. Prova a seguir 
            Y - Porque..math https://learn.microsoft.com/en-us/azure/active-directory/governance/entitlement-management-access-package-resources Quando a atribuição do pacote de acesso de um usuário expira, eles são removidos do grupo ou equipe, a menos
            que tenham atualmente uma atribuição a outro pacote de acesso que inclua esse mesmo grupo ou equipe.
	    `
    },


    {
        'question': '71\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual chamada VNet1. A VNet1 está num grupo de recursos denominado RG1.\nA assinatura1 tem um usuário chamado User1. O usuário1 tem as seguintes funções:\n• Leitor\n• Administrador de segurança\n• Leitor de segurança\nVocê precisa garantir que o Usuário1 possa atribuir a função de Leitor da VNet1 a outros usuários.\nO que você deveria fazer?\n',
        'number': '',
        'page': 86,
        'answers': [{
            'text': 'A. Atribua ao Usuário1 a função de Colaborador de Rede para VNet1.\n',
            'correct': false
        }, {
            'text': 'B. Remova o Usuário1 da função Leitor de Segurança para Assinatura1. Atribua ao Usuário1 a função de Colaborador para RG1.\n',
            'correct': false
        }, {
            'text': 'C. Atribua ao Usuário1 a função de Proprietário para VNet1.\n',
            'correct': true
        }, {
            'text': 'D. Atribua ao Usuário1 a função de Contribuidor de Rede para RG1.',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    },


    {
        'question': `Questão 72 Tópico 2
            Você tem uma assinatura do Azure que contém os usuários mostrados na tabela a seguir.

            <img src="imagens/wquestao72topico2parte1.png" alt="imagem da questão"></img>

            Os grupos são configurados conforme mostrado na tabela a seguir.

            <img src="imagens/wquestao72topico2parte2.png" alt="imagem da questão"></img>

            Você tem um grupo de recursos chamado RG1, conforme mostrado na exposição a seguir.

            <img src="imagens/wquestao72topico2parte3.png" alt="imagem da questão"></img>

            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

            OBSERVAÇÃO: Cada seleção correta vale um ponto.
        
        `,
        'number': '72',
        'page': 3,
        'studyCase': false,
        'answers': [{

            'text': `Você pode atribuir ao Usuário2 a
                função de Proprietário para RG1 adicionando o Grupo2 como membro do Grupo1.`,
            'correct': false
        }, {
            'text': `
                Você pode atribuir ao Usuário3 a função de Proprietário 
                para RG1 adicionando o Grupo3 como membro do Grupo1.
            `,
            'correct': false
        }, {
            'text': `
                Você pode atribuir ao Usuário3 a função de Proprietário
                para RG1 atribuindo a função de Proprietário ao Grupo3 para
            `,
            'correct': true
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Comentário mais votado: Acabei de testar em meu ambiente de teste do Azure. A resposta é:
             1. Não 2. Não 3. Sim Não sei de onde rpalanivel83 obteve suas respostas
	    `
    },


    {
        'question': '73\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual chamada VNet1. A VNet1 está num grupo de recursos denominado RG1.\nA assinatura1 tem um usuário chamado User1. O usuário1 tem as seguintes funções:\n• Leitor\n• Administrador de segurança\n• Leitor de segurança\nVocê precisa garantir que o Usuário1 possa atribuir a função de Leitor da VNet1 a outros usuários.\nO que você deveria fazer?\n',
        'number': '',
        'page': 88,
        'answers': [{
            'text': 'A. Remova o Usuário1 da função Leitor de Segurança para Subscrito em 1. Atribua ao Usuário1 a função Colaborador para RG1.\n',
            'correct': false
        }, {
            'text': 'B. Atribua ao Usuário1 a função de Proprietário para VNet1.\n',
            'correct': true
        }, {
            'text': 'C. Remova o Usuário1 das funções Leitor de Segurança e Leitor da Assinatura1. Atribua ao Usuário1 a função de Colaborador para a Assinatura 1.\n',
            'correct': false
        }, {
            'text': 'D. Atribua ao Usuário1 a função de Colaborador para VNet1.',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    },
    {
        'question': `Questão 74 Tópico 2
            \nSua rede local contém um gateway VPN.
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/kquestao74topico2.png" alt="imagem da questão"></img>
            \nVocê precisa garantir que todo o tráfego da VM1 para o armazenamento1 viaje pela rede backbone da Microsoft.
            \nO que você deve configurar?\n`,
        'number': '',
        'page': 89,
        'answers': [{
            'text': 'A. Gateway de Aplicativo do Azure\n',
            'correct': false
        }, {
            'text': 'B. endpoints privados\n',
            'correct': true
        }, {
            'text': 'C. um grupo de segurança de rede (NSG)\n',
            'correct': false
        }, {
            'text': 'D. WAN Virtual do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (98%)'
        ,
        'filters':[
            'K001'
        ]
    },

    {
        'question': `Questão 75 Tópico 2
            você tem uma assinatura do Azure que contém um usuário chamado User1 e os recursos mostrados na tabela a seguir.
            <img src="imagens/kquestao75topico2parte1.png" alt="imagem da questão"></img>

            NSG1 está associado à interface de rede1.

            User1 tem atribuições de funções para NSG1 conforme mostrado na tabela a seguir.
            <img src="imagens/kquestao75topico2parte2.png" alt="imagem da questão"></img>

            Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.

            NOTA: Cada seleção correta vale um ponto.
        `,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'User1 pode criar uma conta de armazenamento em RG1.',
            'correct': true
        }, {
            'text': 'O usuário1 pode modificar as configurações de DNS da interface de rede1.',
            'correct': false
        }, {
            'text': 'O usuário1 pode criar uma regra de segurança de entrada para filtrar o tráfego de entrada para networkinterface1.',
            'correct': true
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `
	`
    },

    {
        'question': '76\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual chamada VNet1. A VNet1 está num grupo de recursos denominado RG1.\nA assinatura1 tem um usuário chamado User1. O usuário1 tem as seguintes funções:\n• Leitor\n• Administrador de segurança\n• Leitor de segurança\nVocê precisa garantir que o Usuário1 possa atribuir a função de Leitor da VNet1 a outros usuários.\nO que você deveria fazer?\n',
        'number': '',
        'page': 91,
        'answers': [{
            'text': 'A. Remova o Usuário1 da função Leitor de Segurança para Assinatura1. Atribua ao Usuário1 a função de Colaborador para RG1.\n',
            'correct': false
        }, {
            'text': 'B. Atribua ao Usuário1 a função de Administrador de Acesso para VNet1.\n',
            'correct': true
        }, {
            'text': 'C. Remova o Usuário1 das funções Leitor de Segurança e Leitor da Assinatura1. Atribua ao Usuário1 a função de Colaborador para Assinatura1.\n',
            'correct': false
        }, {
            'text': 'D. Atribua ao Usuário1 a função de Contribuidor de Rede para RG1.',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    },

    {
        'question': `Questão 77 Tópico 2
            Você tem três assinaturas do Azure chamadas Sub1, Sub2 e Sub3 que estão vinculadas a um locatário do Azure AD.

            O locatário contém um usuário chamado User1, um grupo de segurança chamado Group1 e um grupo de gerenciamento chamado MG1. User é um membro do Group1.

            Sub1 e Sub2 são membros do MG1. Sub1 contém um grupo de recursos chamado RG1. RG1 contém cinco funções do Azure.

            Você cria as seguintes atribuições de função para MG1:

            • Group1: Reader
            • User1: User Access Administrator

            Você atribui a User a função Virtual Machine Contributor para Sub1 e Sub2.

	`,
        'number': '77',
        'page': 3,
        'studyCase': false,
        'answers': [{

            'text': 'Os membros do Grupo1 podem visualizar as configurações das funções do Azure.',
            'correct': true
        }, {
            'text': 'O Usuário1 pode atribuir a função de Proprietário para RG1.',
            'correct': true
        }, {
            'text': 'O usuário1 pode criar um novo grupo de recursos e implementar uma máquina virtual no novo grupo.',
            'correct': false
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `
	`
    },


    {
        'question': '78\nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir. <img src="imagens/kquestao78topico2.png" alt="imagem da questão"></img> \nVocê precisa atribuir ao Usuário1 a função de Colaborador de compartilhamento SMB de dados de arquivo de armazenamento para share1.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 93,
        'answers': [{
            'text': 'A. Habilite o acesso a dados baseado em identidade para os compartilhamentos de arquivos no armazenamento1.\n',
            'correct': false
        }, {
            'text': 'B. Modifique o perfil de segurança para os compartilhamentos de arquivos no armazenamento1.\n',
            'correct': false
        }, {
            'text': 'C. Selecione Padrão para autorização do Azure Active Directory no portal do Azure para armazenamento1.\n',
            'correct': false
        }, {
            'text': 'D. Configurar o controle de acesso (IAM) para o compartilhamento1.',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (52%) A (47%)\nTópico 2'
    }, {
        'question': '79\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual chamada VNet1. A VNet1 está num grupo de recursos denominado RG1.\nA assinatura1 tem um usuário chamado User1. O usuário1 tem as seguintes funções:\n• Leitor\n• Administrador de segurança\n• Leitor de segurança\nVocê precisa garantir que o Usuário1 possa atribuir a função de Leitor da VNet1 a outros usuários.\nO que você deveria fazer?\n',
        'number': '',
        'page': 93,
        'answers': [{
            'text': 'A. Remova o Usuário1 da função Leitor de Segurança para Assinatura1. Atribua ao Usuário1 a função de Colaborador para RG1.\n',
            'correct': false
        }, {
            'text': 'B. Atribua ao Usuário1 a função de Administrador de Acesso do Usuário para VNet1.\n',
            'correct': true
        }, {
            'text': 'C. Remova o Usuário1 das funções Leitor de Segurança e Leitor da Assinatura1.\n',
            'correct': false
        }, {
            'text': 'D. Atribua ao Usuário1 a função de Colaborador para VNet1.',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (95%) 5%'
    },

    {
        'question': `Questão 80  Tópico 2
            
            Você tem um locatário do Azure AD chamado adatum.com que contém os grupos mostrados na tabela a seguir.
            
            <img src="imagens/kquestao80topico2.png" alt="imagem da questão"></img>

            Adatum.com contém os usuários mostrados na tabela a seguir.

            <img src="imagens/kquestao80topico2parte2.png" alt="imagem da questão"></img>


            Você atribui uma licença Azure Active Directory Premium P2 ao Grupo1, conforme mostrado na exposição a seguir.

            <img src="imagens/kquestao80topico2parte3.png" alt="imagem da questão"></img>


            O Grupo2 NÃO recebe uma licença diretamente.

            Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.

            NOTA: Cada seleção correta vale um ponto.
	`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Você pode atribuir ao Usuário1 a licença do Microsoft Defender para Cloud Apps Discovery.',
            'correct': false
        }, {
            'text': 'Você pode remover a licença Azure Active Directory Premium P2 do Usuário1.',
            'correct': false
        }, {
            'text': 'O usuário2 recebe o Azure Active Directory Premium P2.',
            'correct': false
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Muita discussão sobre a primeira alternativa ser sim ou não, no comentário mais votado está primeira alternativa é sim, 
        mas não tem uma quantidade tão expressiva de diferença para os outros comentários que dizem ter provado que a primeira alternativa seria N. 
        Com base em muitas pessoas discordando que a primeira alternativa é Falsa, foi colocada essa resposta.
        
        Veja isso... incrível. https://www.youtube.com/watch?v=np-6s3N-1iQ&t=201s Ele mostra como é. NNN
        A razão pela qual há tanta discussão, acho que estamos pensando em muitos cenários "se". 
        Sim, você pode remover a licença premium do Usuário1, mas SOMENTE removendo-os do Grupo1, que não é mencionado. Isso significa que, COMO ESTÁ com esta configuração AGORA, você PODE fazer isso sem etapas adicionais? Então, #2; Não. #1: SIM, você pode atribuir ao usuário 1 a licença do MS defender, mas SOMENTE se você alterar a configuração da licença no Grupo1. Então, como está, não, NÃO. https://youtu.be/np-6s3N-1iQ?t=201 #3: NÃO. "Se você aplicar uma licença a um grupo aninhado, somente os membros usuários de primeiro nível imediatos do grupo terão as licenças aplicadas" https://learn.microsoft.com/en-us/entra/identity/users/licensing-group-advanced
	`
    },

    {
        'question': `Questão 81 Tópico 2
            
            Você tem uma implantação híbrida do Azure Active Directory (Azure AD) que contém os usuários mostrados na tabela a seguir.
            
            <img src="imagens/kquestao81topico2.png" alt="imagem da questão"></img>

            Você precisa modificar os atributos JobTitle e UsageLocation para os usuários.

            Para quais usuários você pode modificar os atributos do Azure AD? Para responder, selecione as opções apropriadas na área de resposta.

            NOTA: Cada seleção correta vale um ponto. 
        `,
        'number': 1,
        'page': 540,
        'studyCase': false,

        'answers': [{
            'text': `JobTitle`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente User1",
                    'correct': false
                }, {
                    'text': "Somente User1 e User2",
                    'correct': false
                }, {
                    'text': "Somente User1 e User3",
                    'correct': true
                },
                {
                    'text': "User1, User2 e User3",
                    'correct': false
                },
                {
                    'text': "",
                    'correct': false
                }
            ]
        },


        {
            'text': 'UsageLocation',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente User1",
                    'correct': false
                }, {
                    'text': "Somente User1 e User2",
                    'correct': false
                }, {
                    'text': "Somente User1 e User3",
                    'correct': false
                },
                {
                    'text': "User1, User2 e User3",
                    'correct': true
                },
                {
                    'text': "",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
        `
    },

    {
        'question': '82\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Active Directory (Azure AD) chamado contoso.com.\nVocê tem um arquivo CSV que contém os nomes e endereços de e-mail de 500 usuários externos.\nVocê precisa criar uma conta de usuário convidado em contoso.com para cada um dos 500 usuários externos.\nSolução: você cria um script do PowerShell que executa o cmdlet New-MgUser para cada usuário externo.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 97,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (94%) 6%\nTópico 2'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '83\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Active Directory (Azure AD) chamado contoso.com.\nVocê tem um arquivo CSV que contém os nomes e endereços de e-mail de 500 usuários externos.\nVocê precisa criar uma conta de usuário convidado em contoso.com para cada um dos 500 usuários externos.\nSolução: você cria um script do PowerShell que executa o cmdlet New-MgInvitation para cada usuário externo.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 97,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nA (80%) B (20%)'
    }, {
        'question': '84\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual chamada VNet1. A VNet1 está num grupo de recursos denominado RG1.\nUm usuário chamado User1 tem as seguintes funções para Subscription1:\n• Leitor\n• Administrador de segurança\n• Leitor de segurança\nVocê precisa garantir que o Usuário1 possa atribuir a função de Leitor da VNet1 a outros usuários.\nO que você deveria fazer?\n',
        'number': '',
        'page': 98,
        'answers': [{
            'text': 'A. Atribua ao Usuário1 a função de Colaborador para VNet1.\n',
            'correct': false
        }, {
            'text': 'B. Atribua ao Usuário1 a função de Contribuidor de Rede para VNet1.\n',
            'correct': false
        }, {
            'text': 'C. Atribua ao Usuário1 a função de Administrador de Acesso do Usuário para VNet1.\n',
            'correct': true
        }, {
            'text': 'D. Remova o Usuário1 das funções Leitor de Segurança e Leitor da Assinatura1. Atribua ao Usuário1 a função de Colaborador para Assinatura1.',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)\nTópico 2'
    }, {
        'question': '85\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual chamada VNet1. A VNet1 está num grupo de recursos denominado RG1.\nO usuário denominado User1 tem as seguintes funções para Subscription1:\n• Leitor\n• Administrador de segurança\n• Leitor de segurança\nVocê precisa garantir que o Usuário1 possa atribuir a função de Leitor da VNet1 a outros usuários.\nO que você deveria fazer?\n',
        'number': '',
        'page': 98,
        'answers': [{
            'text': 'A. Remova o Usuário1 das funções Leitor de Segurança e Leitor da Assinatura1. Atribua ao Usuário1 a função de Colaborador para Assinatura1.\n',
            'correct': false
        }, {
            'text': 'B. Remova o Usuário1 da função Leitor de Segurança para Assinatura1. Atribua ao Usuário1 a função de Colaborador para RG1.\n',
            'correct': false
        }, {
            'text': 'C. Atribua ao Usuário1 a função de Contribuidor de Rede para VNet1.\n',
            'correct': false
        }, {
            'text': 'D. Atribua ao Usuário1 a função de Administrador de Acesso do Usuário para VNet1.',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)'
    },

    {
        'question': `Questão 86  Tópico 2
            Você tem uma conta do Azure Storage chamada storage1 que usa o Azure Blob storage e o Azure File storage.

            Você precisa usar o AzCopy para copiar dados para o blob storage e o file storage no storage1.

            Qual método de autenticação você deve usar para cada tipo de armazenamento? Para responder, selecione as opções apropriadas na área de resposta.

            OBSERVAÇÃO: Cada seleção correta vale um ponto.
        `,
        'number': 1,
        'page': 540,
        'studyCase': false,


        'answers': [{
            'text': `Armazenamento de blobs/Blob storage:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente Azure AD",
                    'correct': false
                }, {
                    'text': "Somente assinaturas de acesso compartilhado (SAS)",
                    'correct': false
                },
                {
                    'text': "Azure AD e assinaturas de acesso compartilhado (SAS)",
                    'correct': true
                },
            ]
        },


        {
            'text': 'Armazenamento de arquivo/File Storage:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente Azure AD",
                    'correct': false
                }, {
                    'text': "Somente assinaturas de acesso compartilhado (SAS)",
                    'correct': true
                },
                {
                    'text': "Azure AD e assinaturas de acesso compartilhado (SAS)",
                    'correct': false
                },
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Muita divergência nos comentários de forma que é confuso escolher. Portanto escolhido a que a fonte forneceu
           
        `
    },

    {
        'question': `Questão 87 Tópico 2
            Você tem um locatário do Azure AD que contém um usuário chamado Usuário Externo.

            O usuário externo se autentica no locatário usando external195@gmail.com .

            Você precisa garantir que o Usuário Externo seja autenticado no locatário usando Contract@gmail.com .

            Quais são as duas configurações que você deve definir na folha Visão geral? Para responder, selecione as configurações apropriadas na área de resposta.

            <img src="imagens/kquestao87topico2.png" alt="imagem da questão"></img>

            NOTA: Cada resposta correta vale um ponto.
        `,
        'number': '87',
        'page': 3,
        'answers': [{
            'text': 'OK. Clique em ver resposta',
            'correct': false
        }
        ],
        'explication': 'Editar prop e B2B são as respostas'
    },





    {
        'question': `Questão 88 Tópico 2
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/kquestao88topico2.png" alt="imagem da questão"></img>
            \nVocê precisa atribuir ao Workspace1 uma função para permitir operações de leitura, gravação e exclusão para os dados armazenados
             nos contêineres do storage1.
             \nQual função você deve atribuir?\n`,
        'number': '',
        'page': 101,
        'answers': [{
            'text': 'A. Contribuidor da conta de armazenamento\n',
            'correct': false
        }, {
            'text': 'B. Contribuidor\n',
            'correct': false
        }, {
            'text': 'C. Contribuidor de dados do Storage Blob\n',
            'correct': true
        }, {
            'text': 'D. Leitor e acesso a dados',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (67%) A (33%)\nTópico 2'
    }, {
        'question': '89\nVocê tem uma assinatura do Azure chamada Subscription1 que contém uma rede virtual chamada VNet1. A VNet1 está num grupo de recursos denominado RG1.\nUm usuário chamado User1 tem as seguintes funções para Subscription1:\n• Leitor\n• Administrador de segurança\n• Leitor de segurança\nVocê precisa garantir que o Usuário1 possa atribuir a função de Leitor da VNet1 a outros usuários.\nO que você deveria fazer?\n',
        'number': '',
        'page': 101,
        'answers': [{
            'text': 'A. Remova o Usuário1 das funções Leitor de Segurança e Leitor da Assinatura1. Atribua ao Usuário1 a função de Colaborador para Assinatura1.\n',
            'correct': false
        }, {
            'text': 'B. Atribua ao Usuário1 a função de Colaborador para VNet1.\n',
            'correct': false
        }, {
            'text': 'C. Atribua ao Usuário1 a função de Proprietário para VNet1.\n',
            'correct': true
        }, {
            'text': 'D. Atribua ao Usuário1 a função de Contribuidor de Rede para RG1.',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': `90\n Tópico 2.
            Você tem um locatário do Azure AD que contém os grupos mostrados na tabela a seguir.
            <img src="imagesquestions/X90QTOPIC2.PNG" alt="imagem da questão"></img>
            \nVocê compra licenças Azure Active Directory Premium P2.
            \nA quais grupos você pode atribuir uma licença?\n`,
        'number': '',
        'page': 102,
        'answers': [{
            'text': 'A. Apenas Grupo 1\n',
            'correct': false
        }, {
            'text': 'B. Somente Grupo1 e Grupo3\n',
            'correct': true
        }, {
            'text': 'C. Somente Grupo3 e Grupo4\n',
            'correct': false
        }, {
            'text': 'D. Somente Grupo1, Grupo2 e Grupo3\n',
            'correct': false
        }, {
            'text': 'E. Grupo1, Grupo2, Grupo3 e Grupo4',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (49%) D (47%) 3%'
    },

    {
        'question': `Questão 91 Tópico 2
            
            Você tem um locatário do Azure AD.

            Você precisa criar um grupo do Microsoft 365 que contenha apenas membros de um departamento de marketing na França.

            Como você deve preencher a regra de associação dinâmica? Para responder, selecione as opções apropriadas na área de resposta.

            NOTA: Cada resposta correta vale um ponto.
        `,
        'number': 1,
        'page': 540,
        'studyCase': false,

        'answers': [{
            'text': `(`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "device.managementType",
                    'correct': false
                }, {
                    'text': "device.organizationalUnit",
                    'correct': false
                }, {
                    'text': "user.department",
                    'correct': true
                },
                {
                    'text': "user.usageLocation",
                    'correct': false
                },
            ]
        },


        {
            'text': '-eq "Marketing")',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "and",
                    'correct': true
                }, {
                    'text': "or",
                    'correct': false
                }, {
                    'text': "typeof",
                    'correct': false
                },

            ]
        },
        {
            'text': '(user.country ',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "-and",
                    'correct': false
                }, {
                    'text': "-eq",
                    'correct': true
                }, {
                    'text': "-in",
                    'correct': false
                },
                {
                    'text': "-match",
                    'correct': false
                },

            ]
        },
        {
            'text': '"France")',
            'options': [
                {
                    text: '',
                    correct: true
                },

            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
        `
        , 'filters': ['K002']
    },

    {
        'question': `Questão 92 Tópico 2
            Você tem um locatário do Azure AD.

            Você precisa modificar as configurações de permissões de função de usuário padrão para o locatário. A solução deve atender aos seguintes requisitos:

            • Usuários padrão devem ser impedidos de criar novas entidades de serviço.
            • Usuários padrão devem ser capazes de usar somente o PowerShell ou o Microsoft Graph para gerenciar seus próprios recursos do Azure.

            Quais duas configurações você deve modificar? Para responder, selecione as configurações apropriadas na área de resposta.

            <img src="imagens/kquestao92topico2.png" alt="imagem da questão"></img>

            OBSERVAÇÃO: Cada resposta correta vale um ponto.
        `,
        'number': '',
        'page': 3,
        'answers': [{
            'text': 'Clique em ver resposta',
            'correct': true
        }
        ],
        'explication': '<img src="imagens/kquestao92topico2resposta.png" alt="imagem da questão"></img>'
    },

    {
        'question': `Questão 93  Tópico 2
            Você tem uma assinatura do Azure chamada Sub1 que contém os contêineres de blob mostrados na tabela a seguir.

            <img src="imagens/kquestao93topico2parte1.png" alt="imagem da questão"></img>

            Sub1 contém dois usuários chamados User1 e User2. Ambos os usuários recebem a função Reader no escopo Sub1.

            Você tem uma condição chamada Condition1, conforme mostrado na exposição a seguir.

            <img src="imagens/kquestao93topico2parte2.png" alt="imagem da questão"></img>

            Você tem uma condição chamada Condition2, conforme mostrado na exposição a seguir.

            <img src="imagens/kquestao93topico2parte3.png" alt="imagem da questão"></img>

            Você atribui funções a User1 e User2, conforme mostrado na tabela a seguir.

            <img src="imagens/kquestao93topico2parte4.png" alt="imagem da questão"></img>


            Para cada uma das seguintes declarações, selecione Yes se a declaração for verdadeira. Caso contrário, selecione No.
            
            OBSERVAÇÃO: cada seleção correta vale um ponto.
	`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'User1 pode ler blob2',
            'correct': false
        }, {
            'text': 'User1 pode ler blob3',
            'correct': false
        }, {
            'text': 'User1 pode ler blob1',
            'correct': true
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': ` Comentário mais votado:
                A resposta é NNY As condições são difíceis de ler, mas significam (de acordo com a referência 1): a. Se o usuário executar uma operação de leitura, ele poderá ler somente de “cont1” b. Se o usuário executar uma operação de escrita, ele poderá escrever somente em blobs como “*2*” Dado que, então: 1- O usuário 1 pode ler Blob2 - Não, porque ele está lendo, então a condição a. se aplica, e ele não está lendo cont1 2- O usuário 1 pode ler Blob3 - Não, porque ele está lendo, então a condição a. se aplica, e ele não está lendo cont1 3- O usuário 2 pode ler o blob 1 - Sim. Ele não está escrevendo, então a condição b. não se aplica. Ele tem permissões concedidas pela função no escopo que está lendo - Proprietário de dados do blob de armazenamento no storage1, que contém o blob1 
                Referências: 1. https://learn.microsoft.com/en-us/azure/role-based-access-control/conditions-format 
                2. https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles
	    `
    },



    {
        'question': '94\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um locatário do Azure Active Directory (Azure AD) chamado contoso.com.\nVocê tem um arquivo CSV que contém os nomes e endereços de e-mail de 500 usuários externos.\nVocê precisa criar uma conta de usuário convidado em contoso.com para cada um dos 500 usuários externos.\nSolução: você cria um script do PowerShell que executa o cmdlet New-MgUser para cada usuário.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 107,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
        ,
        'filters':[
            'K001'
        ]
    },

    {
        'question': `Questão 95  Tópico 2 
            Você compra uma nova assinatura do Azure.

            Você cria um modelo do Azure Resource Manager (ARM) chamado deploy.json, conforme mostrado na exposição a seguir.
            
            <img src="imagens/kquestao95topico2.png" alt="imagem da questão"></img>

            Você se conecta à assinatura e executa o seguinte comando.

            New-AzDeployment –Location westus –TemplateFile “deploy.json”

            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

            OBSERVAÇÃO: Cada seleção correta vale um ponto.
	`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Três grupos de recursos são criados quando você executa o script.',
            'correct': false
        }, {
            'text': 'Um grupo de recursos denominado RGroup5 é criado.',
            'correct': false
        }, {
            'text': 'Todos os grupos de recursos são criados na região Leste do Azure dos EUA.',
            'correct': true
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Comentário mais votado:
            NNY - Eu executo o template ARM em um ambiente de laboratório. Antes de ir para a explicação, é válido dizer que há alguns erros no formato do script e eu tenho que consertá-lo para executar com sucesso.
             1- É N, porque ele cria 4 Resource Groups e não 3 Resource Groups (RGS0, RGS1, RGroup4 e ResGrp8); 
                1.1: O Resource Group nomeado com "[concat('RGS', copyIndex())]", cria RGS0 e RGS1; 
                1.2: O Resource Group nomeado com "[concat('ResGrp', '8')]", cria ResGrp8; 
                1.3: O Resource Group nomeado com "[concat('RGroup', length(parameters('obj1')))]", cria RGroup4 (Como podemos ver, o parâmetro obj1 tem um comprimento de 4 'propA', 'propB', 'propC' e 'propD'); 
             2 - É N, porque não cria um grupo de recursos chamado RGroup5;
             3 - É Y, porque todos os grupos de recursos foram criados na região do Azure do Leste dos EUA.
	`
    },

    {
        'question': `Questão 96 Tópico 2
            \nSua rede local contém um gateway VPN.
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/kquestao96topico2.png" alt="imagem da questão"></img>
            \nVocê precisa garantir que todo o tráfego da VM1 para o armazenamento1 viaje pela rede backbone da Microsoft.
            \nO que você deve configurar?\n`,
        'number': '96',
        'page': 3,
        'answers': [{
            'text': 'A. Proxy de aplicativo do Azure AD\n',
            'correct': false
        }, {
            'text': 'B. endpoints privados\n',
            'correct': true
        }, {
            'text': 'C. um grupo de segurança de rede (NSG)\n',
            'correct': false
        }, {
            'text': 'D. Serviço de peering do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `Questão 97 Tópico 2
            \nSua rede local contém um gateway VPN.
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/kquestao96topico2.png" alt="imagem da questão"></img>
            \nVocê precisa garantir que todo o tráfego da VM1 para o armazenamento1 viaje pela rede backbone da Microsoft.
            \nO que você deve configurar?\n`,
        'number': '',
        'page': 110,
        'answers': [{
            'text': 'A. Proxy de aplicativo do Azure AD\n',
            'correct': false
        }, {
            'text': 'B. terminais de serviço\n',
            'correct': true
        }, {
            'text': 'C. um grupo de segurança de rede (NSG)',
            'correct': false
        },
        {
            'text': 'D.Firewall do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)\nTópico 2'
    }, {
        'question': `Questão 98 Tópico 2
            \nSua rede local contém um gateway VPN.
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/kquestao96topico2.png" alt="imagem da questão"></img>
            \nVocê precisa garantir que todo o tráfego da VM1 para o armazenamento1 viaje pela rede backbone da Microsoft.
            \nO que você deve configurar?\n`,
        'number': '',
        'page': 110,
        'answers': [{
            'text': 'A. Gateway de Aplicativo do Azure\n',
            'correct': false
        }, {
            'text': 'B. terminais de serviço\n',
            'correct': true
        }, {
            'text': 'C. um grupo de segurança de rede (NSG)\n',
            'correct': false
        }, {
            'text': 'D. Serviço de peering do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `Questão 99 Tópico 2\n
            Você tem uma assinatura do Azure chamada Sub1 que contém os recursos mostrados na tabela a seguir.
           <img src="imagens/kquestao99topico2.png" alt="imagem da questão"></img>
            \nVocê cria um usuário chamado Admin1.
            \nA que você pode adicionar Admin1 como um coadministrador?\n`,
        'number': '',
        'page': 111,
        'answers': [{
            'text': 'A. RG1\n',
            'correct': false
        }, {
            'text': 'B. MG1\n',
            'correct': false
        }, {
            'text': 'C. Sub1\n',
            'correct': true
        }, {
            'text': 'D. VM1',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    },

    {
        'question': `Questão 100 Tópico 2
            Você tem um locatário do Microsoft Entra que contém os grupos mostrados na tabela a seguir.

            <img src="imagens/kquestao100topico2parte1.png" alt="imagem da questão"></img>

            O locatário contém os usuários mostrados na tabela a seguir.
            
            <img src="imagens/kquestao100topico2parte2.png" alt="imagem da questão"></img>
            
            Quais usuários e grupos você pode excluir? Para responder, selecione as opções apropriadas na área de resposta.
                
        `,
        'number': 1,
        'page': 540,
        'studyCase': false,

        'answers': [
            {
                'text': `Users:`,

                'options': [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        'text': "Somente User4",
                        'correct': false
                    }, {
                        'text': " User1 e User4 somente",
                        'correct': false
                    }, {
                        'text': " User2 e User4 somente",
                        'correct': false
                    },
                    {
                        'text': "User1, User2, User3 e User4",
                        'correct': true
                    },

                ]
            },
            {
                'text': `Groups:`,

                'options': [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        'text': "Somente Group2",
                        'correct': false
                    }, {
                        'text': "Somente Grupo2 e Grupo3",
                        'correct': false
                    }, {
                        'text': "Somente Grupo2 e Grupo4",
                        'correct': true
                    },
                    {
                        'text': "Grupo1, Grupo2, Grupo3 e Grupo4",
                        'correct': false
                    },

                ]
            },
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentário mais votado:
            As respostas testadas e verificadas são Usuários = Usuário1, Usuário2, Usuário3, Usuário4 (pode excluir todos os usuários, independentemente de uma licença ser atribuída diretamente ou por herança de uma associação de grupo) Grupos = Grupo 2 e Grupo 4 (Grupos com atribuições de licença ativas não podem ser excluídos. Você obtém um erro)
        `
        , 'filters': ['K002']

    },

    {
        'question': `Questão 101 Tópic 2.
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/kquestao101topico2.png" alt="imagem da questão"></img>
            \nVocê precisa garantir que as transferências de dados entre o armazenamento1 e a VM1 NÃO atravessem a Internet
            \nO que você deve configurar para armazenamento1?\n`,
        'number': '',
        'page': 113,
        'answers': [{
            'text': 'A. proteção de dados\n',
            'correct': false
        }, {
            'text': 'B. um endpoint privado\n',
            'correct': true
        }, {
            'text': 'C. Acesso à rede pública nas configurações de Firewalls e redes virtuais\n',
            'correct': false
        }, {
            'text': 'D. uma assinatura de acesso compartilhado (SAS)',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    },


    {
        'question': `1 Tópico 3 \nVocê tem uma assinatura do Azure chamada Subscription1 que contém as
         contas de armazenamento mostradas na tabela a seguir:
        <img src="imagens/yquestao1topico3.png" alt="imagem da questão"></img>
         \nVocê planeja usar o serviço Azure Import/Export para exportar dados da Assinatura1.
        \nVocê precisa identificar qual conta de armazenamento pode ser usada para exportar os dados.
        \nO que você deve identificar?\n`,
        'number': '',
        'page': 114,
        'answers': [{
            'text': 'A. armazenamento1\n',
            'correct': false
        }, {
            'text': 'B. armazenamento2\n',
            'correct': false
        }, {
            'text': 'C. armazenamento3\n',
            'correct': false
        }, {
            'text': 'D. armazenamento4',
            'correct': true
        }
        ],
        'explication': 'D\nO serviço Azure Import/Export suporta o seguinte de contas de armazenamento:\n✑ Contas de armazenamento padrão de uso geral v2 (recomendadas para a maioria dos cenários)\n✑ Contas de armazenamento de Blobs\n✑ Contas de armazenamento de uso geral v1 (implantações clássicas ou do Azure Resource Manager),\nO serviço Azure Import/Export suporta os seguintes tipos de armazenamento:\n✑ A importação oferece suporte ao armazenamento de Blobs do Azure e ao armazenamento de arquivos do Azure\n✑ A exportação oferece suporte ao armazenamento de Blobs do Azure\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-requirements\nDistribuição de votos da comunidade\nD (100%)'
    },

    {
        'question': `Questão 2 Tópico 3
            Você tem contas do Azure Storage, conforme mostrado na exposição a seguir.
            <img src="imagens/lquestao2topico3.jpg" alt="imagem da questão"></img>
            
            Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.
            OBSERVAÇÃO: Cada seleção correta vale um ponto. 
        `,
        'number': 1,
        'page': 540,
        'studyCase': false,

        'answers': [{
            'text': `Você pode usar [opção de resposta] para o Armazenamento de Tabelas do Azure.`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "somente storageaccount1",
                    'correct': false
                }, {
                    'text': "somente storageaccount2",
                    'correct': false
                }, {
                    'text': "somente storageaccount3",
                    'correct': false
                },
                {
                    'text': "apenas storageaccount1 e storageaccount2",
                    'correct': true
                },
                {
                    'text': "somente storageaccount2 e storageaccount3",
                    'correct': false
                }
            ]
        },


        {
            'text': 'Você pode usar [opção de resposta] para armazenamento de Blobs do Azure.',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Apenas storageaccount3",
                    'correct': false
                },
                {
                    'text': "somente storageaccount2 e storageaccount3",
                    'correct': false
                },
                {
                    'text': "apenas storageaccount1 e storageaccount3",
                    'correct': false
                }, {
                    'text': "todas as contas de armazenamento",
                    'correct': true
                },

            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            Caixa 1: storageaccount1 e storageaccount2 somente

            Caixa 2: Todas as contas de armazenamento -
            Observação: as três opções diferentes de conta de armazenamento são: contas de uso geral v2 (GPv2), contas de uso geral v1 (GPv1) e contas de armazenamento de blobs.
            ✑ As contas de uso geral v2 (GPv2) são contas de armazenamento que oferecem suporte a todos os recursos mais recentes para blobs, arquivos, filas e tabelas.
            ✑ As contas de armazenamento de blobs oferecem suporte a todos os mesmos recursos de blobs de bloco que o GPv2, mas são limitadas a oferecer suporte apenas a blobs de bloco.
            ✑ As contas de uso geral v1 (GPv1) fornecem acesso a todos os serviços de armazenamento do Azure, mas podem não ter os recursos mais recentes ou o menor preço por gigabyte.
            Referência:
            https://docs.microsoft.com/en-us/azure/storage/common/storage-account-options
        `
    },


    {
        'question': `Questão 3 Tópico 3
                \nVocê tem uma assinatura do Azure que inclui dados nos seguintes locais:
                 <img src="imagens/lquestao3topico3.png" alt="imagem da questão"></img> 
                \nVocê planeja exportar dados usando o trabalho de importação/exportação do Azure chamado Export1.
                \nVocê precisa identificar os dados que podem ser exportados usando Export1.
                \nQuais dados você deve identificar?\n`,
        'number': '',
        'page': 116,
        'answers': [{
            'text': 'A. DB1\n',
            'correct': false
        }, {
            'text': 'B. contêiner1\n',
            'correct': true
        }, {
            'text': 'C. compartilhar1\n',
            'correct': false
        }, {
            'text': 'D. Tabela1',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    },

    {
        'question': `Questão 4 Tópico 3
            Você tem uma conta do Azure Storage chamada storage1.
            Você tem um aplicativo do Azure App Service chamado App1 e um aplicativo chamado App2 que é executado em uma instância de contêiner do Azure. Cada aplicativo usa uma identidade gerenciada.
            Você precisa garantir que o App1 e o App2 possam ler blobs do storage1. A solução deve atender aos seguintes requisitos:
            ✑ Minimize o número de segredos usados.
            ✑ Garanta que o App2 só possa ler do storage1 pelos próximos 30 dias.
            O que você deve configurar no storage1 para cada aplicativo? Para responder, selecione as opções apropriadas na área de resposta.
            OBSERVAÇÃO: Cada seleção correta vale um ponto. 
        `,
        'number': 1,
        'page': 540,
        'studyCase': false,

        'answers': [{
            'text': `App1:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Chaves de acesso",
                    'correct': false
                }, {
                    'text': "Segurança avançada",
                    'correct': false
                }, {
                    'text': "Controle de acesso (IAM)",
                    'correct': true
                },
                {
                    'text': "Assinaturas de acesso compartilhado (SAS)",
                    'correct': false
                },
            ]
        },


        {
            'text': '',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Chaves de acesso",
                    'correct': false
                }, {
                    'text': "Segurança avançada",
                    'correct': false
                }, {
                    'text': "Controle de acesso (IAM)",
                    'correct': false
                },
                {
                    'text': "Assinaturas de acesso compartilhado (SAS)",
                    'correct': true
                },
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentário mais votado:
            Resposta correta:
            Caixa 1: Controle de acesso (IAM) Como o App1 usa Identidade gerenciada, o App1 pode acessar a conta de armazenamento via IAM. Conforme o requisito, precisamos minimizar o número de segredos usados, então as chaves de acesso não são ideais.
            Caixa 2: Assinaturas de acesso compartilhado (SAS) 
            Precisamos de acesso temporário para o App2, então precisamos usar SAS. Referência: https://docs.microsoft.com/en-us/azure/storage/common/storage-auth
        `
    },

    {
        'question': `Questão 5 Tópico 3
            Você precisa criar uma conta do Azure Storage que atenda aos seguintes requisitos:
            ✑ Minimize custos
            ✑ Suporte a camadas de blob hot, cool e archive
            ✑ Forneça tolerância a falhas se um desastre afetar a região do Azure onde a conta reside
            Como você deve concluir o comando? Para responder, selecione as opções apropriadas na área de resposta.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
        `,
        'number': 1,
        'page': 540,
        'studyCase': false,

        'answers': [{
            'text': `az storage account create -g RG1 -n storageaccount1
                --kind`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "File Storage",
                    'correct': false
                }, {
                    'text': "Storage",
                    'correct': false
                }, {
                    'text': "StorageV2",
                    'correct': true
                },
            ]
        },


        {
            'text': '-sku',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },

                {
                    'text': "Standard_GRS",
                    'correct': true
                }, {
                    'text': "Standard LRS",
                    'correct': false
                }, {
                    'text': "Standard_RAGRS",
                    'correct': false
                },
                {
                    'text': "Premium LRS",
                    'correct': false
                },


            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            Caixa 1: StorageV2 -
                Você só pode hierarquizar seus dados de armazenamento de objetos para quente, frio ou arquivado em contas de armazenamento de Blob e General Purpose v2 (GPv2). As contas General Purpose v1 (GPv1) não oferecem suporte a hierarquização. As
                contas de uso geral v2 oferecem os menores preços de capacidade por gigabyte para o Azure Storage, bem como preços de transação competitivos no setor.

                Caixa 2: Standard_GRS -
                Armazenamento georredundante (GRS): replicação entre regiões para proteger contra indisponibilidade em toda a região.
                Respostas incorretas:
                Armazenamento localmente redundante (LRS): uma estratégia de replicação simples e de baixo custo. Os dados são replicados em uma única unidade de escala de armazenamento.
                Armazenamento georredundante de acesso de leitura (RA-GRS): replicação entre regiões com acesso de leitura à réplica. O RA-GRS fornece acesso somente leitura aos dados no local secundário, além da georreplicação em duas regiões, mas é mais caro em comparação ao GRS.
                Referência:
                https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy-grs https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers
            `
    },

    {
        'question': `Questão 6 Tópico 3
            \nVocê tem uma assinatura do Azure que contém os recursos da tabela a seguir.
              <img src="imagens/lquestao6topico3.png" alt="imagem da questão"></img> \nStore1 contém um compartilhamento de arquivo chamado data. Os dados contêm 5.000 arquivos.\nVocê precisa sincronizar os arquivos no compartilhamento de arquivos denominado data com um servidor local denominado Servidor1.\nQuais são as três ações que você deve realizar? Cada resposta correta apresenta parte da solução.
            \nNOTA: Cada seleção correta vale um ponto.\n`,
        'number': '',
        'page': 119,
        'answers': [{
            'text': 'A. Crie uma instância de contêiner\n',
            'correct': false
        }, {
            'text': 'B. Registrar Servidor1\n',
            'correct': true
        }, {
            'text': 'C. Instale o agente Azure File Sync no Server1\n',
            'correct': true
        }, {
            'text': 'D. Baixe um script de automação\n',
            'correct': false
        }, {
            'text': 'E. Crie um grupo de sincronização',
            'correct': true
        }
        ],
        'explication': `
            Resposta correta: BCE 🗳️
                Etapa 1 (C): Instale o agente do Azure File Sync no Server1
                O agente do Azure File Sync é um pacote para download que permite que o Windows Server seja sincronizado com um compartilhamento de arquivos do Azure
                Etapa 2 (B): Registre o Server1.
                Registre o Windows Server com o Storage Sync Service
                O registro do Windows Server com um Storage Sync Service estabelece uma relação de confiança entre seu servidor (ou cluster) e o Storage Sync Service.
                Etapa 3 (E): Crie um grupo de sincronização e um ponto de extremidade de nuvem.
                Um grupo de sincronização define a topologia de sincronização para um conjunto de arquivos. Os pontos de extremidade dentro de um grupo de sincronização são mantidos sincronizados entre si. Um grupo de sincronização deve conter um ponto de extremidade de nuvem, que representa um compartilhamento de arquivos do Azure e um ou mais pontos de extremidade de servidor. Um ponto de extremidade de servidor representa um caminho no servidor registrado.
                Referência:
                https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide
        `
    },

    {
        'question': `Questão 7 Tópico 3
            Você tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/mquestao7topico3.png" alt="imagem da questão"></img>

            O status da VM1 é Em execução.
            Você atribui uma política do Azure conforme mostrado na exposição. (Clique na guia Exposição.)
            
            <img src="imagens/mquestao7topico3parte2.jpg" alt="imagem da questão"></img>

            Você atribui a política usando os seguintes parâmetros:
            Microsoft.ClassicNetwork/virtualNetworks
            Microsoft.Network/virtualNetworks
            Microsoft.Compute/virtualMachines
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
	`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Um administrador pode mover VNET1 para RG2',
            'correct': false
        }, {
            'text': 'O estado da VM1 mudou para desalocado',
            'correct': false
        }, {
            'text': 'Um administrador pode modificar o espaço de endereço do VNET2',
            'correct': false
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `O comentário mais votado deu que a primeira alternativa seria sim, mas o comentário é de 3 anos atrás 
        e existem vários comentários mais novos (MUITOS) relatando que na verdade a primeira é falsa. 
	`
    },

    {
        'question': `Questão 8 Tópico 3
            ARRASTAR E SOLTAR -
            Você tem uma assinatura do Azure que contém uma conta de armazenamento.
            Você tem um servidor local chamado Server1 que executa o Windows Server 2016. O Server1 tem 2 TB de dados.
            Você precisa transferir os dados para a conta de armazenamento usando o serviço de Importação/Exportação do Azure.
            Em que ordem você deve executar as ações? Para responder, mova todas as ações da lista de ações para a área de resposta e organize-as na ordem correta.
            OBSERVAÇÃO: Mais de uma ordem de opções de resposta está correta. Você receberá crédito por qualquer uma das ordens corretas que selecionar.
            Selecionar e colocar:

            `,
        'number': '8',
        'page': 3,
        'studyCase': false,

        'answers': [
            [
                {
                    'text': ' \n',
                    'options': [
                        { 'text': 'No portal do Azure, atualize o trabalho de importação', 'correct': true, 'index': '4' },
                        { 'text': 'No portal do Azure, crie um trabalho de importação', 'correct': true, 'index': '2' },
                        { 'text': 'Anexe um disco externo ao Server1 e execute waimportexport.exe', 'correct': true, 'index': '1' },
                        { 'text': 'Desconecte os discos externos do Server1 e envie-os para um data center do Azure', 'correct': true, 'index': '3' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer area \n',
                    'options': [

                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': ` Comentário mais votado concorda com a fonte:
            Resposta correta: 
            Etapa 1: preparar as unidades (anexar um disco externo ao Server1 e executar waimportexport.exe) 
            Etapa 2: criar um trabalho de importação (no portal do Azure, criar um trabalho de importação)
            Etapa 3: enviar as unidades para o datacenter do Azure (desanexar os discos externos do Server1 e enviar os discos para um datacenter do Azure) 
            Etapa 4: atualizar o trabalho com informações de rastreamento (no portal do Azure, atualizar o trabalho de importação) 
            Referência: https://docs.microsoft.com/en-us/azure/import-export/storage-import-export-data-to-files?tabs=azure-portal https://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-service
        `,
        'typeQuestion': 'dragdrop'
    },

    {
        'question': `Questão 9 Tópico 3
            Você tem uma assinatura do Azure que inclui os seguintes compartilhamentos de arquivos do Azure:

            <img src="imagens/mquestao9topico3parte1.png" alt="imagem da questão"></img>

            Você tem os seguintes servidores locais:

            <img src="imagens/mquestao9topico3parte2.png" alt="imagem da questão"></img>

            Você cria um Serviço de Sincronização de Armazenamento chamado Sync1 e um grupo de Sincronização de Arquivos do Azure chamado Group1. O Group1 usa o share1 como um ponto de extremidade da nuvem.
            Você registra o Server1 e o Server2 no Sync1. Você adiciona D:\Folder1 no Server1 como um ponto de extremidade do servidor do Group1.
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
	`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'share2 pode ser adicionado como um endpoint de nuvem para o Grupo 1',
            'correct': false
        }, {
            'text': 'E:\Folder2 no Server1 pode ser adicionado como um endpoint do servidor para o Grupo1',
            'correct': false
        }, {
            'text': 'D:\Data no Server2 pode ser adicionado como um endpoint do servidor para o Grupo 1',
            'correct': true
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `
            Comentário mais votado:
            Resposta correta: Caixa 1: Não Um grupo de sincronização contém um ponto de extremidade de nuvem ou compartilhamento de arquivo do Azure e 
            pelo menos um ponto de extremidade de servidor. 
            Caixa 2: Não O Azure File Sync não oferece suporte a mais de um ponto de extremidade de servidor do mesmo servidor no mesmo Grupo de Sincronização. 
            Caixa 3: Sim Vários pontos de extremidade de servidor podem existir no mesmo volume se seus namespaces não estiverem sobrepostos (por exemplo, F:\sync1 e F:\sync2) e 
            cada ponto de extremidade estiver sincronizando com um grupo de sincronização exclusivo. Referência: https://docs.microsoft.com/en-us/answers/questions/110822/azure-file-sync-multiple-sync-directories-for-same.html https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide
	`
    },
    {
        'question': `Questãon 10 Tópico 3
        ARRASTAR E SOLTAR -
        Você tem uma assinatura do Azure chamada Subscription1.
        Você cria uma conta do Azure Storage chamada contosostorage e, em seguida, cria um compartilhamento de arquivos chamado data.
        Qual caminho UNC você deve incluir em um script que faz referência a arquivos do compartilhamento de arquivos data? Para responder, arraste os valores apropriados para os destinos corretos. Cada valor pode ser usado uma vez, mais de uma vez ou nunca. Pode ser necessário arrastar a barra de divisão entre os painéis ou rolar para visualizar o conteúdo.
        OBSERVAÇÃO: Cada seleção correta vale um ponto.

`,
        'number': '31',
        'page': 11,
        'answers': [

            [
                {
                    'text': '',
                    'options': [
                        { 'text': 'blob', 'correct': false, 'index': '-1' },
                        { 'text': 'contosostorage', 'correct': true, 'index': '1' },
                        { 'text': 'file', 'correct': false, 'index': '-1' },
                        { 'text': 'portal.azure.com', 'correct': false, 'index': '-1' },
                        { 'text': 'blob.core.windows.net', 'correct': false, 'index': '-1' },
                        { 'text': 'data', 'correct': true, 'index': '3' },
                        { 'text': 'file.core.windows.net', 'correct': true, 'index': '2' },
                        { 'text': 'subscription1', 'correct': false, 'index': '-1' },

                    ],
                    'function': 'origin'

                },
                {
                    'text': '',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `Fonte com essa resposta e os comentários concordam.
            Caixa 1: contosostorage -

            O nome da conta -

            Caixa 2: file.core.windows.net -

            Caixa 3: data -
            O nome do compartilhamento de arquivo é data.
            Exemplo:

            Referência:
            https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows
        `,
        'typeQuestion': 'dragdrop'
    },

    {
        'question': `Questão 11 Tópico 3
            Você tem uma assinatura do Azure que contém uma conta do Azure Storage.
            Você planeja copiar uma imagem de máquina virtual local para um contêiner chamado vmimages.
            Você precisa criar o contêiner para a imagem planejada.
            Qual comando você deve executar? Para responder, selecione as opções apropriadas na área de resposta.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `azcopy`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "make",
                    'correct': true
                }, {
                    'text': "sync",
                    'correct': false
                }, {
                    'text': "copy",
                    'correct': false
                },
            ]
        },

        {
            'text': 'https//mystorageaccount.',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "blob",
                    'correct': true
                }, {
                    'text': "dfs",
                    'correct': false
                }, {
                    'text': "queue",
                    'correct': false
                },
                {
                    'text': "table",
                    'correct': false
                },
                {
                    'text': "images",
                    'correct': false
                },
                {
                    'text': "file",
                    'correct': false
                }
            ]
        },

        {
            'text': '.core.windows.net/vmimages',
            'options': [
                {
                    text: '',
                    correct: true
                },
               
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `A origem e o comentário mais votado concordam, explicação dos comentários:
         correta: azcopy make 'https://mystorageaccount.blob.core.windows.net/vmimages' Semelhante às imagens do sistema operacional, uma imagem de VM é uma coleção de metadados e ponteiros para um conjunto de VHDs (um VHD por disco) armazenados como blobs de página no Azure Storage. Referência: https://docs.microsoft.com/en-us/azure/storage/common/storage-ref-azcopy-make
        `
    },

    {
        'question': `Questão 12 Tópico 3
            Você tem um grupo de sincronização de arquivos do Azure que tem os pontos de extremidade mostrados na tabela a seguir.
            <img src="imagens/pquestao12topico3.png" alt="imagem da questão"></img>
            A hierarquização da nuvem está habilitada para o Endpoint3.
            Você adiciona um arquivo chamado File1 ao Endpoint1 e um arquivo chamado File2 ao Endpoint2.
            Em quais pontos de extremidade File1 e File2 estarão disponíveis dentro de 24 horas após a adição dos arquivos? Para responder, selecione as opções apropriadas na área de resposta.
        `,
        'number': 1,
        'page': 540,
        'studyCase': false,

        'answers': [
            {
                'text': `File1:`,
                'options': [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        'text': "Endpoint1 somente",
                        'correct': true
                    }, {
                        'text': "Endpoint3 somente",
                        'correct': false
                    }, {
                        'text': "Endpoint2 e Endpoint3 somente",
                        'correct': false
                    },
                    {
                        'text': "Endpoint1, Endpoint2 e Endpoint3",
                        'correct': false
                    },

                ]
            },
            {
                'text': `File2:`,
                'options': [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        'text': "Endpoint1 somente",
                        'correct': false
                    }, {
                        'text': "Endpoint3 somente",
                        'correct': false
                    }, {
                        'text': "Endpoint2 e Endpoint3 somente",
                        'correct': false
                    },
                    {
                        'text': "Endpoint1, Endpoint2 e Endpoint3",
                        'correct': true
                    },

                ]
            },



        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentário mais votado:
            Resposta correta: File1: Endpoint1 apenas É um endpoint de nuvem e é escaneado
            pelo trabalho de detecção a cada 24 horas.
             File2: Endpoint1, Endpoint2 e Endpoint3 Com os servidores locais, o arquivo é escaneado e sincronizado automaticamente após ser adicionado. Observação: eles mudaram a pergunta no Exame de "dentro de 24 horas" para "após 24 horas". Portanto, a resposta é: File1: Endpoint1, Endpoint2 e Endpoint3 File2: Endpoint1, Endpoint2 e Endpoint3 Referência: https://docs.microsoft.com/en-us/learn/modules/extend-share-capacity-with-azure-file-sync/2-what-azure-file-sync
        `
    },

    {
        'question': `Questão 13 Tópico 3
            Você tem várias máquinas virtuais do Azure em uma rede virtual chamada VNet1.
            Você configura uma conta do Azure Storage conforme mostrado na exposição a seguir.
            
            <img src="imagens/pquestao13topico3.jpg" alt="imagem da questão"></img>

            Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.
            OBSERVAÇÃO: Cada seleção correta vale um ponto. 
        `,
        'number': 1,
        'page': 540,
        'studyCase': false,

        'answers': [{
            'text': `As máquinas virtuais na sub-rede 10.2.9.0/24 terão conectividade de rede com os compartilhamentos de arquivos na conta de armazenamento [opção de resposta].`,
            'options':
                [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        'text': "sempre",
                        'correct': false
                    }, {
                        'text': "durante um backup",
                        'correct': false
                    }, {
                        'text': "nunca",
                        'correct': true
                    },

                ]
        },
        {
            'text': `O Backup do Azure poderá fazer backup dos discos rígidos não gerenciados das máquinas virtuais na conta de armazenamento [opção de resposta].`,
            'options':
                [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        'text': "sempre",
                        'correct': false
                    }, {
                        'text': "durante um backup",
                        'correct': false
                    }, {
                        'text': "nunca",
                        'correct': true
                    },

                ]
        },



        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Caixa 1: nunca -
            A sub-rede 10.2.9.0/24 não está na lista de permissões.

            Caixa 2: nunca -
            Depois de configurar o firewall e as configurações de rede virtual para sua conta de armazenamento, selecione Permitir que serviços confiáveis ​​da Microsoft acessem esta conta de armazenamento como uma exceção para habilitar o serviço de Backup do Azure para acessar a conta de armazenamento restrita da rede.
            Referência:

            https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows https://azure.microsoft.com/en-us/blog/azure-backup-now-supports-storage-accounts-secured-with-azure-storage-firewalls-and-virtual-networks/
        `
        , 'filters': ['K002']
    },

    {
        'question': `Questão 14  Tópico 3
            Você tem um grupo de sincronização chamado Sync1 que tem um ponto de extremidade na nuvem. O ponto de extremidade na nuvem inclui um arquivo chamado File1.txt.
            Sua rede local contém servidores que executam o Windows Server 2016. Os servidores são configurados conforme mostrado na tabela a seguir.
            <img src="imagens/pquestao14topico3.png" alt="imagem da questão"></img>

            Você adiciona Share1 como um ponto de extremidade para Sync1. Uma hora depois, você adiciona Share2 como um ponto de extremidade para Sync1.
            Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
	`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'No endpoint da nuvem, o File1.txt é substituído pelo File1.txt do Share1.',
            'correct': false
        }, {
            'text': 'No Servidor1, o Arquivo1.txt é substituído pelo Arquivo1.txt do endpoint da nuvem.',
            'correct': false
        }, {
            'text': 'File1.txt do Share1 é replicado para o Share2.',
            'correct': true
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Comentário mais votado:
            NÃO NÃO SIM
	`
    },


    {
        'question': `Questão 15 Tópico 3 \nVocê tem uma assinatura do Azure
         que contém as contas de armazenamento mostradas na
        tabela a seguir.
        <img src="imagens/yquestao15topico3.png" alt="imagem da questão"></img>

        \nVocê precisa identificar qual conta de armazenamento pode ser convertida em replicação de armazenamento com redundância de zona (ZRS) solicitando uma migração ao vivo de\nSuporte Azure.
        \nO que você deve identificar?\n`,
        'number': '',
        'page': 130,
        'answers': [{
            'text': 'A. armazenamento1\n',
            'correct': false
        }, {
            'text': 'B. armazenamento2\n',
            'correct': true
        }, {
            'text': 'C. armazenamento3\n',
            'correct': false
        }, {
            'text': 'D. armazenamento4',
            'correct': false
        }
        ],
        'explication': 'B\nAtualmente, o ZRS oferece suporte aos tipos de contas de armazenamento v2, FileStorage e BlockBlobStorage de uso geral padrão.\nRespostas incorretas:\nA, não C: a migração ao vivo é suportada apenas para contas de armazenamento que utilizam replicação LRS. Se sua conta usa GRS ou RA-GRS, você precisa\nprimeiro altere o tipo de replicação da sua conta para LRS antes de continuar. Esta etapa intermediária remove o endpoint secundário fornecido por\nGRS/RA-GRS.\nAlém disso, apenas os tipos de conta de armazenamento padrão suportam a migração ao vivo. As contas de armazenamento premium devem ser migradas manualmente.\nD: ZRS atualmente oferece suporte aos tipos de conta de armazenamento v2 de uso geral padrão, FileStorage e BlockBlobStorage.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy-zrs\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': 'Questão 16 Tópico 3 \nVocê tem uma assinatura do Azure que contém uma conta de armazenamento chamada account1.\nVocê planeja fazer upload dos arquivos de disco de uma máquina virtual para a conta1 da sua rede local. A rede local usa um IP público\nespaço de endereço de\n131.107.1.0/24.\nVocê planeja usar os arquivos de disco para provisionar uma máquina virtual do Azure chamada VM1. A VM1 será anexada a uma rede virtual chamada VNet1. Rede virtual1\nusa um espaço de endereço IP de 192.168.0.0/24.\nVocê precisa configurar a conta1 para atender aos seguintes requisitos:\n✑ Certifique-se de poder fazer upload dos arquivos de disco para a conta1.\n✑ Certifique-se de poder anexar os discos à VM1.\n✑ Impeça todos os outros acessos à conta1.\nQuais são as duas ações que você deve realizar? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 131,
        'answers': [{
            'text': 'A. Na folha Rede da conta1, selecione Redes selecionadas.\n',
            'correct': true
        }, {
            'text': 'B. Na folha Rede da conta1, selecione Permitir que serviços confiáveis \u200b\u200bda Microsoft acessem esta conta de armazenamento.\n',
            'correct': false
        }, {
            'text': 'C. Na folha Rede da conta1, adicione o intervalo de endereços IP 131.107.1.0/24.\n',
            'correct': true
        }, {
            'text': 'D. Na folha Rede da conta1, adicione VNet1.\n',
            'correct': false
        }, {
            'text': 'E. Na folha Pontos de extremidade de serviço da VNet1, adicione um ponto de extremidade de serviço.',
            'correct': false
        }
        ],
        'explication': "EA\nR: Por padrão, as contas de armazenamento aceitam conexões de clientes em qualquer rede. Para limitar o acesso a redes selecionadas, você deve primeiro alterar\na ação padrão.\nPortal do Azure -\n1. Navegue até a conta de armazenamento que deseja proteger.\n2. Clique no menu de configurações denominado Firewalls e redes virtuais.\n3. Para negar o acesso por padrão, opte por permitir o acesso de ‘Redes selecionadas’. Para permitir o tráfego de todas as redes, opte por permitir o acesso de\n'Todas as redes'.\n4. Clique em Salvar para aplicar suas alterações.\nE: Conceder acesso de uma rede virtual\nAs contas de armazenamento podem ser configuradas para permitir acesso apenas de redes virtuais do Azure específicas.\nAo ativar um ponto final de serviço para o armazenamento do Azure na rede virtual, o tráfego é garantido como uma rota ideal para o serviço de armazenamento do Azure.\nAs identidades da rede virtual e da sub-rede também são transmitidas com cada solicitação.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-network-security\nDistribuição de votos da comunidade\nAC (61%) CD (26%) 5%"
    },


    {
        'question': `Questão 17 Tópico 3
            ARRASTAR E SOLTAR -
            Você tem um servidor de arquivos local chamado Server1 que executa o Windows Server 2016.
            Você tem uma assinatura do Azure que contém um compartilhamento de arquivos do Azure.
            Você implanta um Azure File Sync Storage Sync Service e cria um grupo de sincronização.
            Você precisa sincronizar arquivos do Server1 para o Azure.
            Quais três ações você deve executar em sequência? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize-as na ordem correta.
            Selecione e coloque:
            
            `,
        'number': '17',
        'page': 4,
        'studyCase': false,

        'answers': [
            [
                {
                    'text': '',
                    'options': [
                        { 'text': 'Instale o agente Azure File Sync no Server1', 'correct': true, 'index': '1' },
                        { 'text': 'Crie um gateway de dados local do Azure', 'correct': false, 'index': '-1' },
                        { 'text': 'Crie um cofre dos Serviços de Recuperação', 'correct': false, 'index': '-1' },
                        { 'text': 'Registrar Servidor1', 'correct': true, 'index': '2' },
                        { 'text': 'Adicionar um endpoint de servidor', 'correct': true, 'index': '3' },
                        { 'text': 'Instale a função de servidor Replicação DFS no Servidor1', 'correct': false, 'index': '-1' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer area \n',
                    'options': [

                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `
            Etapa 1: instalar o agente do Azure File Sync no Server1
            O agente do Azure File Sync é um pacote para download que permite que o Windows Server seja sincronizado com um compartilhamento de arquivos do Azure
            Etapa 2: registrar o Server1.
            Registrar o Windows Server com o Storage Sync Service
            Registrar seu Windows Server com um Storage Sync Service estabelece uma relação de confiança entre seu servidor (ou cluster) e o Storage Sync Service.

            Etapa 3: adicionar um ponto de extremidade do servidor -
            crie um grupo de sincronização e um ponto de extremidade da nuvem.
            Um grupo de sincronização define a topologia de sincronização para um conjunto de arquivos. Os pontos de extremidade dentro de um grupo de sincronização são mantidos sincronizados entre si. Um grupo de sincronização deve conter um ponto de extremidade da nuvem, que representa um compartilhamento de arquivos do Azure e um ou mais pontos de extremidade do servidor. Um ponto de extremidade do servidor representa um caminho no servidor registrado.
            Referência:
            https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide
            
        `,
        'typeQuestion': 'dragdrop'
    },
    {
        'question': `Questão 18 Tópico 3
                Você planeja criar uma conta de Armazenamento do Azure na região do Azure do Leste dos EUA 2.
                Você precisa criar uma conta de armazenamento que atenda aos seguintes requisitos:
                ✑ Replica de forma síncrona.
                ✑ Permanece disponível se um único data center na região falhar.
                Como você deve configurar a conta de armazenamento? Para responder, selecione as opções apropriadas na área de resposta.
                OBSERVAÇÃO: Cada seleção correta vale um ponto.
                Área de Hot:
        `,
        'number': 18,
        'page': 4,
        'studyCase': false,

        'answers': [
            {
                'text': `Replicação:`,
                'options': [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        'text': "Armazenamento com redundância geográfica (GRS)",
                        'correct': false
                    }, {
                        'text': "Armazenamento com redundância local (LRS)",
                        'correct': false
                    }, {
                        'text': "Armazenamento com redundância geográfica com acesso de leitura (RA GRS)",
                        'correct': false
                    },
                    {
                        'text': "Armazenamento redundante de zona (ZRS)",
                        'correct': true
                    },

                ]
            },
            {
                'text': `Tipo de conta:`,
                'options': [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        'text': "Armazenamento de blobs",
                        'correct': false
                    }, {
                        'text': "Armazenamento (uso geral v1)",
                        'correct': false
                    }, {
                        'text': "StorageV2 (uso geral v2)",
                        'correct': true
                    }
                ]
            },
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            Caixa 1: Armazenamento redundante de zona (ZRS)
                O armazenamento redundante de zona (ZRS) replica seus dados de forma síncrona em três clusters de armazenamento em uma única região.
                O LRS não permaneceria disponível se um data center na região falhasse.
                GRS e RA GRS usam replicação assíncrona.
                Caixa 2: StorageV2 (uso geral V2)
                O ZRS oferece suporte apenas ao GPv2.
                Referência:
                https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy-zrs
        `
    },




    {
        'question': '19\nVocê planeja usar o serviço Azure Import/Export para copiar arquivos para uma conta de armazenamento.\nQuais são os dois arquivos que você deve criar antes de preparar as unidades para o trabalho de importação? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 134,
        'answers': [{
            'text': 'A. um arquivo de manifesto XML\n',
            'correct': false
        }, {
            'text': 'B. um arquivo CSV de conjunto de dados\n',
            'correct': true
        }, {
            'text': 'C. um arquivo de configuração JSON\n',
            'correct': false
        }, {
            'text': 'D. um arquivo PowerShell PS1\n',
            'correct': false
        }, {
            'text': 'E. um arquivo CSV do conjunto de unidades',
            'correct': true
        }
        ],
        'explication': 'SER\nB: Modifique o arquivo dataset.csv na pasta raiz onde a ferramenta reside. Dependendo se você deseja importar um arquivo ou pasta ou ambos, adicione\nentradas no arquivo dataset.csv\nE: Modifique o arquivo driveset.csv na pasta raiz onde a ferramenta reside.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-data-to-les\nDistribuição de votos da comunidade\nSER (97%)'
    }, {
        'question': '20\nVocê tem um cofre do Serviço de Recuperação que usa para testar backups. Os backups de teste contêm duas máquinas virtuais protegidas.\nVocê precisa excluir o cofre dos Serviços de Recuperação.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 135,
        'answers': [{
            'text': 'A. No cofre do Serviço de Recuperação, exclua os dados de backup.\n',
            'correct': false
        }, {
            'text': 'B. Modifique as propriedades de recuperação de desastres de cada máquina virtual.\n',
            'correct': false
        }, {
            'text': 'C. Modifique os bloqueios de cada máquina virtual.\n',
            'correct': false
        }, {
            'text': 'D. No cofre do Serviço de Recuperação, interrompa o backup de cada item de backup.',
            'correct': true
        }
        ],
        'explication': 'D\nNão é possível excluir um cofre dos Serviços de Recuperação se ele estiver registrado em um servidor e contiver dados de backup. Se você tentar excluir um cofre, mas não conseguir, o cofre será\nainda configurado para receber dados de backup.\nRemover dependências do vault e excluir o vault\nNo menu do painel do vault, role para baixo até a seção Itens Protegidos e clique em Itens de Backup. Neste menu, você pode parar e excluir o Azure\nServidores de arquivos, SQL\nServidores em VM do Azure e máquinas virtuais do Azure.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/backup/backup-azure-delete-vault\nDistribuição de votos da comunidade\nD (100%)'
    },

    {
        'question': `Questão 21 Tópico 3 
        Você tem uma assinatura do Azure chamada Subscription1 que contém os recursos mostrados na tabela a seguir.
        <img src="imagens/questao21topico3.png" alt="imagem da questão"></img>
        No storage1, você cria um contêiner de blob chamado blob1 e um compartilhamento de arquivo chamado share1.
        Quais recursos podem ser copiados para o Vault1 e o Vault2? Para responder, selecione as opções apropriadas na área de resposta.
        OBSERVAÇÃO: Cada seleção correta vale um ponto.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Pode usar o Vault1 para backups:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Apenas VM1",
                    'correct': true
                }, {
                    'text': "Somente VM1 e share1",
                    'correct': false
                }, {
                    'text': "Somente VM1 e SQL1",
                    'correct': false
                },
                {
                    'text': "Somente VM1, storage1 e SQL1",
                    'correct': false
                },
                {
                    'text': "VM1, blob1, share1 e SQL1",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Pode usar o Vault2 para backups:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "storage1 apenas",
                    'correct': false
                }, {
                    'text': "share1 apenas ",
                    'correct': true
                }, {
                    'text': "Somente VM1 e share1",
                    'correct': false
                },
                {
                    'text': "somente blob1 e share1",
                    'correct': false
                },
                {
                    'text': "somente storage1 e SQL1",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentários discordam da fonta na segunda resposta. Fonte colocou storage1
        enquanto nos comentários a maioria votou no share1. Comentário mais votado:
        Resposta correta: Caixa 1: Somente VM1 
        VM1 está na mesma região que Vault1. 
        File1 não está na mesma região que Vautl1. SQL não está na mesma região que Vault1. Blobs não podem ser copiados para cofres de serviço.
        Observação: para criar um Vault para proteger VMs, o Vault deve estar na mesma região que as VMs. Caixa 2: Somente Share1 Storage1 está na mesma região que Vault2. Share1 está em Storage1.
        Observação: somente VM e Fileshare têm permissão para fazer backup.
        Referência: https://docs.microsoft.com/bs-cyrl-ba/azure/backup/backup-create-rs-vault https://docs.microsoft.com/en-us/azure/backup/backup-afs https://feedback.azure.com/forums/217298-storage/suggestions/37096837-possibility-to-backup-blob-data-in-the-recovery-se
            
`
    },
    
    
    {
        'question': '22\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê tem 5 TB de dados que precisa transferir para a Assinatura1.\nVocê planeja usar um trabalho de importação/exportação do Azure.\nO que você pode usar como destino dos dados importados?\n',
        'number': '',
        'page': 137,
        'answers': [{
            'text': 'A. uma máquina virtual\n',
            'correct': false
        }, {
            'text': 'B. um banco de dados Azure Cosmos DB\n',
            'correct': false
        }, {
            'text': 'C. Armazenamento de Arquivos do Azure\n',
            'correct': true
        }, {
            'text': 'D. o Serviço de Sincronização de Armazenamento do Azure File Sync',
            'correct': false
        }
        ],
        'explication': 'C\nO serviço de Importação/Exportação do Azure é usado para importar com segurança grandes quantidades de dados para o armazenamento de Blobs do Azure e Arquivos do Azure, enviando unidades de disco para\num datacenter do Azure.\nO tamanho máximo de um recurso de arquivos do Azure de um compartilhamento é de 5 TB.\nObservação:\nExistem várias versões desta questão no exame. A pergunta tem duas respostas corretas:\n1. Armazenamento de arquivos do Azure\n2. Armazenamento de Blobs do Azure\nA pergunta pode ter outras opções de resposta incorretas, incluindo as seguintes:\n✑ Armazenamento do Azure Data Lake\n✑ Banco de Dados SQL do Azure\n✑ Azure Data Factory\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-service\nDistribuição de votos da comunidade\nC (95%) 5%'
    },

    {
        'question': `Questão 23 Tópico 3
        Você tem uma assinatura do Azure.
        Você cria a conta do Azure Storage mostrada na exposição a seguir.
        <img src="imagens/pquestao23topico3.png" alt="imagem da questão"></img>
        Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.

`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `O número mínimo de cópias da conta de armazenamento será [opção de resposta]`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "1",
                    'correct': false
                }, {
                    'text': "2",
                    'correct': false
                }, {
                    'text': "3",
                    'correct': true
                },
                {
                    'text': "4",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Para reduzir o custo de dados acessados ​​com pouca frequência na conta de armazenamento, você deve modificar a configuração [opção de resposta]',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Camada de acesso (padrão)",
                    'correct': true
                }, {
                    'text': "Desempenho",
                    'correct': false
                }, {
                    'text': "Tipo de conta",
                    'correct': false
                },
                {
                    'text': "Replicação",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            Os comentários concordam:
            Caixa 1: 3 -
            O Armazenamento redundante local (LRS) fornece armazenamento altamente durável e disponível em um único local (sub-região). Mantemos um equivalente a 3 cópias
            (réplicas) dos seus dados no local principal, conforme descrito em nosso artigo SOSP; isso garante que podemos nos recuperar de falhas comuns (disco, nó, rack) sem afetar a disponibilidade e a durabilidade da sua conta de armazenamento.

            Caixa 2: Camada de acesso -
            Altere a camada de acesso de Quente para Frio.
            Observação: o armazenamento do Azure oferece diferentes camadas de acesso, que permitem que você armazene dados de objetos blob da maneira mais econômica. As camadas de acesso disponíveis incluem:
            Quente - Otimizado para armazenar dados acessados ​​com frequência.
            Frio - Otimizado para armazenar dados acessados ​​com pouca frequência e armazenados por pelo menos 30 dias.
            Arquivo - Otimizado para armazenar dados acessados ​​raramente e armazenados por pelo menos 180 dias com requisitos de latência flexíveis (na ordem de horas).
            Referência:
            https://azure.microsoft.com/en-us/blog/data-series-introducing-locally-redundant-storage-for-windows-azure-storage/ https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers
`
    },


    
    
    
    {
        'question': '24\nVocê tem uma conta de Armazenamento do Azure chamada storage1.\nVocê planeja usar o AzCopy para copiar dados para o armazenamento1.\nVocê precisa identificar os serviços de armazenamento no storage1 para os quais você pode copiar os dados.\nQuais serviços de armazenamento você deve identificar?\n',
        'number': '',
        'page': 139,
        'answers': [{
            'text': 'A. blob, arquivo, tabela e fila\n',
            'correct': false
        }, {
            'text': 'B. somente blob e arquivo',
            'correct': true
        }, {
            'text': 'C. arquivo e tabela apenas\n',
            'correct': false
        }, {
            'text': 'D. apenas arquivo\n',
            'correct': false
        }, {
            'text': 'E. somente blob, tabela e fila',
            'correct': false
        }
        ],
        'explication': 'B\nAzCopy é um utilitário de linha de comando que você pode usar para copiar blobs ou arquivos de ou para uma conta de armazenamento.\nRespostas incorretas:\nA, C, E: AzCopy não oferece suporte a serviços de armazenamento de tabelas e filas.\nD: AzCopy oferece suporte a serviços de armazenamento de arquivos, bem como serviços de armazenamento de blob.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10\nDistribuição de votos da comunidade\nB (100%)'
    },

    {
        'question': `Questão 25 Tópico 3
            Você tem uma conta do Azure Storage chamada storage1 que usa o Azure Blob storage e o Azure File storage.
            Você precisa usar o AzCopy para copiar dados para o blob storage e o file storage no storage1.
            Qual método de autenticação você deve usar para cada tipo de armazenamento? Para responder, selecione as opções apropriadas na área de resposta.
        `,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Blob storage`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente Azure Active Directory (Azure AD)",
                    'correct': false
                }, {
                    'text': "Somente assinaturas de acesso compartilhado (SAS)",
                    'correct': false
                }, {
                    'text': "Somente chaves de acesso e assinaturas de acesso compartilhado (SAS)",
                    'correct': false
                },
                {
                    'text': "Somente Azure Active Directory (Azure AD) e assinaturas de acesso compartilhado (SAS)",
                    'correct': true
                },
                {
                    'text': "Azure Active Directory (Azure AD), chaves de acesso e assinaturas de acesso compartilhado (SAS)",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Armazenamento de arquivos:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente Azure Active Directory (Azure AD)",
                    'correct': false
                }, {
                    'text': "Somente assinaturas de acesso compartilhado (SAS)",
                    'correct': true
                }, {
                    'text': "Somente chaves de acesso e assinaturas de acesso compartilhado (SAS)",
                    'correct': false
                },
                {
                    'text': "Somente Azure Active Directory (Azure AD) e assinaturas de acesso compartilhado (SAS)",
                    'correct': false
                },
                {
                    'text': "Azure Active Directory (Azure AD), chaves de acesso e assinaturas de acesso compartilhado (SAS)",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            Você pode fornecer credenciais de autorização usando o Azure Active Directory (AD) ou usando um token Shared Access Signature (SAS).
            Caixa 1:
            O Azure Active Directory (AD) e o token Shared Access Signature (SAS) são suportados para armazenamento de Blobs.
            Caixa 2:
            Somente o token Shared Access Signature (SAS) é suportado para armazenamento de arquivos.
            Referência:
            https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10
            
`
    },

    
    {
        'question': '26\nVocê tem uma assinatura do Azure que contém uma conta do Armazenamento do Azure.\nVocê planeja criar uma instância de contêiner do Azure chamada container1 que usará uma imagem do Docker chamada Image1. Image1 contém um Microsoft SQL\nInstância de servidor que requer armazenamento persistente.\nVocê precisa configurar um serviço de armazenamento para Container1.\nO que você deve usar?\n',
        'number': '',
        'page': 141,
        'answers': [{
            'text': 'A. Arquivos do Azure\n',
            'correct': true
        }, {
            'text': 'B. Armazenamento de Blobs do Azure\n',
            'correct': false
        }, {
            'text': 'C. Armazenamento de fila do Azure\n',
            'correct': false
        }, {
            'text': 'D. Armazenamento de Tabelas do Azure',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://azure.microsoft.com/en-us/blog/persistent-docker-volumes-with-azure-le-storage/ https://docs.microsoft.com/en-\nus/azure/aks/concepts-storage\nDistribuição de votos da comunidade\nA (94%) 5%\nTópico 3'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '27\nVocê tem um aplicativo chamado App1 que é executado em duas máquinas virtuais do Azure chamadas VM1 e VM2.\nVocê planeja implementar um conjunto de disponibilidade do Azure para App1. A solução deve garantir que o App1 esteja disponível durante a manutenção planejada do\nalojamento de hardware\nVM1 e VM2.\nO que você deve incluir no conjunto de disponibilidade?\n',
        'number': '',
        'page': 141,
        'answers': [{
            'text': 'A. um domínio de atualização\n',
            'correct': false
        }, {
            'text': 'B. dois domínios de falha\n',
            'correct': false
        }, {
            'text': 'C. um domínio de falha\n',
            'correct': false
        }, {
            'text': 'D. dois domínios de atualização',
            'correct': true
        }
        ],
        'explication': 'D\nAs atualizações da Microsoft, que a Microsoft chama de eventos de manutenção planejada, às vezes exigem que as VMs sejam reinicializadas para concluir a atualização.\nPara reduzir o impacto nas VMs, a malha do Azure é dividida em domínios de atualização para garantir que nem todas as VMs sejam reinicializadas ao mesmo tempo.\nRespostas incorretas:\nR: Um domínio de atualização é um grupo de VMs e hardware físico subjacente que pode ser reinicializado ao mesmo tempo.\nB, C: Um domínio de falha compartilha armazenamento comum, bem como uma fonte de energia e um switch de rede comuns. É usado para proteger contra\nfalha de sistema.\nReferências:\nhttps://petri.com/understanding-azure-availability-sets\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-availability-sets\nDistribuição de votos da comunidade\nD (87%) 13%'
        , 'filters': ['K002']
    }, {
        'question': '28\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê tem 5 TB de dados que precisa transferir para a Assinatura1.\nVocê planeja usar um trabalho de importação/exportação do Azure.\nO que você pode usar como destino dos dados importados?\n',
        'number': '',
        'page': 142,
        'answers': [{
            'text': 'A. um banco de dados Azure Cosmos DB\n',
            'correct': false
        }, {
            'text': 'B. Armazenamento de Blobs do Azure\n',
            'correct': true
        }, {
            'text': 'C. Armazenamento do Lago de Dados do Azure\n',
            'correct': false
        }, {
            'text': 'D. o Serviço de Sincronização de Armazenamento do Azure File Sync',
            'correct': false
        }
        ],
        'explication': 'B\nO serviço de Importação/Exportação do Azure é usado para importar com segurança grandes quantidades de dados para o armazenamento de Blobs do Azure e Arquivos do Azure, enviando unidades de disco para\num datacenter do Azure.\nObservação:\nExistem várias versões desta questão no exame. A pergunta tem duas respostas corretas:\n1. Armazenamento de arquivos do Azure\n2. Armazenamento de Blobs do Azure\nA pergunta pode ter outras opções de resposta incorretas, incluindo as seguintes:\n✑ uma máquina virtual\n✑ Banco de Dados SQL do Azure\n✑ Azure Data Factory\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-service\nDistribuição de votos da comunidade\nB (100%)'
    },

    {
        'question': `Questão 29 Tópico 3
        ARRASTAR E SOLTAR -
        Você tem uma assinatura do Azure que contém um compartilhamento de arquivos do Azure.
        Você tem um servidor local chamado Server1 que executa o Windows Server 2016.
        Você planeja configurar o Azure File Sync entre o Server1 e o compartilhamento de arquivos do Azure.
        Você precisa preparar a assinatura para o Azure File Sync planejado.
        Quais duas ações você deve executar na assinatura do Azure? Para responder, arraste as ações apropriadas para os destinos corretos. Cada ação pode ser usada uma vez, mais de uma vez ou nem uma vez. Pode ser necessário arrastar a barra de divisão entre os painéis ou rolar para visualizar o conteúdo.
`,
        'number': '31',
        'page': 11,
        'answers': [

            [
                {
                    'text': 'Primeira e segunda ação respectivamente',
                    'options': [
                        { 'text': 'Crie um serviço de sincronização/Sync de armazenamento', 'correct': true, 'index': '1' },
                        { 'text': 'Instale o agente Azure File Sync', 'correct': true, 'index': '2' },
                        { 'text': 'Crie um grupo de sincronização', 'correct': false, 'index': '-1' },
                        { 'text': 'Execute o registro do servidor', 'correct': false, 'index': '-1' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': '',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `Muitos discordaram da fonte na segunda questão mas com base na grande dúvida...
            Fonte:
            Primeira ação: Criar um Serviço de Sincronização de Armazenamento
            A implantação do Azure File Sync começa com a colocação de um recurso do Serviço de Sincronização de Armazenamento em um grupo de recursos da sua assinatura selecionada.
            Segunda ação: Instalar o agente do Azure File Sync
            O agente do Azure File Sync é um pacote para download que permite que o Windows Server seja sincronizado com um compartilhamento de arquivos do Azure.
            Referência:
            https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide
                    
             Um dos comentários mais votados:
            Resposta correta: Primeira ação: Criar um Storage Sync Service A implantação do Azure File Sync 
            começa com a colocação de um recurso do Storage Sync Service em um grupo de recursos da sua assinatura selecionada. 
            
            Segunda ação: Instalar o agente do Azure File Sync O agente do Azure File Sync é um pacote para download que permite que o Windows Server seja sincronizado com um compartilhamento de arquivos do Azure.
            1. Prepare o Windows Server para usar com o Azure File Sync
            2. Implante o Storage Sync Service
            3. Instale o agente do Azure File Sync 
            4. Registre o Windows Server com o Storage Sync Service
            5. Crie um grupo de sincronização e um ponto de extremidade de nuvem 6. Crie um ponto de extremidade de servidor 7. Configure as configurações de firewall e rede virtual Referência: https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide https://docs.microsoft.com/en-us/azure/storage/file-sync/file-sync-deployment-guide?tabs=azure-portal%2Cproactive-portal#deploy-the-storage-sync-service
             `,
        'typeQuestion': 'dragdrop'
    },

    {
        'question': `Questão 30 Tópico 3
            Você tem uma assinatura do Azure que contém os compartilhamentos de arquivos mostrados na tabela a seguir.
            <img src="imagens/rquestao30topico3parte1.png" alt="imagem da questão"></img>
            Você tem os compartilhamentos de arquivos locais mostrados na tabela a seguir.
            <img src="imagens/rquestao30topico3parte2.png" alt="imagem da questão"></img>
            Você cria um grupo de sincronização de arquivos do Azure chamado Sync1 e executa as seguintes ações:
            ✑ Adicione share1 como o ponto de extremidade da nuvem para Sync1.
            ✑ Adicione data1 como um ponto de extremidade do servidor para Sync1.
            ✑ Registre Server1 e Server2 no Sync1.
            Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Você pode adicionar share3 como um endpoint de nuvem adicional para Sync1.',
            'correct': false
        }, {
            'text': 'Você pode adicionar data2 como um endpoint de servidor adicional para Sync1.',
            'correct': true
        }, {
            'text': 'Você pode adicionar data3 como um endpoint de servidor adicional para Sync1.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `
            Caixa 1: Não -
            Um grupo de sincronização deve conter um ponto de extremidade de nuvem, que representa um compartilhamento de arquivo do Azure e um ou mais pontos de extremidade de servidor.

            Caixa 2: Sim -
            Data2 está localizado no Server2 que está registrado no Sync1.

            Caixa 3: Não -
            Data3 está localizado no Server3 que não está registrado no Sync1.
            Referência:
            https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide?tabs=azure-portal%2Cproactive-portal#create-a-sync-group-and-a- cloud-endpoint
        `

    },

    {
        'question': `Questão 31 Tópico 3
        Você tem uma assinatura do Azure chamada Subscription1 que contém os recursos mostrados na tabela a seguir:
        <img src="imagens/pquestao31topico3.png" alt="imagem da questão"></img>
        Você planeja configurar relatórios do Azure Backup para o Vault1.
        Você está configurando as configurações de Diagnóstico para o log AzureBackupReports.
        Quais contas de armazenamento e quais espaços de trabalho do Log Analytics você pode usar para os relatórios do Azure Backup do Vault1? 
        Para responder, selecione as opções apropriadas na área de resposta.
        `,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Contas de armazenamento/storage accounts:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "storage1 apenas",
                    'correct': false
                }, {
                    'text': "somente storage2",
                    'correct': false
                }, {
                    'text': "storage3 apenas",
                    'correct': true
                },
                {
                    'text': "storage1, storage2 e storage3",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Espaços de trabalho do Log Analytics:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Apenas Analytics1",
                    'correct': false
                }, {
                    'text': "Somente Analytics2",
                    'correct': false
                }, {
                    'text': "Apenas Analytics3",
                    'correct': false
                },
                {
                    'text': "Analytics1, Analytics2 e Analytics3",
                    'correct': true
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentários mais votados discordam da fonte. 
        Resposta correta: 
        Contas de armazenamento: somente Storage 3 A conta de armazenamento deve estar na mesma região que o Recovery Services Vault.
        Espaços de trabalho do Log Analytics: Analytics1, Analytics2 e Analytics3 Configure um ou mais espaços de trabalho do Log Analytics para armazenar seus dados de relatórios de backup.
        O local e a assinatura onde este espaço de trabalho do Log Analytics pode ser criado são independentes do local e da assinatura onde seus Vaults existem.
        Referência: https://docs.microsoft.com/en-us/azure/backup/configure-reports#1-create-a-log-analytics-workspace-or-use-an-existing-one 
`
    },

    {
        'question': `Questão 32 Tópico 3
        Você tem uma assinatura do Azure que contém as contas de armazenamento mostradas na exposição a seguir.
        <img src="imagens/pquestao32topico3.png" alt="imagem da questão"></img>
        Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.
        OBSERVAÇÃO: Cada seleção correta vale um ponto.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Você pode criar um compartilhamento de arquivos premium em`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "apenas contoso101",
                    'correct': false
                }, {
                    'text': "apenas contoso104",
                    'correct': true
                }, {
                    'text': "contoso101 ou contoso104 somente",
                    'correct': false
                },
                {
                    'text': "contoso101, contoso102 ou contoso104 somente",
                    'correct': false
                },
                {
                    'text': "contoso101, contoso102, contoso103 ou contoso104",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Você pode usar o nível de acesso Archive em',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "apenas contoso101",
                    'correct': false
                }, {
                    'text': "contoso101 ou contoso103 somente",
                    'correct': true
                }, {
                    'text': "somente contoso101, contoso102 e contoso103",
                    'correct': false
                },
                {
                    'text': "somente contoso101, contoso102 e contoso104",
                    'correct': false
                },
                {
                    'text': "contoso101, contoso102, contoso103 e contoso104",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentário mais votado não concorda com a fonte na segunda seleção.
        Comentário:
        Resposta correta: Caixa 1: contoso104 somente
        Os compartilhamentos de arquivos Premium são hospedados em um tipo de conta de armazenamento de propósito especial, chamada de conta FileStorage.
        Caixa 2: contoso101 e contos103 somente A divisão de dados de armazenamento de objetos entre quente, frio e arquivado é suportada em contas Blob Storage e General Purpose v2 (GPv2).
        As contas General Purpose v1 (GPv1) não suportam divisão em camadas. A camada de arquivamento suporta apenas LRS, GRS e RA-GRS.
        Referência: https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-create-premium-fileshare?tabs=azure-portal https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers
            
`
    },
    
    {
        'question': `Questão 33 Tópico 3
        Você tem uma assinatura do Azure chamada Subscription1.
        Em Subscription1, você cria um compartilhamento de arquivo do Azure chamado share1.
        Você cria uma assinatura de acesso compartilhado (SAS) chamada SAS1, conforme mostrado na seguinte exposição:
        <img src="imagens/pquestao33topico3.png" alt="imagem da questão"></img>
        Para responder, selecione as opções apropriadas na área de resposta.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Se, em 2 de setembro de 2018, você executar o Microsoft Azure Storage Explorer em um
             computador que tenha um endereço IP 193.77.134.1 e usar SAS1 para se conectar à conta de armazenamento, você [responderá a opção].`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "solicitará credenciais",
                    'correct': false
                }, {
                    'text': "não terá acesso",
                    'correct': true
                }, {
                    'text': "terá acesso de leitura, gravação e lista",
                    'correct': false
                },
                {
                    'text': " terá acesso somente leitura",
                    'correct': false
                }
            ]
        },

        {
            'text': `Se em 10 de setembro de 2018,
            você executar o comando net use em um computador que tenha um
            endereço IP 193.77.134.50 e usar SAS1 como senha para se conectar
            ao share1, você [opção de resposta].`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "solicitará credenciais",
                    'correct': false
                }, {
                    'text': "não terá acesso",
                    'correct': true
                }, {
                    'text': "terá acesso de leitura, gravação e lista",
                    'correct': false
                },
                {
                    'text': " terá acesso somente leitura",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Na segunda pergunta os comentários não concordaram.Mais votados:
        A resposta não está correta. Não deve haver acesso para ambos os casos. - para o primeiro caso, porque o IP não está correspondendo aos requisitos do SAS - para o segundo caso, uma vez que está usando "net use" onde usa SMB. O protocolo SMB (Server Message Broker) não suporta SAS. Ele ainda pede nome de usuário/senha. Consequentemente,
        ele dará erro de nome de usuário/senha errados e não fornecerá acesso.           
`
    },
    
    
    {
        'question': '34\nVocê tem duas máquinas virtuais do Azure denominadas VM1 e VM2. Você tem dois cofres dos Serviços de Recuperação chamados RSV1 e RSV2.\nVM2 tem backup em RSV1.\nVocê precisa fazer backup da VM2 para RSV2.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 149,
        'answers': [{
            'text': 'A. Na lâmina RSV1, clique em Itens de backup e interrompa o backup da VM2\n',
            'correct': true
        }, {
            'text': 'B. Na folha RSV2, clique em Backup. Na folha Backup, selecione o backup da máquina virtual e clique em Backup\n',
            'correct': false
        }, {
            'text': 'C. Na lâmina VM2, clique em Recuperação de desastres, clique em Configurações de replicação e selecione RSV2 como o cofre dos Serviços de Recuperação\n',
            'correct': false
        }, {
            'text': 'D. No blade RSV1, clique em Trabalhos de backup e exporte o trabalho VM2',
            'correct': false
        }
        ],
        'explication': 'C\nReferência:\nhttps://docs.microsoft.com/en-us/azure/backup/backup-azure-vms- rst-look-arm\nDistribuição de votos da comunidade\nA (97%)'
    }, {
        'question': '35\nVocê tem uma conta de armazenamento do Azure v1 de uso geral chamada storage1 que usa LRS (armazenamento com redundância local).\nVocê precisa garantir que os dados da conta de armazenamento estejam protegidos se uma zona falhar. A solução deve minimizar custos e esforços administrativos.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 150,
        'answers': [{
            'text': 'A. Crie uma nova conta de armazenamento.\n',
            'correct': false
        }, {
            'text': 'B. Configurar regras de replicação de objetos.\n',
            'correct': false
        }, {
            'text': 'C. Atualize a conta para uso geral v2.\n',
            'correct': true
        }, {
            'text': 'D. Modifique a configuração de replicação de storage1.',
            'correct': false
        }
        ],
        'explication': 'C\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy\nDistribuição de votos da comunidade\nC (97%)\nTópico 3'
    }, {
        'question': `36\nVocê tem uma assinatura do Azure que contém as contas de armazenamento mostradas na tabela a seguir.
        <img src="imagens/yquestao36topico3.png" alt="imagem da questão"></img>
        \nVocê planeja gerenciar os dados armazenados nas contas
         usando regras de gerenciamento do ciclo de vida.
        \nA quais contas de armazenamento você pode aplicar regras de gerenciamento do ciclo de vida?\n`,
        'number': '',
        'page': 150,
        'answers': [{
            'text': 'A. armazenamento1 apenas\n',
            'correct': false
        }, {
            'text': 'B. somente armazenamento1 e armazenamento2\n',
            'correct': false
        }, {
            'text': 'C. somente armazenamento3 e armazenamento4\n',
            'correct': false
        }, {
            'text': 'D. somente armazenamento1, armazenamento2 e armazenamento3\n',
            'correct': true
        }, {
            'text': 'E. armazenamento1, armazenamento2, armazenamento3 e armazenamento4',
            'correct': false
        }
        ],
        'explication': 'D\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/blobs/storage-lifecycle-management-concepts?tabs=azure-portal\nDistribuição de votos da comunidade\nD (96%) 4%'
    }, {
        'question': '37\nVocê cria uma conta do Armazenamento do Azure chamada contosostorage.\nVocê planeja criar um compartilhamento de arquivos chamado data.\nOs usuários precisam mapear uma unidade para o compartilhamento de arquivos de dados de computadores domésticos que executam o Windows 10.\nQual porta de saída você deve abrir entre os computadores domésticos e o compartilhamento de arquivos de dados?\n',
        'number': '',
        'page': 151,
        'answers': [{
            'text': 'A. 80\n',
            'correct': false
        }, {
            'text': 'B. 443\n',
            'correct': false
        }, {
            'text': 'C. 445\n',
            'correct': true
        }, {
            'text': 'D. 3389',
            'correct': false
        }
        ],
        'explication': 'C\nServer Message Block (SMB) é usado para conectar a um compartilhamento de arquivo do Azure pela Internet. O protocolo SMB requer que a porta TCP 445 esteja aberta.\nRespostas incorretas:\nA: A porta 80 é necessária para HTTP para um servidor web\nB: A porta 443 é necessária para HTTPS para um servidor web\nD: A porta 3389443 é necessária para conexões de protocolo de área de trabalho remota (RDP)\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/ les/storage-how-to-use- les-windows\nDistribuição de votos da comunidade\nC (100%)\nTópico 3'
    }, {
        'question': '38\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê tem 5 TB de dados que precisa transferir para a Assinatura1.\nVocê planeja usar um trabalho de importação/exportação do Azure.\nO que você pode usar como destino dos dados importados?\n',
        'number': '',
        'page': 151,
        'answers': [{
            'text': 'A. Armazenamento de Arquivos do Azure\n',
            'correct': true
        }, {
            'text': 'B. um banco de dados Azure Cosmos DB\n',
            'correct': false
        }, {
            'text': 'C. Fábrica de Dados do Azure\n',
            'correct': false
        }, {
            'text': 'D. Banco de dados SQL do Azure',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/import-export/storage-import-export-service\nDistribuição de votos da comunidade\nUm (100%)'
    },
    {
        'question': `Questão 39 Tópico 3
            Você tem uma assinatura do Azure que contém uma conta do Azure Storage chamada storageaccount1.
            Você exporta storageaccount1 como um modelo do Azure Resource Manager. O modelo contém as seguintes seções.
            <img src="imagens/rquestao39topico3.png" alt="imagem da questão"></img>

            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Um servidor que tenha um endereço IP público 131.107.103.10 pode acessar storageaccount1',
            'correct': true
        }, {
            'text': 'Blobs individuais em storageaccount1 podem ser configurados para usar a camada de arquivo',
            'correct': true
        }, {
            'text': `As administrações globais no Azure Active Directory (Azure AD) 
                podem acessar um compartilhamento de arquivos hospedado em storageaccount1 
                usando suas credenciais do Azure AD`,
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Referência:
                https://docs.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts?tabs=json
        `
        , 'filters': ['K002']

    },
    {
        'question': `40\nVocê tem uma assinatura do Azure que contém uma conta de armazenamento chamada storage1.
            \nVocê tem os dispositivos mostrados na tabela a seguir.
            
            <img src="imagens/yquestao40topico3.png" alt="imagem da questão"></img>

            \nDe quais dispositivos você pode usar o AzCopy para copiar dados para o armazenamento1?\n`,
        'number': '',
        'page': 153,
        'answers': [{
            'text': 'A. Somente dispositivo 1\n',
            'correct': false
        }, {
            'text': 'B. Dispositivo1, Dispositivo2 e Dispositivo3\n',
            'correct': true
        }, {
            'text': 'C. Somente Dispositivo1 e Dispositivo2\n',
            'correct': false
        }, {
            'text': 'D. Somente Dispositivo1 e Dispositivo3',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '41\nVocê tem uma conta de Armazenamento do Azure chamada storage1 que contém um contêiner de blob chamado container1.\nVocê precisa evitar que novos conteúdos adicionados ao container1 sejam modificados por um ano.\nO que você deve configurar?\n',
        'number': '',
        'page': 154,
        'answers': [{
            'text': 'A. a camada de acesso\n',
            'correct': false
        }, {
            'text': 'B. uma política de acesso\n',
            'correct': true
        }, {
            'text': 'C. as configurações de controle de acesso (IAM)\n',
            'correct': false
        }, {
            'text': 'D. o nível de acesso',
            'correct': false
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview?tabs=azure-portal\nDistribuição de votos da comunidade\nB (100%)'
    },
    
    {
        'question': `Questão 42 Tópico 3
            Você tem uma conta do Azure Storage chamada storage1 que contém um contêiner de blob. O contêiner de blob tem uma camada de acesso padrão de Hot. Storage1 contém um contêiner chamado conainer1.
            Você cria regras de gerenciamento de ciclo de vida em storage1, conforme mostrado na tabela a seguir.
            <img src="imagens/rquestao42topico3parte1.png" alt="imagem da questão"></img>
            Você executa as ações mostradas na tabela a seguir.
            <img src="imagens/rquestao42topico3parte2.png" alt="imagem da questão"></img>

            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Em 10 de outubro, você poderá ler Dep1File1.docx.',
            'correct': false
        }, {
            'text': 'Em 10 de outubro, você poderá ler o Arquivo2.docx.',
            'correct': true
        }, {
            'text': 'Em 10 de outubro, você poderá ler o Arquivo3.docx.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Comentário bem votado: 
            Resposta correta NYY Dep1File1 é atingido pela regra 1, que arquivará o arquivo até o 10º, tornando-o ilegível. O arquivo 2 e o arquivo 3 não são atingidos pela primeira regra e são atingidos pela segunda regra, o que os tornará ainda legíveis até o 10º https://docs.microsoft.com/en-us/azure/storage/blobs/archive-rehydrate-overview#:~:text=While%20a%20blob%20is%20in,the%20hot%20or%20cool%20tier.
        `

    },
    
    {
        'question': '43\nVocê está configurando a autenticação do Azure Active Directory (Azure AD) para uma conta de armazenamento do Azure chamada storage1.\nVocê precisa garantir que os membros de um grupo chamado Grupo1 possam carregar arquivos usando o portal do Azure. A solução deve usar o princípio de\nUltimo privilégio.\nQuais são as duas funções que você deve configurar para armazenamento1? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 156,
        'answers': [{
            'text': 'A. Colaborador da conta de armazenamento\n',
            'correct': false
        }, {
            'text': 'B. Colaborador de dados de blob de armazenamento\n',
            'correct': true
        }, {
            'text': 'C. Leitor\n',
            'correct': true
        }, {
            'text': 'D. Colaborador\n',
            'correct': false
        }, {
            'text': 'E. Leitor de dados de blob de armazenamento',
            'correct': false
        }
        ],
        'explication': 'AC\nPara aceder aos dados blob no portal Azure com credenciais AD Azure, um utilizador deve ter as seguintes atribuições de funções:\n* Uma função de acesso a dados, como Storage Blob Data Reader ou Storage Blob Data Contributor\n* A função de Leitor do Azure Resource Manager, no mínimo\nA função Leitor é uma função do Azure Resource Manager que permite aos utilizadores ver os recursos da conta de armazenamento, mas não modificá-los. Isso não\nforneça permissões de leitura para dados no Armazenamento do Azure, mas apenas para recursos de gerenciamento de contas. A função Leitor é necessária para que os usuários possam\nnavegue até contêineres de blob no portal do Azure.\nNota: em ordem da menor para a maior permissão:\nA função de leitor e acesso a dados -\nA função de Colaborador da Conta de Armazenamento\nA função de Colaborador do Azure Resource Manager\nA função de proprietário do Azure Resource Manager\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/blobs/assign-azure-role-data-access\nDistribuição de votos da comunidade\nBC (67%) 14% Outros'
    },


    {
        'question': `Questão 44 Tópico 3
        Você tem uma conta do Azure Storage chamada storage1 que armazena imagens.
        Você precisa criar uma nova conta de armazenamento e replicar as imagens em storage1 para a nova conta usando a replicação de objetos.
        Como você deve configurar a nova conta? Para responder, selecione as opções apropriadas na área de resposta.
        OBSERVAÇÃO: Cada seleção correta vale um ponto.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Tipo de conta:`,
            'options': [
        
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "StorageV2 apenas",
                    'correct': false
                },
                {
                    'text': "StorageV2 or FileStorage somente",
                    'correct': false
                }, {
                    'text': "StorageV2 or BlobStorage somente",
                    'correct': true
                }, {
                    'text': "StorageV2, BlobStorage, or FileStorage",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Tipo de objeto a ser criado na nova conta:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Container",
                    'correct': true
                }, {
                    'text': "Compartilhamento de arquivo",
                    'correct': false
                }, {
                    'text': "Tabela",
                    'correct': false
                },
                {
                    'text': "Fila",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Reference:
        https://docs.microsoft.com/en-us/azure/storage/blobs/object-replication-overview          
`
    },

    
     {
        'question': '45\nVocê tem um servidor local que contém uma pasta chamada D:\\Folder1.\nVocê precisa copiar o conteúdo de D:\\Folder1 para o contêiner público em uma conta do Armazenamento do Azure chamada contosodata.\nQual comando você deve executar?\n',
        'number': '',
        'page': 158,
        'answers': [{
            'text': 'A. https://contosodata.blob.core.windows.net/public\n',
            'correct': false
        }, {
            'text': 'B. sincronização azcopy D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot\n',
            'correct': false
        }, {
            'text': 'C. cópia azcopy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive\n',
            'correct': true
        }, {
            'text': 'D. cópia de blob de armazenamento az lote inicial D:\\Folder1 https://contosodata.blob.core.windows.net/public',
            'correct': false
        }
        ],
        'explication': 'C\nO comando azcopy copy copia um diretório (e todos os arquivos nesse diretório) para um contêiner de blob. O resultado é um diretório no contêiner\npelo mesmo nome.\nRespostas incorretas:\nB: O comando azcopy sync replica o local de origem para o local de destino. No entanto, o arquivo será ignorado se o último horário modificado em\no destino é mais recente.\nD: O comando az storage blob copy start-batch copia vários blobs para um contêiner de blob.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs https://docs.microsoft.com/en-\nus/azure/storage/common/storage-ref-azcopy-copy\nDistribuição de votos da comunidade\nC (100%)\nTópico 3'
    }, {
        'question': '46\nVocê tem uma assinatura do Azure.\nNo portal do Azure, você planeja criar uma conta de armazenamento chamada storage1 que terá as seguintes configurações:\n✑ Desempenho: Padrão\n✑ Replicação: armazenamento com redundância de zona (ZRS)\n✑ Nível de acesso (padrão): Legal\n✑ Namespace hierárquico: desativado\nVocê precisa garantir que pode definir o tipo de conta para armazenamento1 como BlockBlobStorage.\nQual configuração você deve modificar primeiro?\nUma performance\nB. Replicação\nC. Nível de acesso (padrão)\nD. Namespace hierárquico',
        'number': '',
        'page': 158,
        'answers': [{
            'text': 'A. Uma performance\n',
            'correct': true
        }, {
            'text': 'B. Replicação\n',
            'correct': false
        }, {
            'text': 'C. Nível de acesso (padrão)\n',
            'correct': false
        }, {
            'text': 'D. Namespace hierárquico',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview https://docs.microsoft.com/en-\nus/azure/storage/blobs/storage-blob-performance-tiers\nDistribuição de votos da comunidade\nUm (100%)'
    },

    {
        'question': `Questão 47 Tópico 3
        Você tem uma assinatura do Azure que contém as contas de armazenamento mostradas na tabela a seguir.
        <img src="imagens/pquestao47topico3.png" alt="imagem da questão"></img>
        Você planeja usar o AzCopy para copiar um blob do container1 diretamente para o share1.
        Você precisa identificar qual método de autenticação usar ao usar o AzCopy.
        O que você deve identificar para cada conta? Para responder, arraste os métodos de autenticação apropriados para as contas corretas. Cada método pode ser usado uma vez, mais de uma vez ou nunca. Pode ser necessário arrastar a barra de divisão entre os painéis ou rolar para visualizar o conteúdo.
        OBSERVAÇÃO: Cada seleção correta vale um ponto.

`,
        'number': '31',
        'page': 11,
        'answers': [

            [
                {
                    'text': 'Metodos - Answer (storage 1 e storage2)',
                    'options': [
                        { 'text': 'OAuth', 'correct': false, 'index': '-1' },
                        { 'text': 'Anônimo', 'correct': false, 'index': '-1' },
                        { 'text': 'Uma chave de acesso à conta de armazenamento', 'correct': false, 'index': '-1' },
                        { 'text': 'Um token de assinatura de acesso compartilhado (SAS)', 'correct': true, 'index': '1' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': '',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `Maioria concorda com a fonte e colocou Um token de assinatura de acesso compartilhado (SAS) nas duas seleções`,
        'typeQuestion': 'dragdrop'
    },
    
     {
        'question': '48\nVocê cria uma conta do Armazenamento do Azure.\nVocê planeja adicionar 10 contêineres de blobs à conta de armazenamento.\nPara um dos contêineres, você precisa usar uma chave diferente para criptografar os dados em repouso.\nO que você deve fazer antes de criar o contêiner?\n',
        'number': '',
        'page': 160,
        'answers': [{
            'text': 'A. Gere uma assinatura de acesso compartilhado (SAS).\n',
            'correct': false
        }, {
            'text': 'B. Modifique a versão mínima do TLS.\n',
            'correct': false
        }, {
            'text': 'C. Gire as teclas de acesso.\n',
            'correct': false
        }, {
            'text': 'D. Crie um escopo de criptografia.',
            'correct': true
        }
        ],
        'explication': 'D\nOs escopos de criptografia permitem que você gerencie a criptografia com uma chave com escopo para um contêiner ou um blob individual. Você pode usar criptografia\nescopos para criar limites seguros entre dados que residem na mesma conta de armazenamento, mas pertencem a clientes diferentes.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/blobs/encryption-scope-overview\nDistribuição de votos da comunidade\nD (96%) 4%'
    },

    {
        'question': `Questão 49 Tópico 3
            Você tem uma assinatura do Azure. A assinatura contém uma conta de armazenamento chamada storage1 que tem as regras de gerenciamento de ciclo de vida mostradas na tabela a seguir.

            <img src="imagens/rquestao49topico3parte1.png" alt="imagem da questão"></img>

            Em 1º de junho, você armazena dois blobs em storage1, conforme mostrado na tabela a seguir.

            <img src="imagens/rquestao49topico3parte2.png" alt="imagem da questão"></img>

            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

            OBSERVAÇÃO: Cada seleção correta vale um ponto.

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Em 6 de junho, o Arquivo1 será armazenado no nível de acesso Cool.',
            'correct': false
        }, {
            'text': 'Em 1º de junho, o Arquivo2 será armazenado na camada de acesso Cool.',
            'correct': false
        }, {
            'text': 'Em 16 de junho, o Arquivo2 será armazenado na camada de acesso Archive.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `concordado com a origem
        `

    },

    {
        'question': `Questão 50 Tópico 3
            Você tem uma assinatura do Azure.
            Você planeja implantar uma conta de armazenamento chamada storage1 usando o seguinte modelo do Azure Resource Manager (ARM).
            <img src="imagens/rquestao50topico3.png" alt="imagem da questão"></img>
            Para cada uma das seguintes instruções, selecione Sim se a instrução for hue. Caso contrário, selecione Não.
                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'As alterações feitas nos dados no armazenamento1 podem ser revertidas após sete dias.',
            'correct': false
        }, {
            'text': 'Apenas os utilizadores localizados na região leste do Azure dos EUA podem ligar-se ao armazenamento1.',
            'correct': false
        }, {
            'text': 'Três cópias de armazenamento serão mantidas na região do Leste dos EUA Azure.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `resposta da fonte
        `

    }, 
    {
        'question': '51\nVocê tem um servidor local que contém uma pasta chamada D:\\Folder1.\nVocê precisa copiar o conteúdo de D:\\Folder1 para o contêiner público em uma conta do Armazenamento do Azure chamada contosodata.\nQual comando você deve executar?\n',
        'number': '',
        'page': 163,
        'answers': [{
            'text': 'A. início da cópia do blob de armazenamento az D:\\Folder1 https://contosodata.blob.core.windows.net/public\n',
            'correct': false
        }, {
            'text': 'B. sincronização azcopy D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot\n',
            'correct': false
        }, {
            'text': 'C. cópia azcopy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive\n',
            'correct': true
        }, {
            'text': 'D. cópia de blob de armazenamento az lote inicial D:\\Folder1 https://contosodata.blob.core.windows.net/public',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    },

    {
        'question': `Questão 52 Tópico 3
        Você tem uma assinatura do Azure que contém uma conta de armazenamento chamada storage1. A conta storage1 contém um contêiner chamado container1.

        Você precisa criar uma regra de gerenciamento de ciclo de vida para storage1 que moverá automaticamente os blobs no container1 para a camada de menor custo após 90 dias.

        Como você deve concluir a regra? Para responder, selecione as opções apropriadas na área de resposta.


`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `{
            regras": [
                "rules": [
                    {
                    "enabled": true,
                    "name": "rulel",
                    "type": "Lifecycle",
                    "definition": {
                    "actions": {
                    "baseblob": {
            
            `,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': '"enableAuto TierToHotFromCool":{',
                    'correct': false
                }, {
                    'text': '"tierToArchive":{',
                    'correct': true
                }, {
                    'text': '"tierToCool":{',
                    'correct': false
                },
            ]
        },

        {
            'text': `
            "daysAfterModificationGreater Than": 90
            ...
            "filters": (
            `,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': `"blobIndexMatch":[`,
                    'correct': false
                }, {
                    'text': `"blobTypes":[`,
                    'correct': false
                }, {
                    'text': `"prefixMatch":[`,
                    'correct': true
                },
            ]
        },

         {
            'text': `"containerl/" 
                ...
            `,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "",
                    'correct': true
                }
            ]
        }

        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            Fonte e comentários mais votados concordam.
`
    },

    {
        'question': `Questão 53 Tópico 3
        Você tem uma assinatura do Azure que contém uma máquina virtual chamada VM1.

        Você precisa fazer backup da VM1. A solução deve garantir que os backups sejam armazenados em três zonas de disponibilidade na região primária.

        Quais três ações você deve executar em sequência? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize-as na ordem correta.

`,
        'number': '31',
        'page': 11,
        'answers': [

        
            [
                {
                    'text': 'Ações',
                    'options': [
                        { 'text': 'Configure uma política de replicação.', 'correct': false, 'index': '-1' },
                        { 'text': 'Defina a replicação para armazenamento com redundância de zona (ZRS).', 'correct': true, 'index': '2' },
                        { 'text': 'Para VM1, crie uma política de backup e configure o backup.', 'correct': true, 'index': '3' },
                        { 'text': 'Defina a replicação para armazenamento com redundância local (LRS).', 'correct': false, 'index': '-1' },
                        { 'text': 'Crie um cofre dos Serviços de Recuperação.', 'correct': true, 'index': '1' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': '',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `Maioria concordou com a fonte.
         1. Crie o Recovery Services Vault, 
         2. Defina a política de replicação como ZRS (devido ao requisito de ter três zonas separadas)
         3. Para VM1, crie uma política de backup`,
        'typeQuestion': 'dragdrop'
    },


    
    
     {
        'question': '54\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê tem 5 TB de dados que precisa transferir para Subscription1.\nVocê planeja usar um trabalho de Importação/Exportação do Azure.\nO que você pode usar como destino dos dados importados?\n',
        'number': '',
        'page': 166,
        'answers': [{
            'text': 'A. um banco de dados do Azure Cosmos DB\n',
            'correct': false
        }, {
            'text': 'B. Armazenamento de Arquivos do Azure\n',
            'correct': true
        }, {
            'text': 'C. Banco de Dados SQL do Azure\n',
            'correct': false
        }, {
            'text': 'D. uma máquina virtual',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)\nTópico 3'
    }, {
        'question': `55\nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
        
            <img src="imagens/yquestao55topico3parte1.png" alt="imagem da questão"></img>

            \nVocê precisa executar as tarefas mostradas na tabela a seguir.
                
            <img src="imagens/yquestao55topico3parte2.png" alt="imagem da questão"></img>

            \nQuais tarefas você pode executar usando o Azure Storage Explorer?\n`,
        'number': '',
        'page': 166,
        'answers': [{
            'text': 'A. Somente Tarefa1 e Tarefa3\n',
            'correct': false
        }, {
            'text': 'B. Somente Tarefa1, Tarefa2 e Tarefa3\n',
            'correct': false
        }, {
            'text': 'C. Somente Tarefa1, Tarefa3 e Tarefa4\n',
            'correct': false
        }, {
            'text': 'D. Apenas Tarefa2, Tarefa3 e Tarefa4\n',
            'correct': true
        }, {
            'text': 'E. Tarefa1, Tarefa2, Tarefa3 e Tarefa4',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)'
    },

    
    
    
     {
        'question': '57\nVocê tem uma assinatura do Azure que contém uma conta de armazenamento chamada storage1.\nVocê planeja criar um contêiner de blob chamado container1.\nVocê precisa usar a criptografia de chave gerenciada pelo cliente para o contêiner1.\nQual chave você deve usar?\n',
        'number': '',
        'page': 170,
        'answers': [{
            'text': 'A. uma chave EC que usa apenas a curva P-384\n',
            'correct': false
        }, {
            'text': 'B. uma chave EC que usa apenas a curva P-521\n',
            'correct': false
        }, {
            'text': 'C. uma chave EC que utiliza apenas a curva P-384 ou a curva P-521\n',
            'correct': false
        }, {
            'text': 'D. uma chave RSA com tamanho de chave apenas 4096\n',
            'correct': false
        }, {
            'text': 'E. um tipo de chave RSA com tamanho de chave de 2.048, 3.072 ou 4.096 apenas',
            'correct': true
        }
        ],
        'explication': 'E\nDistribuição de votos da comunidade\nE (98%)'
    },

    {
        'question': `Questão 58 Tópico 3
        Você tem uma assinatura do Azure que contém um usuário chamado User1 e uma conta de armazenamento chamada storage1. A conta storage1 contém os
        recursos mostrados na tabela a seguir.
        <img src="imagens/questao58topico3parte1.png" alt="imagem da questão"></img>
        O User1 recebe as seguintes funções para storage1:
        • Storage Blob Data Reader
        • Storage Table Data Contributor
        • Storage File Data SMB Share Contributor
        Para storage1, você cria uma assinatura de acesso compartilhado (SAS) chamada SAS1 que tem as configurações mostradas na exposição a seguir. (Clique na guia Exposição.)
        <img src="imagens/questao58topico3parte2.png" alt="imagem da questão"></img>
        Em quais recursos o User1 pode gravar usando SAS1 e key1? Para responder, selecione as opções apropriadas na área de resposta.
        OBSERVAÇÃO: cada seleção correta vale um ponto.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `key1`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "somente Table1",
                    'correct': false
                }, {
                    'text': "Table1 e somente container1",
                    'correct': false
                }, {
                    'text': "folder1 e Table1 somente",
                    'correct': false
                },
                {
                    'text': "folder1 e somente container1 ",
                    'correct': false
                },
                {
                    'text': "Table1, folder1 e container1",
                    'correct': true
                }
            ]
        },

        {
            'text': 'sas1',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "somente Table1",
                    'correct': true
                }, {
                    'text': "Table1 e somente container1",
                    'correct': false
                }, {
                    'text': "folder1 e Table1 somente",
                    'correct': false
                },
                {
                    'text': "folder1 e somente container1 ",
                    'correct': false
                },
                {
                    'text': "Table1, folder1 e container1",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `******
            
`
    },
    
    {
        'question': `Questão 59 Tópico 3
        Você tem uma assinatura do Azure que contém a conta de armazenamento mostrada na exposição a seguir.
        <img src="imagens/questao59topico3.png" alt="imagem da questão"></img>
        Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico. Você tem uma assinatura do Azure que contém a conta de armazenamento mostrada na exposição a seguir.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `O número máximo de políticas de acesso armazenadas adicionais que você pode criar para o container1 é [opção de resposta]`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "0",
                    'correct': false
                }, {
                    'text': "1",
                    'correct': false
                },
                {
                    'text': "3",
                    'correct': true
                }, {
                    'text': "4",
                    'correct': false
                },
                {
                    'text': "5",
                    'correct': false
                },
                {
                    'text': "6",
                    'correct': false
                }
            ]
        },

        {
            'text': 'O número máximo de políticas adicionais de armazenamento de blob imutáveis ​​que você pode criar para o contêiner1 é [opção de resposta]',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "0",
                    'correct': false
                }, {
                    'text': "1",
                    'correct': true
                }, {
                    'text': "2",
                    'correct': false
                },
                {
                    'text': "4",
                    'correct': false
                },
                {
                    'text': "5",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `*******
            
`
    },
    
    
    
    {
        'question': '60\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê tem 5 TB de dados que precisa transferir para a Assinatura1.\nVocê planeja usar um trabalho de importação/exportação do Azure.\nO que você pode usar como destino dos dados importados?\n',
        'number': '',
        'page': 174,
        'answers': [{
            'text': 'A. Armazenamento de Blobs do Azure\n',
            'correct': true
        }, {
            'text': 'B. Armazenamento do Lago de Dados do Azure\n',
            'correct': false
        }, {
            'text': 'C. Banco de dados SQL do Azure\n',
            'correct': false
        }, {
            'text': 'D. uma máquina virtual',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)\nTópico 3'
    }, {
        'question': `61\nVocê tem uma assinatura do Azure. A assinatura contém uma conta de armazenamento chamada storage1 que possui as regras de gerenciamento do ciclo de vida mostradas em\na tabela a seguir.
            <img src="imagens/squestao61topico3.png" alt="imagem da questão"></img>
            \nEm 1º de junho, você armazena um blob chamado File1 na camada de acesso Hot do storage1.
            \nQual é o estado do Arquivo1 em 7 de junho?\n`,
        'number': '',
        'page': 174,
        'answers': [{
            'text': 'A. armazenado na camada de acesso Cool\n',
            'correct': false
        }, {
            'text': 'B. armazenado na camada de acesso Archive\n',
            'correct': false
        }, {
            'text': 'C. armazenado na camada de acesso Hot\n',
            'correct': false
        }, {
            'text': 'D. excluído',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (88%) 12%'
    },

    {
        'question': `Questão 62 Tópico 3
            Você tem uma assinatura do Azure que contém as contas de armazenamento mostradas na tabela a seguir.

             <img src="imagens/squestao62topico3.png" alt="imagem da questão"></img>

            Você precisa identificar quais contas de armazenamento oferecem suporte ao gerenciamento do ciclo de vida e quais contas de armazenamento oferecem suporte à movimentação de dados para a camada de acesso Archive.

            Quais contas de armazenamento você deve usar? Para responder, selecione as opções apropriadas na área de resposta.

            OBSERVAÇÃO: cada seleção correta vale um ponto.
        `,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': 'Gerenciamento do ciclo de vida:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "storage1 somente",
                    'correct': false
                }, {
                    'text': "storage2 somente",
                    'correct': false
                }, {
                    'text': "storage1 e storage3 somente",
                    'correct': false
                },
                {
                    'text': "storage2 e storage3 somente",
                    'correct': false
                },
                {
                    'text': "storage1, storage2 e storage3",
                    'correct': true
                }
            ]
        },

        {
            'text': 'O nível de acesso ao arquivo:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "storage1 somente",
                    'correct': false
                }, {
                    'text': "storage2 somente",
                    'correct': true
                }, {
                    'text': "storage1 e storage3 somente",
                    'correct': false
                },
                {
                    'text': "storage2 e storage3 somente",
                    'correct': false
                },
                {
                    'text': "storage1, storage2 e storage3",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            
`
    },
    
    
    {
        'question': '63\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê tem 5 TB de dados que precisa transferir para a Assinatura1.\nVocê planeja usar um trabalho de importação/exportação do Azure.\nO que você pode usar como destino dos dados importados?\n',
        'number': '',
        'page': 176,
        'answers': [{
            'text': 'A. um banco de dados Azure Cosmos DB\n',
            'correct': false
        }, {
            'text': 'B. Armazenamento do Lago de Dados do Azure\n',
            'correct': false
        }, {
            'text': 'C. Armazenamento de Blobs do Azure\n',
            'correct': true
        }, {
            'text': 'D. Fábrica de Dados do Azure',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    },

    {
        'question': `Questão 64 Tópico 3

        Você tem uma assinatura do Azure que contém uma conta de armazenamento chamada storage1. A conta storage1 contém um contêiner chamado container1.
        Você cria uma regra de ciclo de vida de blob chamada rule1.
        Você precisa configurar rule1 para mover automaticamente blobs que NÃO foram atualizados por 45 dias do nível de acesso contido para o nível de acesso Cool.
        Como você deve concluir a regra? Para responder, selecione as opções apropriadas na área de resposta.
        OBSERVAÇÃO: cada seleção correta vale um ponto
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `{ "rules": [ 
                { "enabled": true,
                  "name": "rulel",
                   "type": "Lifecycle", 
                   "definition": { "actions": 
                    { "baseBlob":
                        { "tierToCool": {`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': '"daysAfterCreationCreaterThan"',
                    'correct': false
                }, {
                    'text': '"daysAfterLastAccessTimeGreater Than"',
                    'correct': false
                }, {
                    'text': '"daysAfter ModificationGreater Than"',
                    'correct': true
                }
            ]
        },

        {
            'text': '} }, ": ( "filters "blobTypes": [',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': '"AppendBlob"',
                    'correct': false
                }, {
                    'text': '"Blockblob"',
                    'correct': true
                }, {
                    'text': '"Pageblob"',
                    'correct': false
                },
               
            ]
        },
        {
            'text': `
            prefixMatch": [ "container1" 1
        ]
        }]}
            `,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `******
            
`
    },
    
    
    
    {
        'question': '65\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê tem 5 TB de dados que precisa transferir para a Assinatura1.\nVocê planeja usar um trabalho de importação/exportação do Azure.\nO que você pode usar como destino dos dados importados?\n',
        'number': '',
        'page': 178,
        'answers': [{
            'text': 'A. um banco de dados Azure Cosmos DB\n',
            'correct': false
        }, {
            'text': 'B. Armazenamento de Blobs do Azure\n',
            'correct': true
        }, {
            'text': 'C. Banco de dados SQL do Azure\n',
            'correct': false
        }, {
            'text': 'D. o Serviço de Sincronização de Armazenamento do Azure File Sync',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '66\nVocê planeja criar uma conta do Azure Storage chamada storage1 que conterá um compartilhamento de arquivo chamado share1.\nVocê precisa garantir que share1 possa suportar SMB Multichannel. A solução deve minimizar os custos.\nComo você deve configurar o armazenamento?\n',
        'number': '',
        'page': 179,
        'answers': [{
            'text': 'A. Desempenho premium com armazenamento localmente redundante (LRS)\n',
            'correct': true
        }, {
            'text': 'B. Desempenho padrão com armazenamento redundante de zona (ZRS)\n',
            'correct': false
        }, {
            'text': 'C. Desempenho premium com armazenamento georredundante (GRS)\n',
            'correct': false
        }, {
            'text': 'D. Desempenho padrão com armazenamento localmente redundante (LRS)',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)\nTópico 3'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '67\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê tem 5 TB de dados que precisa transferir para a Assinatura1.\nVocê planeja usar um trabalho de importação/exportação do Azure.\nO que você pode usar como destino dos dados importados?\n',
        'number': '',
        'page': 179,
        'answers': [{
            'text': 'A. Armazenamento do Lago de Dados do Azure\n',
            'correct': false
        }, {
            'text': 'B. Armazenamento de Arquivos do Azure\n',
            'correct': true
        }, {
            'text': 'C. Banco de dados SQL do Azure\n',
            'correct': false
        }, {
            'text': 'D. o Serviço de Sincronização de Armazenamento do Azure File Sync',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '68\nVocê tem uma assinatura do Azure que contém uma conta de armazenamento chamada storage1.\nVocê planeja usar condições ao atribuir funções de controle de acesso baseado em função (RBAC) ao armazenamento1.\nQuais serviços de armazenamento1 suportam condições ao atribuir funções?\n',
        'number': '',
        'page': 180,
        'answers': [{
            'text': 'A. apenas contêineres\n',
            'correct': false
        }, {
            'text': 'B. apenas ações\n',
            'correct': false
        }, {
            'text': 'C. apenas tabelas\n',
            'correct': false
        }, {
            'text': 'D. apenas filas\n',
            'correct': false
        }, {
            'text': 'E. somente contêineres e filas\n',
            correct: true
        }, {
            text: 'F. apenas compartilhamentos e tabelas',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nE (100%)'
    },

    {
        'question': `Questão 69 Tópico 3
            Você tem uma assinatura do Azure que contém os grupos de recursos mostrados na tabela a seguir.
            
            <img src="imagens/Xquestao69topico3parte1 (1).png" alt="imagem da questão"></img>

            A assinatura contém as redes virtuais mostradas na tabela a seguir.

            <img src="imagens/Xquestao69topico3parte1 (2).png" alt="imagem da questão"></img>

            Você planeja implantar os clusters do Azure Kubernetes Service (AKS) mostrados na tabela a seguir.

            <img src="imagens/Xquestao69topico3parte1 (3).png" alt="imagem da questão"></img>

            Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
            NOTA: Cada seleção correta vale um ponto.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Você pode implantar AKS1 na VNET2',
            'correct': false
        }, {
            'text': 'Você pode implantar AKS2 na VNET1',
            'correct': true
        }, {
            'text': 'Você pode implantar AKS3 na VNET3',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*
        `

    },
    

    {
        'question': '70\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 182,
        'answers': [{
            'text': 'A. o cmdlet Publish-AzVMDscCon guração\n',
            'correct': false
        }, {
            'text': 'B. Informações sobre aplicativos do Azure\n',
            'correct': false
        }, {
            'text': 'C. uma extensão Desired State Configuration (DSC)\n',
            'correct': true
        }, {
            'text': 'D. Proxy de aplicativo do Azure AD',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': '73\nVocê tem uma conta do Armazenamento do Azure que contém 5.000 blobs acessados \u200b\u200bpor vários usuários.\nVocê precisa garantir que os usuários possam visualizar apenas blobs específicos com base em tags de índice de blob.\nO que você deve incluir na solução?\n',
        'number': '',
        'page': 187,
        'answers': [{
            'text': 'A. uma condição de atribuição de função\n',
            'correct': true
        }, {
            'text': 'B. uma política de acesso armazenada\n',
            'correct': false
        }, {
            'text': 'C. Acesso à VM just-in-time (JIT)\n',
            'correct': false
        }, {
            'text': 'D. uma assinatura de acesso compartilhado (SAS)',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nA (83%) D (17%)\nTópico 3'
    }, {
        'question': '74\nVocê tem uma conta do Azure Storage chamada storage1.\nPara storage1, você cria um escopo de criptografia chamado Scope1.\nQuais tipos de armazenamento você pode criptografar usando o Scope?\n',
        'number': '',
        'page': 187,
        'answers': [{
            'text': 'A. compartilhamentos de arquivos somente\n',
            'correct': false
        }, {
            'text': 'B. contêineres somente\n',
            'correct': true
        }, {
            'text': 'C. compartilhamentos de arquivos e contêineres somente\n',
            'correct': false
        }, {
            'text': 'D. contêineres e tabelas somente\n',
            'correct': false
        }, {
            'text': 'E. compartilhamentos de arquivos, contêineres e tabelas somente',
            correct: false
        }, {
            'text': '\nF. compartilhamentos de arquivos, contêineres, tabelas e filas',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '76\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê tem 5 TB de dados que precisa transferir para Subscription1.\nVocê planeja usar um trabalho de Importação/Exportação do Azure.\nO que você pode usar como destino dos dados importados?\n',
        'number': '',
        'page': 189,
        'answers': [{
            'text': 'A. Azure Data Factory\n',
            'correct': false
        }, {
            'text': 'B. o Serviço de Sincronização de Armazenamento de Sincronização de Arquivos do Azure\n',
            'correct': false
        }, {
            'text': 'C. Armazenamento de Arquivos do Azure\n',
            'correct': true
        }, {
            'text': 'D. Banco de Dados SQL do Azure',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': '78\nVocê tem uma máquina virtual do Azure chamada VM1 e um cofre de chaves do Azure chamado Vault1.\nNa VM1, você planeja configurar o Azure Disk Encryption para usar uma chave de criptografia (KEK).\nVocê precisa preparar o Vault1 para criptografia de disco do Azure.\nQuais são as duas ações que você deve realizar no Vault1? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 191,
        'answers': [{
            'text': 'A. Selecione máquinas virtuais do Azure para implantação.\n',
            'correct': false
        }, {
            'text': 'B. Crie uma nova chave.\n',
            'correct': true
        }, {
            'text': 'C. Crie um novo segredo.\n',
            'correct': false
        }, {
            'text': 'D. Configurar uma política de rotação de chaves.\n',
            'correct': false
        }, {
            'text': 'E. Selecione Azure Disk Encryption para criptografia de volume.',
            'correct': true
        }
        ],
        'explication': 'SER\nDistribuição de votos da comunidade\nBE (71%) BD (16%) 13%\nTópico 3'
    }, {
        'question': '79\nVocê tem uma assinatura do Azure que contém uma máquina virtual chamada VM1 e um cofre de chaves do Azure chamado KV1.\nVocê precisa configurar a criptografia para VM1. A solução deve atender aos seguintes requisitos:\n• Armazene e use a chave de criptografia no KV1.\n• Mantenha a criptografia se a VM1 for baixada do Azure.\n• Criptografe o disco do sistema operacional e os discos de dados.\nQual método de criptografia você deve usar?\n',
        'number': '',
        'page': 191,
        'answers': [{
            'text': 'A. chaves gerenciadas pelo cliente\n',
            'correct': false
        }, {
            'text': 'B. Criptografia de disco confidencial\n',
            'correct': false
        }, {
            'text': 'C. Criptografia de Disco Azure\n',
            'correct': true
        }, {
            'text': 'D. criptografia no host',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (91%) 9%'
    }, {
        'question': '81\nVocê tem uma assinatura do Azure que contém uma conta de armazenamento chamada storage1. A conta storage1 contém um contêiner chamado container1.\nVocê precisa configurar o acesso ao container1. A solução deve atender aos seguintes requisitos:\n• Permitir apenas acesso de leitura.\n• Permitir protocolos HTTP e HTTPS.\n• Aplique permissões de acesso a todo o conteúdo do contêiner.\nO que você deve usar?\n',
        'number': '',
        'page': 193,
        'answers': [{
            'text': 'A. uma política de acesso\n',
            'correct': false
        }, {
            'text': 'B. uma assinatura de acesso compartilhado (SAS)\n',
            'correct': true
        }, {
            'text': 'C. Rede de Entrega de Conteúdo do Azure (CDN)\n',
            'correct': false
        }, {
            'text': 'D. chaves de acesso',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)\nTópico 3'
        , 'filters': ['K002']

    }, {
        'question': '82\nVocê precisa criar uma conta de armazenamento do Azure chamada storage1. A solução deve atender aos seguintes requisitos:\n• Suporte ao armazenamento do Azure Data Lake.\n• Minimize os custos de dados acessados \u200b\u200bcom pouca frequência.\n• Replique dados automaticamente para uma região secundária do Azure.\nQuais são as três opções que você deve configurar para armazenamento1? Cada resposta correta apresenta parte da solução.\nNOTA: Cada resposta correta vale um ponto.\n',
        'number': '',
        'page': 193,
        'answers': [{
            'text': 'A. Armazenamento com redundância de zona (ZRS)\n',
            'correct': false
        }, {
            'text': 'B. acesso frio\n',
            'correct': true
        }, {
            'text': 'C. Armazenamento com redundância geográfica (GRS)\n',
            'correct': true
        }, {
            'text': 'D. o nível de acesso quente\n',
            'correct': false
        }, {
            'text': 'E. namespace hierárquico',
            'correct': true
        }
        ],
        'explication': `Bugado na fonte, na visão das alternativas é BCE mas na resposta da fonte esta AC e sem consenso na discussão.
            escolhido a visão BCE 🗳️
            Community vote distribution
            BCE (88%)
            13%`
    },

    {
        'question': `Questão 83 Tópico 3
            
            Você tem uma conta do Azure Storage chamada storage1 que contém dois contêineres chamados container1 e container2. O controle de versão de blob está habilitado para ambos os contêineres.

            Você tira periodicamente instantâneos de blobs de blobs críticos.

            Você cria a seguinte política de gerenciamento de ciclo de vida.

            <img src="imagens/mquestao83topico3.png" alt="imagem da questão"></img>

            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

            OBSERVAÇÃO: Cada seleção correta vale um ponto.
	`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Um instantâneo de blob passa automaticamente para o nível de acesso Cool após 15 dias.',
            'correct': true
        }, {
            'text': 'Uma versão blob no container2 passa automaticamente para o nível de acesso Archive após 30 dias.',
            'correct': false
        }, {
            'text': 'Uma versão reidratada passa automaticamente para o nível de acesso Archive após 30 dias.',
            'correct': false
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Há algumas divergencias quanto a primeira alternativa ser verdadeira ou falsa, mas por não ter uma votação expressiva, foi escolhido 
        a resposta da fonte e algumas pesssoas concordaram.
	`
    },


    {
        'question': `84\nVocê tem uma assinatura do Azure que contém as contas de armazenamento mostradas na tabela a seguir.
            
            <img src="imagens/yquestao84topico3.png" alt="imagem da questão"></img>

           \nQual conta de armazenamento pode ser convertida em replicação de armazenamento com redundância de zona (ZRS)?\n`,
        'number': '',
        'page': 195,
        'answers': [{
            'text': 'A. armazenamento1\n',
            'correct': false
        }, {
            'text': 'B. armazenamento2\n',
            'correct': true
        }, {
            'text': 'C. armazenamento3\n',
            'correct': false
        }, {
            'text': 'D. armazenamento4',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `85\nVocê tem uma assinatura do Azure que contém os dispositivos mostrados na tabela a seguir.
            
            <img src="imagens/yquestao85topico3.png" alt="imagem da questão"></img>

            \nEm quais dispositivos você pode instalar o Azure Storage Explorer?\n`,
        'number': '',
        'page': 196,
        'answers': [{
            'text': 'A. Somente dispositivo1\n',
            'correct': false
        }, {
            'text': 'B. Somente Dispositivo1 e Dispositivo2\n',
            'correct': false
        }, {
            'text': 'C. Somente Dispositivo1 e Dispositivo3\n',
            'correct': false
        }, {
            'text': 'D. Somente Dispositivo1, Dispositivo2 e Dispositivo3\n',
            'correct': true
        }, {
            'text': 'E. Somente Dispositivo1, Dispositivo3 e Dispositivo4',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)'
    },

    {
        'question': `Questão 86 Tópico 3
            Você tem uma assinatura do Azure.
            Você planeja criar a conta do Azure Storage conforme mostrado na exposição a seguir.
            <img src="imagens/rquestao86topico3.png" alt="imagem da questão"></img>
            Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `O número mínimo de cópias da conta de armazenamento será [opção de resposta].`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "1",
                    'correct': false
                }, {
                    'text': "2",
                    'correct': false
                }, {
                    'text': "3",
                    'correct': true
                },
                {
                    'text': "4",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Para reduzir o custo de dados acessados ​​com pouca frequência na conta de armazenamento, você deve modificar a configuração [opção de resposta].',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Camada de acesso (padrão)",
                    'correct': true
                }, {
                    'text': "Desempenho",
                    'correct': false
                }, {
                    'text': "Tipo de conta",
                    'correct': false
                },
                {
                    'text': "Replicação",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            
`
    },



    {
        'question': `Questão 89 Tópico 3
            Você tem uma assinatura do Azure. A assinatura contém uma conta de armazenamento chamada storage1 que tem as regras de gerenciamento de ciclo de vida mostradas na tabela a seguir.
            <img src="imagens/rquestao89topico3parte1.png" alt="imagem da questão"></img>
            Em 1º de junho, você armazena dois blobs em storage1, conforme mostrado na tabela a seguir.
            <img src="imagens/rquestao89topico3parte2.png" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Em 6 de junho, o Arquivo1 será armazenado no nível de acesso Cool.',
            'correct': false
        }, {
            'text': 'Em 7 de junho, o Arquivo2 será armazenado no nível de acesso Cool.',
            'correct': true
        }, {
            'text': 'Em 16 de junho, o Arquivo2 será armazenado na camada de acesso Archive.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `resposta da fonte
        `
        , 'filters': ['K002']

    },

    {
        'question': `Questão 90 Tópico 3
            Você tem uma conta do Azure Storage chamada contoso2024 que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/rquestao90topico3parte1.png" alt="imagem da questão"></img>
            Você tem usuários que têm permissões para contoso2024, conforme mostrado na tabela a seguir.
            <img src="imagens/rquestao90topico3parte2.png" alt="imagem da questão"></img>
            A conta contoso2024 é configurada conforme mostrado na exposição a seguir.
            <img src="imagens/rquestao90topico3parte3.png" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'O usuário1 pode ler o arquivo1.',
            'correct': false
        }, {
            'text': 'O usuário2 pode ler o arquivo2.',
            'correct': false
        }, {
            'text': 'User3 pode ler Arquivo1 e Arquivo2.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Bem votado:
            O usuário NNN 1 não tem a função Storage Blob Data Reader ou Storage Blob Data Contributor para ler o File1. https://learn.microsoft.com/en-us/azure/storage/blobs/assign-azure-role-data-access?tabs=portal
        `
        , 'filters': ['K002']

    },


    
    
    
    {
        'question': '1\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nImplante um cluster do Azure Kubernetes Service (AKS) denominado AKS1.\nVocê precisa implantar um arquivo YAML no AKS1.\nSolução: Na CLI do Azure, você executa az aks.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 204,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/aks/kubernetes-passo a passo\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '2\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nImplante um cluster do Azure Kubernetes Service (AKS) denominado AKS1.\nVocê precisa implantar um arquivo YAML no AKS1.\nSolução: Na CLI do Azure, você executa o cliente kubectl.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 205,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/aks/kubernetes-passo a passo\nDistribuição de votos da comunidade\nUm (100%)\nTópico 4'
    }, {
        'question': '3\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nImplante um cluster do Azure Kubernetes Service (AKS) denominado AKS1.\nVocê precisa implantar um arquivo YAML no AKS1.\nSolução: Na CLI do Azure, você executa azcopy.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 205,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/aks/kubernetes-passo a passo\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '4\nObservação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que\npode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\nVocê tem uma máquina virtual do Azure chamada VM1 que executa o Windows Server 2016.\nVocê precisa criar um alerta no Azure quando mais de dois eventos de erro forem registrados no log de eventos do sistema na VM1 em uma hora.\nSolução: você cria uma conta de armazenamento do Azure e configura assinaturas de acesso compartilhado (SASs). Você instala o Microsoft Monitoring Agent na\nVM1. Você cria um alerta no Azure Monitor e especifica a conta de armazenamento como a origem.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 206,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nEm vez disso: você cria um espaço de trabalho do Azure Log Analytics e define as configurações de dados. Você instala o Microsoft Monitoring Agent na VM1. Você\ncrie um alerta em\nAzure Monitor e especifique o espaço de trabalho Log Analytics como fonte.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview\nDistribuição de votos da comunidade\nB (100%)'
    },

    {
        'question': `Questão 5 Tópico 4
        Você tem uma assinatura do Azure chamada Subscription1. Subscription1 contém os recursos na tabela a seguir.
        <img src="imagens/questao5topico4.png" alt="imagem da questão"></img>
        VNet1 está em RG1. VNet2 está em RG2. Não há conectividade entre VNet1 e VNet2.
        Um administrador chamado Admin1 cria uma máquina virtual do Azure chamada VM1 em RG1. VM1 usa um disco chamado Disk1 e se conecta a VNet1.
        Admin1 então instala um aplicativo personalizado em VM1.
        Você precisa mover o aplicativo personalizado para VNet2. A solução deve minimizar o esforço administrativo.
        Quais duas ações você deve executar? Para responder, selecione as opções apropriadas na área de resposta.
        OBSERVAÇÃO: cada seleção correta vale um ponto.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Primeira ação`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Crie uma interface de rede em RG2",
                    'correct': false
                }, {
                    'text': "Desconecte uma interface de rede",
                    'correct': false
                }, {
                    'text': "Exclua VM1",
                    'correct': true
                },
                {
                    'text': "Mova uma interface de rede para RG2",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Segunda ação: ',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Conecte uma interface de rede",
                    'correct': false
                }, {
                    'text': "Crie uma interface de rede em RG2.",
                    'correct': false
                }, {
                    'text': "Crie uma nova máquina virtual. ",
                    'correct': true
                },
                {
                    'text': "Mova VM1 para RG2.",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Explicacao da fonte rever-
            Não podemos simplesmente mover uma máquina virtual entre redes. O que precisamos fazer é identificar o disco usado pela VM, excluir a VM em si enquanto
            mantemos o disco e recriar a VM na rede virtual de destino e, em seguida, anexar o disco original a ela.
            Referência:
            https://blogs.technet.microsoft.com/canitpro/2014/06/16/step-by-step-move-a-vm-to-a-different-vnet-on-azure/
            https://4sysops.com/archives/move-an-azure-vm-to-another-virtual-network-vnet/#migrate-an-azure-vm-between-vnets
            
        `,
        'filters': [
            'L001', 'K002'
        ]
    },
    
    
    {
        'question': '6\nBaixe um modelo do Azure Resource Manager com base em uma máquina virtual existente. O modelo será usado para implantar 100 sistemas virtuais\nmáquinas.\nVocê precisa modificar o modelo para fazer referência a uma senha administrativa. Você deve evitar que a senha seja armazenada em texto simples.\nO que você deve criar para armazenar a senha?\n',
        'number': '',
        'page': 208,
        'answers': [{
            'text': 'A. um Azure Key Vault e uma política de acesso\n',
            'correct': true
        }, {
            'text': 'B. uma conta de armazenamento do Azure e uma política de acesso\n',
            'correct': false
        }, {
            'text': 'C. um cofre dos Serviços de Recuperação e uma política de backup\n',
            'correct': false
        }, {
            'text': 'D. Proteção de identidade do Azure Active Directory (AD) e uma política do Azure',
            'correct': false
        }
        ],
        'explication': 'A\nVocê pode usar um modelo que permite implantar uma VM simples do Windows recuperando a senha armazenada em um Key Vault. Portanto, o\na senha nunca é colocada em texto simples no arquivo de parâmetros do modelo.\nReferência:\nhttps://azure.microsoft.com/en-us/resources/templates/101-vm-secure-password/\nDistribuição de votos da comunidade\nUm (100%)'
    },

    {
        'question': `Questão 7 Tópico 4
        Você tem os planos do App Service mostrados na tabela a seguir.
        <img src="imagens/questao7topico4parte1.png" alt="imagem da questão"></img>
        Você planeja criar os aplicativos Web do Azure mostrados na tabela a seguir.
       <img src="imagens/questao7topico4parte2.png" alt="imagem da questão"></img>
        Você precisa identificar quais planos do App Service podem ser usados ​​para os aplicativos Web.
        O que você deve identificar? Para responder, selecione as opções apropriadas na área de resposta.
        OBSERVAÇÃO: Cada seleção correta vale um ponto.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `WebApp1`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente ASP1",
                    'correct': false
                }, {
                    'text': "Somente ASP3",
                    'correct': false
                }, {
                    'text': "Somente ASP1 e ASP2",
                    'correct': false
                },
                {
                    'text': "Somente ASP1 e ASP3",
                    'correct': true
                },
                {
                    'text': "Somente ASP1, ASP 2 e ASP3",
                    'correct': false
                }
            ]
        },

        {
            'text': 'WebApp2',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente ASP1",
                    'correct': true
                }, {
                    'text': "Somente ASP3",
                    'correct': false
                }, {
                    'text': "Somente ASP1 e ASP2",
                    'correct': false
                },
                {
                    'text': "Somente ASP1 e ASP3",
                    'correct': false
                },
                {
                    'text': "Somente ASP1, ASP 2 e ASP3",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
        Box 1: ASP1 ASP3 -
        Asp1, ASP3: ASP.NET Core apps can be hosted both on Windows or Linux.
        Not ASP2: The region in which your app runs is the region of the App Service plan it's in.
        Box 2: ASP1 -
        ASP.NET apps can be hosted on Windows only.
        Reference:
        https://docs.microsoft.com/en-us/azure/app-service/quickstart-dotnetcore?pivots=platform-linux https://docs.microsoft.com/enus/azure/app-service/app-service-plan-manage#

            
        `,
            'filters': 
                ['L003']
    },
    {
        'question': `Questão 8 Tópico 4
        HOTSPOT -
        Você cria um conjunto de escala de máquina virtual chamado Scale1. Scale1 é configurado conforme mostrado na exposição a seguir.
        <img src="imagens/questao8topico4.png" alt="imagem da questão"></img>
        Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.
        NOTA: Cada seleção correta vale um ponto.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Se o Scale1 for utilizado a 85 por cento durante seis minutos após ser implantado, o Scale1 estará em execução [opção de resposta]. `,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "2 máquinas virtuais",
                    'correct': false
                }, {
                    'text': "4 máquinas virtuais",
                    'correct': false
                }, {
                    'text': "6 máquinas virtuais",
                    'correct': true
                },
                {
                    'text': "10 máquinas virtuais",
                    'correct': false
                },
                {
                    'text': "20 máquinas virtuais",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Se o Scale1 for utilizado primeiro a 25% por seis minutos após ser implantado e depois utilizado a 50% por seis minutos, o Scale1 estará em execução [opção de resposta]',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "2 máquinas virtuais",
                    'correct': true
                }, {
                    'text': "4 máquinas virtuais",
                    'correct': false
                }, {
                    'text': "6 máquinas virtuais",
                    'correct': false
                },
                {
                    'text': "8 máquinas virtuais",
                    'correct': false
                },
                {
                    'text': "10 máquinas virtuais",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
        Caixa 1: 6 máquinas virtuais -
        A regra de dimensionamento horizontal do Autoscale aumenta o número de VMs em 2 se o limite da CPU for 80% ou mais. A contagem inicial de instâncias é 4 e sobe para 6 quando as 2 instâncias extras de VMs são adicionadas.

        Caixa 2: 2 máquinas virtuais -
        A regra de dimensionamento horizontal do Autoscale diminui o número de VMs em 4 se o limite da CPU for 30% ou menos. A contagem inicial de instâncias é 4 e, portanto, não pode ser reduzida a
        0, pois as instâncias mínimas são definidas como 2. As instâncias são adicionadas somente quando o limite da CPU atinge 80%.
        Referências:
        https://docs.microsoft.com/en-us/azure/azure-monitor/platform/autoscale-overview https://docs.microsoft.com/en-us/azure/azure-monitor/platform/autoscale-best-practices https://docs.microsoft.com/en-us/azure/azure-monitor/platform/autoscale-common-scale-patterns
            
        `
    },

    
    
    
    {
        'question': '9\nVocê planeja automatizar a implantação de um conjunto de dimensionamento de máquinas virtuais que usa a imagem do Windows Server 2016 Datacenter.\nVocê precisa garantir que quando as máquinas virtuais do conjunto de dimensionamento forem provisionadas, elas tenham componentes de servidor web instalados.\nQuais são as duas ações que você deve realizar? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 211,
        'answers': [{
            'text': 'A. Carregue um script de configuração\n',
            'correct': true
        }, {
            'text': 'B. Crie uma conta de automação\n',
            'correct': false
        }, {
            'text': 'C. Crie uma política do Azure\n',
            'correct': false
        }, {
            'text': 'D. Modifique a seção extensionPro le do modelo do Azure Resource Manager\n',
            'correct': true
        }, {
            'text': 'E. Criar um novo conjunto de escala de máquina virtual no portal do Azure',
            'correct': false
        }
        ],
        'explication': 'DE\nOs conjuntos de dimensionamento de máquinas virtuais podem ser usados \u200b\u200bcom o manipulador de extensão Azure Desired State Configuration (DSC). Os conjuntos de dimensionamento de máquinas virtuais fornecem\numa maneira de implantar e gerenciar um grande número de máquinas virtuais e pode aumentar e diminuir de forma elástica em resposta à carga. DSC é usado para\nconfigure as VMs quando elas ficarem on-line para que executem o software de produção.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-dsc\nDistribuição de votos da comunidade\nAD (84%) DE (16%)'
    },

    {
        'question': `Questão 11 Tópico 4 
            Você integra 10 máquinas virtuais do Azure ao Azure Automation State Configuration.
            Você precisa usar o Azure Automation State Configuration para gerenciar a consistência contínua das configurações da máquina virtual.
            Quais três ações você deve executar em sequência? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize-as na ordem correta.
            OBSERVAÇÃO: Mais de uma ordem de opções de resposta está correta. Você receberá crédito por qualquer uma das ordens corretas que selecionar.
        `,
        'number': '',
        'page': 0,
        'answers': [
            [
                {
                    'text': 'Options \n',
                    'options': [
                        { 'text': 'Atribuir tags às máquinas virtuais', 'correct': false, 'index': '-1' },
                        { 'text': 'Verifique o status de conformidade do nó', 'correct': true, 'index': '3' },
                        { 'text': 'Compilar uma configuração em uma configuração de nó', 'correct': true, 'index': '2' },
                        { 'text': 'Carregar uma configuração para a Configuração do Estado da Automação do Azure', 'correct': true, 'index': '1' },
                        { 'text': 'Crie um grupo de gerenciamento', 'correct': false, 'index': '-1' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer \n',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `Comentário mais votado:
             A ordem correta é: 1. Carregar uma configuração para o Azure Automation State Configuration 
             2. Compilar uma configuração em uma configuração de nó 
             3. Verificar o status de conformidade do nó.
        `,
        'typeQuestion': 'dragdrop',
        'filters':[
		'L001',
	    ]
    },
    
    
    
    {
        'question': '12\nVocê tem um modelo do Azure Resource Manager chamado Template1 que é usado para implantar uma máquina virtual do Azure.\nTemplate1 contém o seguinte texto:\nA seção de variáveis \u200b\u200bem Template1 contém o seguinte texto:\n"local": "Europa Ocidental"\nA seção de recursos no Template1 contém o seguinte texto:\nVocê precisa implantar a máquina virtual no local oeste dos EUA usando o Modelo1.\nO que você deveria fazer?\n',
        'number': '',
        'page': 214,
        'answers': [{
            'text': 'A. Modifique o local na seção de recursos para westus\n',
            'correct': true
        }, {
            'text': 'B. Selecione Oeste dos EUA durante a implantação\n',
            'correct': false
        }, {
            'text': 'C. Modifique a localização na seção de variáveis \u200b\u200bpara westus',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': '13\nVocê cria um plano de Serviço de Aplicativo chamado Plan1 e um aplicativo Web do Azure chamado webapp1.\nVocê descobre que a opção de criar um slot de teste não está disponível.\nVocê precisa criar um slot de teste para o Plano1.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 215,
        'answers': [{
            'text': 'A. A partir do Plano1, amplie o plano do Serviço de Aplicativo\n',
            'correct': true
        }, {
            'text': 'B. No webapp1, modifique as configurações do aplicativo\n',
            'correct': false
        }, {
            'text': 'C. No webapp1, adicione um domínio personalizado\n',
            'correct': false
        }, {
            'text': 'D. No Plano1, dimensionar horizontalmente o plano do Serviço de Aplicativo',
            'correct': false
        }
        ],
        'explication': 'A\nO aplicativo deve estar em execução na camada Standard, Premium ou Isolada para que você possa habilitar vários slots de implantação.\nSe o aplicativo ainda não estiver no nível Standard, Premium ou Isolado, você receberá uma mensagem indicando os níveis suportados para ativar o estágio\npublicação. Neste ponto, você tem a opção de selecionar Atualizar e ir para a guia Escala do seu aplicativo antes de continuar.\nAumente a escalabilidade: obtenha mais CPU, memória, espaço em disco e recursos extras, como máquinas virtuais (VMs) dedicadas, domínios e certificados personalizados,\nslots de teste, escalonamento automático e muito mais.\nIncorreta:\nEscalabilidade horizontal: aumente o número de instâncias de VM que executam seu aplicativo. Você pode expandir para até 30 instâncias\nReferência:\nhttps://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots https://docs.microsoft.com/en-us/azure/app-service/manage-scale-\nacima\nDistribuição de votos da comunidade\nUm (100%)\nTópico 4'
    }, {
        'question': '14\nVocê planeja mover um aplicativo local distribuído chamado App1 para uma assinatura do Azure.\nApós a mudança planejada, o App1 será hospedado em diversas máquinas virtuais do Azure.\nVocê precisa garantir que o App1 sempre seja executado em pelo menos oito máquinas virtuais durante a manutenção planejada do Azure.\nO que você deve criar?\n',
        'number': '',
        'page': 215,
        'answers': [{
            'text': 'A. um conjunto de dimensionamento de máquinas virtuais que possui 10 instâncias de máquinas virtuais\n',
            'correct': true
        }, {
            'text': 'B. um Conjunto de Disponibilidade que possui três domínios de falha e um domínio de atualização\n',
            'correct': false
        }, {
            'text': 'C. um conjunto de disponibilidade que possui 10 domínios de atualização e um domínio de falha\n',
            'correct': false
        }, {
            'text': 'D. um conjunto de dimensionamento de máquinas virtuais que possui 12 instâncias de máquinas virtuais',
            'correct': false
        }
        ],
        'explication': 'C\nUm domínio de atualização é um grupo lógico de hardware subjacente que pode passar por manutenção ou ser reinicializado ao mesmo tempo. À medida que você cria VMs\ndentro de um conjunto de disponibilidade, a plataforma Azure distribui automaticamente os seus VMs através destes domínios de atualização. Esta abordagem garante que em\npelo menos uma instância do seu aplicativo permanece sempre em execução enquanto a plataforma Azure passa por manutenção periódica.\nReferência:\nhttp://www.thatlazyadmin.com/azure-fault-update-domains/\nDistribuição de votos da comunidade\nA (55%) C (43%)'
    }, {
        'question': '15\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma máquina virtual do Azure chamada VM1 que executa o Windows Server 2016.\nVocê precisa criar um alerta no Azure quando mais de dois eventos de erro são registrados no log de eventos do sistema na VM1 dentro de uma hora.\nSolução: você cria uma assinatura de evento na VM1. Você cria um alerta no Azure Monitor e especifica VM1 como fonte\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 216,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nEm vez disso: você cria um espaço de trabalho do Azure Log Analytics e define as configurações de dados. Você instala o Microsoft Monitoring Agent na VM1. Você\ncrie um alerta em\nAzure Monitor e especifique o espaço de trabalho Log Analytics como fonte.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview\nDistribuição de votos da comunidade\nB (100%)\nTópico 4'
    }, {
        'question': '16\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma máquina virtual do Azure chamada VM1. A VM1 foi implantada usando um modelo personalizado do Azure Resource Manager chamado ARM1.json.\nVocê recebe uma notificação de que a VM1 será afetada pela manutenção.\nVocê precisa mover a VM1 para um host diferente imediatamente.\nSolução: Na folha Visão geral, você move a máquina virtual para uma assinatura diferente.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 216,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nVocê precisaria reimplantar a VM.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/redeploy-to-new-node\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '17\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma máquina virtual do Azure chamada VM1. A VM1 foi implantada usando um modelo personalizado do Azure Resource Manager chamado ARM1.json.\nVocê recebe uma notificação de que a VM1 será afetada pela manutenção.\nVocê precisa mover a VM1 para um host diferente imediatamente.\nSolução: Na folha Reimplantar, clique em Reimplantar.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 217,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nQuando você reimplanta uma VM, ela move a VM para um novo nó na infraestrutura do Azure e depois a liga novamente, mantendo todos os seus\nopções de configuração e recursos associados.\nReferências:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/redeploy-to-new-node\nDistribuição de votos da comunidade\nUm (100%)\nTópico 4'
    }, {
        'question': '18\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma máquina virtual do Azure chamada VM1. A VM1 foi implantada usando um modelo personalizado do Azure Resource Manager chamado ARM1.json.\nVocê recebe uma notificação de que a VM1 será afetada pela manutenção.\nVocê precisa mover a VM1 para um host diferente imediatamente.\nSolução: na folha Gerenciamento de atualizações, clique em Habilitar.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 217,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nVocê precisaria reimplantar a VM.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/redeploy-to-new-node\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '19\nVocê tem uma assinatura do Azure que contém um aplicativo Web chamado webapp1.\nVocê precisa adicionar um domínio personalizado chamado www.contoso.com ao webapp1.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 218,
        'answers': [{
            'text': 'A. Crie um registro DNS\n',
            'correct': true
        }, {
            'text': 'B. Adicionar uma string de conexão\n',
            'correct': false
        }, {
            'text': 'C. Carregar um certificado.\n',
            'correct': false
        }, {
            'text': 'D. Pare o webapp1.',
            'correct': false
        }
        ],
        'explication': 'A\nVocê pode usar um registro CNAME ou um registro A para mapear um nome DNS personalizado para o Serviço de Aplicativo.\nReferência:\nhttps://docs.microsoft.com/en-us/Azure/app-service/app-service-web-tutorial-custom-domain\nDistribuição de votos da comunidade\nUm (100%)\nTópico 4'
    }, {
        'question': `20\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/mquestao20topico4.png" alt="imagem da questão"></img>
            \nVM1 se conecta ao VNET1.\nVocê precisa conectar VM1 ao VNET2.
            \nSolução: você move VM1 para RG2 e, em seguida, adiciona uma nova interface de rede à VM1.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 218,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nEm vez disso, você deve excluir a VM1. Você recria a VM1 e, em seguida, adiciona a interface de rede para a VM1.\nObservação: ao criar uma máquina virtual (VM) do Azure, você deve criar uma rede virtual (VNet) ou usar uma VNet existente. Você pode alterar a\nsub-rede à qual uma VM está conectada após ela ser criada, mas não pode alterar a VNet.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/network-overview\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `Questão 21 Tópico 4 \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/mquestao21topico4.png" alt="imagem da questão"></img>
            \nVM1 se conecta ao VNET1.\nVocê precisa conectar VM1 ao VNET2.
            \nSolução: você exclui VM1. Você recria a VM1 e, em seguida, cria uma nova interface de rede para VM1 e conecta-a \u200b\u200bà VNET2.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 219,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nVocê deve excluir VM1. Você recria a VM1 e depois adiciona a interface de rede para VM1.\nNota: Ao criar uma máquina virtual (VM) do Azure, você deve criar uma rede virtual (VNet) ou usar uma VNet existente. Você pode alterar o\nsub-rede à qual uma VM está conectada depois de criada, mas não é possível alterar a VNet.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/network-overview\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `Questão 22 Tópico 4 \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir. <img src="imagens/mquestao21topico4.png" alt="imagem da questão"></img> \nVM1 se conecta ao VNET1.\nVocê precisa conectar VM1 ao VNET2.\nSolução: você desativa a VM1 e adiciona uma nova interface de rede à VM1.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 220,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nEm vez disso, você deve excluir VM1. Você recria a VM1 e depois adiciona a interface de rede para VM1.\nNota: Ao criar uma máquina virtual (VM) do Azure, você deve criar uma rede virtual (VNet) ou usar uma VNet existente. Você pode alterar o\nsub-rede à qual uma VM está conectada depois de criada, mas não é possível alterar a VNet.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/network-overview\nDistribuição de votos da comunidade\nB (100%)'
    },

    {
        'question': `Questão 23 Tópico 4
            Você tem uma assinatura do Azure chamada Subscription1 que contém as cotas mostradas na tabela a seguir.
            <img src="imagens/rquestao23topico5parte1.png" alt="imagem da questão"></img>
            Você implanta máquinas virtuais na Subscription1 conforme mostrado na tabela a seguir.
            <img src="imagens/rquestao23topico5parte2.png" alt="imagem da questão"></img>
            Você planeja implantar as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/rquestao23topico5parte3.png" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Você pode implantar o VM3 no oeste dos EUA.',
            'correct': true
        }, {
            'text': 'Você pode implantar o VM4 no oeste dos EUA.',
            'correct': false
        }, {
            'text': 'Você pode implantar o VM5 no oeste dos EUA.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `maioria concordou com a fonte
        `

    },


    
    
    {
        'question': '26\nVocê tem um modelo de implantação chamado Template1 que é usado para implantar 10 aplicativos Web do Azure.\nVocê precisa identificar o que implantar antes de implantar o Modelo1. A solução deve minimizar os custos do Azure.\nO que você deve identificar?\n',
        'number': '',
        'page': 224,
        'answers': [{
            'text': 'A. e gateways de aplicativos do Azure\n',
            'correct': false
        }, {
            'text': 'B. um plano de serviço de aplicativo\n',
            'correct': true
        }, {
            'text': 'C. 10 planos de serviço de aplicativo\n',
            'correct': false
        }, {
            'text': 'D. um Gerenciador de Tráfego do Azure\n',
            'correct': false
        }, {
            'text': 'E. um Gateway de Aplicativo do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nVocê cria aplicativos Web do Azure em um plano do Serviço de Aplicativo.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '28\nVocê tem uma assinatura do Azure que contém uma máquina virtual chamada VM1. VM1 hospeda um aplicativo de linha de negócios que está disponível 24 horas por dia\ndia. VM1 possui uma interface de rede e um disco gerenciado. VM1 usa o tamanho D4s v3.\nVocê planeja fazer as seguintes alterações na VM1:\n✑ Altere o tamanho para D8s v3.\n✑ Adicione um disco gerenciado de 500 GB.\n✑ Adicione a extensão Puppet Agent.\n✑ Ative o gerenciamento de configuração do estado desejado.\nQual alteração causará tempo de inatividade para VM1?\n',
        'number': '',
        'page': 226,
        'answers': [{
            'text': 'A. Habilitar gerenciamento de configuração do estado desejado\n',
            'correct': false
        }, {
            'text': 'B. Adicionar um disco gerenciado de 500 GB\n',
            'correct': false
        }, {
            'text': 'C. Altere o tamanho para D8s v3\n',
            'correct': true
        }, {
            'text': 'D. Adicionar a extensão Puppet Agent',
            'correct': false
        }
        ],
        'explication': 'C\nAo redimensionar a VM, ela deve estar parada.\nReferência:\nhttps://azure.microsoft.com/en-us/blog/resize-virtual-machines/\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': `Questão 29 Tópico 4 
            \nVocê tem um aplicativo chamado App1 que é executado em um aplicativo Web do Azure chamado webapp1.
            \nOs desenvolvedores da sua empresa carregam uma atualização do App1 em um repositório Git chamado Git1.
            \nWebapp1 possui os slots de implantação mostrados na tabela a seguir.

            <img src="imagens/squestao29topico4.png" alt="imagem da questão"></img>
            
            \nVocê precisa garantir que a atualização do App1 seja testada antes de ser disponibilizada aos usuários.\nQuais são as duas ações que você deve realizar? Cada resposta correta apresenta parte da solução.
            \nNOTA: Cada seleção correta vale um ponto.\n`,
        'number': '',
        'page': 227,
        'answers': [{
            'text': 'A. Troque os slots\n',
            'correct': true
        }, {
            'text': 'B. Implante a atualização do App1 no webapp1-prod e teste a atualização\n',
            'correct': false
        }, {
            'text': 'C. Pare webapp1-prod\n',
            'correct': false
        }, {
            'text': 'D. Implante a atualização do App1 no webapp1-test e, em seguida, teste a atualização\n',
            'correct': true
        }, {
            'text': 'E. Pare o webapp1-test',
            'correct': false
        }
        ],
        'explication': 'AD\nDistribuição de votos da comunidade\nAD (100%)'
    }, {
        'question': '30\nVocê tem uma assinatura do Azure chamada Subscription1 que possui os seguintes provedores registrados:\n✑ Autorização\n✑ Automação\n✑ Recursos\n✑ Calcular\n✑ KeyVault\n✑ Rede\n✑ Armazenamento\n✑ Faturamento\n✑ Rede\nA assinatura1 contém uma máquina virtual do Azure chamada VM1 que possui as seguintes configurações:\n✑ Endereço IP privado: 10.0.0.4 (dinâmico)\n✑ Grupo de segurança de rede (NSG): NSG1\n✑ Endereço IP público: Nenhum\n✑ Conjunto de disponibilidade: AVSet\n✑ Sub-rede: 10.0.0.0/24\n✑ Discos gerenciados: Não\n✑ Localização: Leste dos EUA\nVocê precisa registrar todas as tentativas de conexão bem-sucedidas e malsucedidas com a VM1.\nQuais são as três ações que você deve realizar? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 228,
        'answers': [{
            'text': 'A. Habilitar o Observador de Rede do Azure na região do Azure Leste dos EUA.\n',
            'correct': false
        }, {
            'text': 'B. Adicione um monitor de conexão do Azure Network Watcher.\n',
            'correct': false
        }, {
            'text': 'C. Registre o provedor MicrosoftLogAnalytics.\n',
            'correct': false
        }, {
            'text': 'D. Crie uma conta de armazenamento do Azure.\n',
            'correct': true
        }, {
            'text': 'E. Registre o provedor de recursos Microsoft.Insights.',
            correct: true
        }, {
            text: '\nF. Habilitar logs de fluxo do Observador de Rede do Azure.',
            'correct': true
        }
        ],
        'explication': 'AEF\nVocê pode registrar o tráfego de rede que flui através de um NSG com o recurso de registro de fluxo NSG do Network Watcher.\n✑ No portal do Azure, habilite o Network Watcher\n✑ Registre o provedor de Insights. O registro em log de fluxo do NSG requer o provedor Microsoft.Insights.\n✑ Habilite o registro de fluxo NSG. Os dados de log do NSG são gravados em uma conta de Armazenamento do Azure, a Assinatura1 tem armazenamento.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-nsg-ow-logging-portal\nDistribuição de votos da comunidade\nDEF (59%) AEF (33%) 8%'
    }, {
        'question': '31\nVocê precisa implantar um conjunto de dimensionamento de máquinas virtuais do Azure que contenha cinco instâncias o mais rápido possível.\nO que você deveria fazer?\n',
        'number': '',
        'page': 229,
        'answers': [{
            'text': 'A. Implante cinco máquinas virtuais. Modifique as configurações das zonas de disponibilidade para cada máquina virtual.\n',
            'correct': false
        }, {
            'text': 'B. Implante cinco máquinas virtuais. Modifique a configuração Tamanho para cada máquina virtual.\n',
            'correct': false
        }, {
            'text': 'C. Implantar um conjunto de dimensionamento de máquinas virtuais definido para o modo de orquestração VM (máquinas virtuais).\n',
            'correct': false
        }, {
            'text': 'D. Implantar um conjunto de dimensionamento de máquinas virtuais definido para o modo de orquestração ScaleSetVM.',
            'correct': true
        }
        ],
        'explication': 'D\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/orchestration-modes\nDistribuição de votos da comunidade\nD (96%) 4%\nTópico 4'
    }, {
        'question': `Questão 32 Tópico 4
                \nVocê planeja criar os aplicativos Web do Azure mostrados na tabela a seguir.
                
                <img src="imagens/squestao32topico4.jpg" alt="imagem da questão"></img>

                \nQual é o número mínimo de planos de Serviço de Aplicativo que você deve criar para os aplicativos Web?\n`,
        'number': '',
        'page': 229,
        'answers': [{
            'text': 'A. 1\n',
            'correct': false
        }, {
            'text': 'B. 2\n',
            correct: true
        }, {
            'text': ' C.3\n',
            correct: false
        }, {
            text: 'D. 4',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nB (96%) 4%'
    }, {
        'question': '34\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscription1. Subscription1 contém um grupo de recursos denominado RG1. RG1 contém recursos que foram\nimplantado usando modelos.\nVocê precisa visualizar a data e hora em que os recursos foram criados no RG1.\nSolução: na folha Assinaturas, selecione a assinatura e clique em Implantação programática.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 231,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nNa lâmina RG1, clique em Implantações. Você verá um histórico de implantação para o grupo de recursos.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create- rst-template?tabs=azure-powershell\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `Questão 35 Tópico 4 
            \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário.
             Cada questão da série contém uma solução única que\npode atingir os objetivos declarados.
              Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.
              \nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela.
               Como resultado, estas perguntas não aparecerão na tela de revisão.
               \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
               <img src="imagens/squestao35topico4.png" alt="imagem da questão"></img>

               \nVM1 se conecta ao VNET1.\nVocê precisa conectar VM1 ao VNET2.\nSolução: você cria uma nova interface de rede e depois adiciona a interface de rede à VM1.
               \nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 232,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nVocê deve excluir VM1. Você recria a VM1 e depois adiciona a interface de rede para VM1.\nNota: Ao criar uma máquina virtual (VM) do Azure, você deve criar uma rede virtual (VNet) ou usar uma VNet existente. Você pode alterar o\nsub-rede à qual uma VM está conectada depois de criada, mas não é possível alterar a VNet.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/network-overview\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `Questão 36 Tópico 4
            \nVocê tem um locatário do Azure Active Directory (Azure AD) chamado adatum.com que contém os usuários mostrados na tabela a seguir.
            <img src="imagens/squestao36topico4.png" alt="imagem da questão"></img>
            \nAdatum.com tem as seguintes configurações:\n✑ Os usuários podem ingressar em dispositivos no Azure AD se estiverem definidos como Usuário1.\n✑ Administradores locais adicionais em dispositivos ingressados \u200b\u200bno Azure AD estão definidos como Nenhum.\nVocê implanta o Windows 10 em um computador chamado Computer1. O Usuário1 ingressa no Computador1 em adatum.com.
            \nVocê precisa identificar a associação do grupo Administrador local no Computador1.\nQuais usuários são membros do grupo Administradores local?\n`,
        'number': '',
        'page': 233,
        'answers': [{
            'text': 'A. Somente User1\n',
            'correct': false
        }, {
            'text': 'B. Apenas User2\n',
            'correct': false
        }, {
            'text': 'C. Somente User1 e User2\n',
            'correct': true
        }, {
            'text': 'D. Somente User1, User2 e User3\n',
            'correct': false
        }, {
            'text': 'E. User1, User2, User3 e User4',
            'correct': false
        }
        ],
        'explication': 'C\nOs usuários podem ingressar dispositivos no Azure AD – essa configuração permite selecionar os usuários que podem registrar seus dispositivos como dispositivos ingressados \u200b\u200bno Azure AD.\nO padrão é Todos.\nAdministradores locais adicionais em dispositivos ingressados \u200b\u200bno Azure AD – você pode selecionar os usuários que recebem direitos de administrador local em um dispositivo.\nOs utilizadores adicionados aqui são adicionados à função de Administradores de Dispositivos no Azure AD. Administradores globais, aqui User2, no Azure AD e proprietários de dispositivos\nrecebem direitos de administrador local por padrão.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/active-directory/devices/device-management-azure-portal\nDistribuição de votos da comunidade\nC (100%)'
    }, 

    {
        'question': `Questão 37 Tópico 4

            Você tem assinaturas do Azure chamadas Subscription1 e Subscription2.
            Subscription1 tem os seguintes grupos de recursos:

            <img src="imagens/squestao37topico4.png" alt="imagem da questão"></img>

            RG1 inclui um aplicativo da web chamado App1 no local da Europa Ocidental.
            Subscription2 contém os seguintes grupos de recursos:

            <img src="imagens/squestao37topico4parte2.png" alt="imagem da questão"></img>

            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'App1 pode ser movido para RG2',
            'correct': false
        }, {
            'text': 'App1 pode ser movido para RG3',
            'correct': true
        }, {
            'text': 'App1 pode ser movido para RG4',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Muitas controvérsias se esta certo ou não. Não dá para dar 100% 
            de precisão que está certo ou não a resposta escolhida. Resposta colocada com base nos comentários
        `

    },
    
    
    {
        'question': `Questão 40 Tópico 4
            \nVocê tem uma assinatura do Azure chamada Subscrição1 que contém os recursos mostrados na tabela a seguir.
            
            <img src="imagens/squestao40topico4parte1.png" alt="imagem da questão"></img>

            \nVocê cria máquinas virtuais em Subscription1 conforme mostrado na tabela a seguir.
            
            <img src="imagens/squestao40topico4parte2.png" alt="imagem da questão"></img>

            \nVocê planeja usar o Vault1 para fazer backup do maior número possível de máquinas virtuais.\nQuais máquinas virtuais podem ter backup no Vault1?\n`,
        'number': '',
        'page': 238,
        'answers': [{
            'text': 'A. Somente VM1\n',
            'correct': false
        }, {
            'text': 'B. Apenas VM3 e VMC\n',
            'correct': false
        }, {
            'text': 'C. VM1, VM2, VM3, VMA, VMB e VMC\n',
            'correct': false
        }, {
            'text': 'D. Somente VM1, VM3, VMA e VMC\n',
            'correct': true
        }, {
            'text': 'E. Somente VM1 e VM3',
            'correct': false
        }
        ],
        'explication': 'D\nPara criar um cofre para proteger máquinas virtuais, o cofre deve estar na mesma região que as máquinas virtuais. Se você tiver máquinas virtuais em\ndiversas regiões, criar um\nCofre dos Serviços de Recuperação em cada região.\nReferência:\nhttps://docs.microsoft.com/bs-cyrl-ba/azure/backup/backup-create-rs-vault\nDistribuição de votos da comunidade\nD (100%)'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '41\nVocê tem um cluster do Azure Kubernetes Service (AKS) chamado AKS1.\nVocê precisa configurar o escalonador automático de cluster para AKS1.\nQuais são as duas ferramentas que você deve usar? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 239,
        'answers': [{
            'text': 'A. o comando kubectl\n',
            'correct': false
        }, {
            'text': 'B. o comando az aks\n',
            'correct': true
        }, {
            'text': 'C. o cmdlet Set-AzVm\n',
            'correct': false
        }, {
            'text': 'D. o portal do Azure\n',
            'correct': true
        }, {
            'text': 'E. o cmdlet Set-AzAks',
            'correct': false
        }
        ],
        'explication': 'AB\nR: O exemplo a seguir usa o comando kubectl autoscale para dimensionar automaticamente o número de pods na implantação azure-vote-front. Se média\nA utilização da CPU em todos os pods excede 50% do uso solicitado, o escalonador automático aumenta os pods até um máximo de 10 instâncias. A\num mínimo de 3 instâncias é então de nido para a implantação: kubectl implantação de escala automática azure-vote-front --cpu-percent=50 --min=3 --max=10\nB: Use o comando az aks update para habilitar e configurar o escalonador automático de cluster no pool de nós do cluster existente.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-scale https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler\nDistribuição de votos da comunidade\nBD (68%) AB (28%) 2%\nTópico 4'
    }, {
        'question': '42\nVocê cria os seguintes recursos em uma assinatura do Azure:\n✑ Uma instância do Registro de Contêiner do Azure chamada Registry1\n✑ Um cluster do Azure Kubernetes Service (AKS) denominado Cluster1\nVocê cria uma imagem de contêiner chamada App1 em sua estação de trabalho administrativa.\nVocê precisa implantar o App1 no Cluster1.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 239,
        'answers': [{
            'text': 'A. Execute o comando docker push.\n',
            'correct': true
        }, {
            'text': 'B. Criar um plano de Serviço de Aplicativo.\n',
            'correct': false
        }, {
            'text': 'C. Execute o comando de compilação az acr.\n',
            'correct': false
        }, {
            'text': 'D. Execute o comando az aks create.',
            'correct': false
        }
        ],
        'explication': 'C\nVocê deve fazer login e enviar uma imagem de contêiner para o Container Registry.\nExecute o comando az acr build para criar e enviar por push a imagem do contêiner. compilação az acr \\\n--image contoso-site \\\n--registry $ACR_NAME\\\n-- o Docker o .\nReferência:\nhttps://docs.microsoft.com/en-us/learn/modules/aks-deploy-container-app/5-exercise-deploy-app\nDistribuição de votos da comunidade\nA (77%) C (23%)'
    }, {
        'question': `Questão 43 Tópico 4
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/squestao43topico4.jpg" alt="imagem da questão"></img>
            \nVocê precisa configurar um grupo de posicionamento de proximidade para VMSS1.\nQuais grupos de posicionamento de proximidade você deve usar?\n`,
        'number': '',
        'page': 240,
        'answers': [{
            'text': 'A. Apenas proximidade2\n',
            'correct': true
        }, {
            'text': 'B. Proximidade1, Proximidade2 e Proximidade3\n',
            'correct': false
        }, {
            'text': 'C. Somente Proximidade1\n',
            'correct': false
        }, {
            'text': 'D. Somente Proximidade1 e Proximidade3',
            'correct': false
        }
        ],
        'explication': 'A\nA localização do Grupo de Recursos do VMSS1 é a localização RG2, que é o Oeste dos EUA.\nApenas Proximity2, que também em RG2, está localizado no oeste dos EUA\nReferência:\nhttps://azure.microsoft.com/en-us/blog/introduzindo-proximity-placement-groups/\nDistribuição de votos da comunidade\nA (88%) 13%\nTópico 4'
    }, {
        'question': '44\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscription1. Subscription1 contém um grupo de recursos denominado RG1. RG1 contém recursos que foram\nimplantado usando modelos.\nVocê precisa visualizar a data e hora em que os recursos foram criados no RG1.\nSolução: Na folha Assinaturas, selecione a assinatura e clique em Provedores de recursos.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 240,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '45\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscription1. Subscription1 contém um grupo de recursos denominado RG1. RG1 contém recursos que foram\nimplantado usando modelos.\nVocê precisa visualizar a data e hora em que os recursos foram criados no RG1.\nSolução: Na folha RG1, clique em Script de automação.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 241,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nNa folha RG1, clique em Implantações. Você vê um histórico de implantação do grupo de recursos.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create-rst-template?tabs=azure-powershell\nDistribuição de votos da comunidade\nB (100%)\nTópico 4'
    }, {
        'question': '46\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscription1. Subscription1 contém um grupo de recursos denominado RG1. RG1 contém recursos que foram\nimplantado usando modelos.\nVocê precisa visualizar a data e hora em que os recursos foram criados no RG1.\nSolução: Na folha RG1, clique em Implantações.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 241,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nNa folha RG1, clique em Implantações. Você vê um histórico de implantação do grupo de recursos.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create-rst-template?tabs=azure-powershell\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': '47\nVocê tem uma assinatura do Azure chamada Subscription1.\nVocê implanta uma máquina virtual Linux chamada VM1 na Assinatura1.\nVocê precisa monitorar as métricas e os logs da VM1.\nO que você deve usar?\n',
        'number': '',
        'page': 242,
        'answers': [{
            'text': 'A. Azure HDInsight\n',
            'correct': false
        }, {
            'text': 'B. Extensão de diagnóstico do Linux (LAD) 3.0\n',
            'correct': true
        }, {
            'text': 'C. a extensão AzurePerformanceDiagnostics\n',
            'correct': false
        }, {
            'text': 'D. Serviços de Análise do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nA extensão de diagnóstico do Linux deve ser usada para fazer download do agente da extensão de diagnóstico (LAD) no servidor Linux.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/extensions/diagnostics-linux\nDistribuição de votos da comunidade\nB (89%) 11%'
    }, {
        'question': '49\nVocê planeja implantar três máquinas virtuais do Azure denominadas VM1, VM2 e VM3. As máquinas virtuais hospedarão um aplicativo web chamado App1.\nVocê precisa garantir que pelo menos duas máquinas virtuais estejam disponíveis se um único datacenter do Azure ficar indisponível.\nO que você deve implantar?\n',
        'number': '',
        'page': 244,
        'answers': [{
            'text': 'A. todas as três máquinas virtuais em uma única zona de disponibilidade\n',
            'correct': false
        }, {
            'text': 'B. todas as máquinas virtuais em um único conjunto de disponibilidade\n',
            'correct': false
        }, {
            'text': 'C. cada máquina virtual em uma zona de disponibilidade separada\n',
            'correct': true
        }, {
            'text': 'D. cada máquina virtual em um conjunto de disponibilidade separado',
            'correct': false
        }
        ],
        'explication': 'C\nUse zonas de disponibilidade para se proteger contra falhas no nível do datacenter.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/manage-availability https://docs.microsoft.com/en-us/azure/virtual-\nmáquinas/janelas/conjuntos de disponibilidade de tutorial\nDistribuição de votos da comunidade\nC (83%) A (17%)\nTópico 4'
    }, {
        'question': '50\nVocê tem uma máquina virtual do Azure chamada VM1 que executa o Windows Server 2019.\nVocê salva VM1 como um modelo chamado Template1 na biblioteca do Azure Resource Manager.\nVocê planeja implantar uma máquina virtual chamada VM2 do Modelo1.\nO que você pode configurar durante a implantação da VM2?\n',
        'number': '',
        'page': 244,
        'answers': [{
            'text': 'A. sistema operacional\n',
            'correct': false
        }, {
            'text': 'B. nome de usuário do administrador\n',
            'correct': false
        }, {
            'text': 'C. tamanho da máquina virtual\n',
            'correct': false
        }, {
            'text': 'D. grupo de recursos',
            'correct': true
        }
        ],
        'explication': 'B\nAo implantar uma máquina virtual a partir de um modelo, você deve especificar:\n✑ o nome e o local do Grupo de Recursos da VM\n✑ o nome de usuário e senha do administrador\n✑ um nome DNS exclusivo para o IP público\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/ps-template\nDistribuição de votos da comunidade\nD (81%) Outros'
    }, {
        'question': '51\nVocê tem uma assinatura do Azure que contém uma máquina virtual do Azure chamada VM1. VM1 executa um aplicativo de relatórios financeiros chamado App1 que não\nsuportar múltiplas instâncias ativas.\nNo final de cada mês, o uso da CPU para VM1 atinge o pico quando o App1 é executado.\nVocê precisa criar um runbook agendado para aumentar o desempenho do processador da VM1 no final de cada mês.\nQue tarefa você deve incluir no runbook?\n',
        'number': '',
        'page': 245,
        'answers': [{
            'text': 'A. Adicione o agente Azure Performance Diagnostics à VM1.\n',
            'correct': false
        }, {
            'text': 'B. Modifique a propriedade de tamanho da VM da VM1.\n',
            'correct': true
        }, {
            'text': 'C. Adicione VM1 a um conjunto de dimensionamento.\n',
            'correct': false
        }, {
            'text': 'D. Aumente a cota de vCPU da assinatura.\n',
            'correct': false
        }, {
            'text': 'E. Adicione uma extensão Desired State Configuration (DSC) à VM1.',
            'correct': false
        }
        ],
        'explication': 'E\nReferência:\nhttps://docs.microsoft.com/en-us/azure/automation/automation-quickstart-dsc-con guration\nDistribuição de votos da comunidade\nB (92%) 4%\nTópico 4'
    }, {
        'question': '52\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 245,
        'answers': [{
            'text': 'A. Centro de Implantação no Serviço de Aplicativo do Azure\n',
            'correct': false
        }, {
            'text': 'B. Uma extensão de configuração de estado desejado (DSC)\n',
            'correct': true
        }, {
            'text': 'C. o cmdlet New-AzCon guraçãoAssignment\n',
            'correct': false
        }, {
            'text': 'D. um perfil de configuração de dispositivo do Microsoft Intune',
            'correct': false
        }
        ],
        'explication': 'B\nAs extensões de máquinas virtuais do Azure são pequenos pacotes que executam configuração e automação pós-implantação em máquinas virtuais do Azure.\nNo exemplo a seguir, a CLI do Azure é usada para implantar uma extensão de script personalizada em uma máquina virtual existente, que instala um Nginx\nservidor web. conjunto de extensão az vm \\\n--resource-group meuGrupo de recursos \\\n--vm-name minhaVM --name customScript \\\n--publisher Microsoft.Azure.Extensions\\\n--settings \'{"commandToExecute": "apt-get install -y nginx"},\nObservação:\nExistem várias versões desta questão no exame. A pergunta tem duas respostas corretas:\n1. uma extensão Desired State Configuration (DSC)\n2. Extensão de script personalizado do Azure\nA pergunta pode ter outras opções de resposta incorretas, incluindo as seguintes:\n✑ o cmdlet Publish-AzVMDscCon guração\n✑ Insights de aplicativos do Azure\nReferência:\nhttps://docs.microsoft.com/en-us/azure/architecture/framework/devops/automation-con guração\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '55\nVocê tem uma máquina virtual do Azure chamada VM1 que executa o Windows Server 2019. A VM foi implantada usando configurações de unidade padrão.\nVocê faz login na VM1 como um usuário chamado User1 e executa as seguintes ações:\n✑ Crie arquivos na unidade C.\n✑ Crie arquivos na unidade D.\n✑ Modifique o tempo limite do protetor de tela.\n✑ Altere o plano de fundo da área de trabalho.\nVocê planeja reimplantar a VM1.\nQuais alterações serão perdidas após a reimplantação da VM1?\n',
        'number': '',
        'page': 250,
        'answers': [{
            'text': 'A. o tempo limite do protetor de tela modificado\n',
            'correct': false
        }, {
            'text': 'B. o novo plano de fundo da área de trabalho\n',
            'correct': false
        }, {
            'text': 'C. os novos arquivos na unidade D\n',
            'correct': true
        }, {
            'text': 'D. os novos arquivos na unidade C',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': '56\nVocê tem uma assinatura do Azure.\nVocê tem uma máquina virtual local chamada VM1. As configurações para VM1 são mostradas na exposição. (Clique na guia Exposição.)\nVocê precisa garantir que pode usar os discos anexados à VM1 como modelo para máquinas virtuais do Azure.\nO que você deve modificar na VM1?\n',
        'number': '',
        'page': 251,
        'answers': [{
            'text': 'A. a memória\n',
            'correct': false
        }, {
            'text': 'B. os adaptadores de rede\n',
            'correct': false
        }, {
            'text': 'C. o disco rígido\n',
            'correct': true
        }, {
            'text': 'D. o processador\n',
            'correct': false
        }, {
            'text': 'E. Serviços de Integração',
            'correct': false
        }
        ],
        'explication': 'C\nNa exposição vemos que o disco está no formato VHDX.\nAntes de carregar uma máquina virtual (VM) do Windows local para o Microsoft Azure, você deve preparar o disco rígido virtual (VHD ou\nVHDX). O Azure suporta apenas VMs de geração 1 que estejam no formato de arquivo VHD e tenham um disco de tamanho fixo. O tamanho máximo permitido para o\nVHD tem 1.023 GB. Você pode converter uma VM de geração 1 do sistema de arquivos VHDX para VHD e de um disco de expansão dinâmica para tamanho xed.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/prepare-for-upload-vhd-image\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': `Questão 59 Tópico 4
            \nVocê tem um aplicativo Web do Azure chamado App1. App1 possui os slots de implantação mostrados na tabela a seguir:
            <img src="imagens/squestao59topico4.png" alt="imagem da questão"></img>
            \nNo webapp1-test, você testa várias alterações no App1.\nVocê faz backup do App1.\nVocê troca webapp1-test por webapp1-prod e descobre que App1 está enfrentando problemas de desempenho.
            \nVocê precisa reverter para a versão anterior do App1 o mais rápido possível.\nO que você deveria fazer?\n`,
        'number': '',
        'page': 255,
        'answers': [{
            'text': 'A. Reimplantar App1\n',
            'correct': false
        }, {
            'text': 'B. Troque os slots\n',
            'correct': true
        }, {
            'text': 'C. Clonar aplicativo1\n',
            'correct': false
        }, {
            'text': 'D. Restaurar o backup do App1',
            'correct': false
        }
        ],
        'explication': 'B\nQuando você troca os slots de implantação, o Azure troca os endereços IP virtuais dos slots de origem e de destino, trocando assim as URLs do\nslots. Podemos facilmente reverter a implantação trocando de volta.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '61\nVocê planeja fazer backup de uma máquina virtual do Azure chamada VM1.\nVocê descobre que o status da Pré-verificação de backup exibe um status de Aviso.\nQual é a possível causa do status de Aviso?\n',
        'number': '',
        'page': 257,
        'answers': [{
            'text': 'A. VM1 está parada.\n',
            'correct': false
        }, {
            'text': 'B. VM1 não tem a versão mais recente do Azure VM Agent (WaAppAgent.exe) instalada.\n',
            'correct': true
        }, {
            'text': 'C. VM1 possui um disco não gerenciado.\n',
            'correct': false
        }, {
            'text': 'D. Um cofre dos Serviços de Recuperação não está disponível.',
            'correct': false
        }
        ],
        'explication': 'B\nO estado de Aviso indica um ou mais problemas na configuração da VM que podem levar a falhas de backup e fornece etapas recomendadas para\ngarantir backups bem-sucedidos. Não ter o VM Agent mais recente instalado, por exemplo, pode fazer com que os backups falhem intermitentemente e caiam neste\nclasse de questões.\nReferência:\nhttps://azure.microsoft.com/en-us/blog/azure-vm-backup-pre-checks/\nDistribuição de votos da comunidade\nB (100%)\nTópico 4'
    }, {
        'question': '62\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma máquina virtual do Azure chamada VM1. A VM1 foi implantada usando um modelo personalizado do Azure Resource Manager chamado ARM1.json.\nVocê recebe uma notificação de que a VM1 será afetada pela manutenção.\nVocê precisa mover a VM1 para um host diferente imediatamente.\nSolução: Na folha Visão geral, você move a máquina virtual para um grupo de recursos diferente.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 257,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nVocê precisaria reimplantar a VM.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/windows/redeploy-to-new-node\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '64\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma máquina virtual do Azure chamada VM1 que executa o Windows Server 2016.\nVocê precisa criar um alerta no Azure quando mais de dois eventos de erro são registrados no log de eventos do sistema na VM1 dentro de uma hora.\nSolução: você cria um espaço de trabalho do Azure Log Analytics e define as configurações do agente. Você instala o Microsoft Monitoring Agent\nna VM1. Você cria um alerta no Azure Monitor e especifica o espaço de trabalho Log Analytics como fonte.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 259,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nOs alertas no Azure Monitor podem identificar informações importantes no seu repositório Log Analytics. Eles são criados por regras de alerta que automaticamente\nexecutar pesquisas de log em intervalos regulares e, se os resultados da pesquisa de log corresponderem a critérios específicos, um registro de alerta será criado e poderá ser\nconfigurado para executar uma resposta automatizada.\nO agente Log Analytics coleta dados de monitoramento do sistema operacional convidado e cargas de trabalho de máquinas virtuais no Azure, outras nuvens\nfornecedores e no local. Recolhe dados num espaço de trabalho Log Analytics.\nReferências:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-response https://docs.microsoft.com/en-us/azure/azure-\nvisão geral do monitor/plataforma/agentes\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `Questão 66 Tópico 4
            \nVocê tem aplicativos Web nas regiões do Azure Oeste dos EUA, Centro dos EUA e Leste dos EUA.\nVocê tem os planos do Serviço de Aplicativo mostrados na tabela a seguir.
            <img src="imagens/squestao66topico4.png" alt="imagem da questão"></img>
            \nPlaneia criar um plano adicional de Serviço de Aplicações denominado ASP5 que utilizará o sistema operativo Linux.\nVocê precisa identificar em qual dos locais usados \u200b\u200batualmente você pode implantar o ASP5.\nO que você deve recomendar?\n`,
        'number': '',
        'page': 262,
        'answers': [{
            'text': 'A. Oeste dos EUA, Centro dos EUA ou Leste dos EUA\n',
            'correct': true
        }, {
            'text': 'B. Somente região central dos EUA\n',
            'correct': false
        }, {
            'text': 'C. Apenas Leste dos EUA\n',
            'correct': false
        }, {
            'text': 'D. Apenas oeste dos EUA',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/app-service/app-service-plan-manage\nDistribuição de votos da comunidade\nA (92%) 4%\nTópico 4'
    }, {
        'question': '67\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 262,
        'answers': [{
            'text': 'A. o cmdlet New-AzCon guraçãoAssignment\n',
            'correct': false
        }, {
            'text': 'B. uma extensão Desired State Configuration (DSC)\n',
            'correct': true
        }, {
            'text': 'C. Proxy de Aplicativo do Azure Active Directory (Azure AD)\n',
            'correct': false
        }, {
            'text': 'D. Informações de aplicação do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-overview\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '69\nObservação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que\npode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\nVocê implanta um cluster do Azure Kubernetes Service (AKS) chamado AKS1.\nVocê precisa implantar um arquivo YAML no AKS1.\nSolução: no Azure Cloud Shell, você executa az aks.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 263,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nPara implantar um arquivo YAML, o comando é:\nkubectl apply -f < le_name>.yaml\nReferência:\nhttps://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '70\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma máquina virtual do Azure chamada VM1 que executa o Windows Server 2016.\nVocê precisa criar um alerta no Azure quando mais de dois eventos de erro são registrados no log de eventos do sistema na VM1 dentro de uma hora.\nSolução: você cria um espaço de trabalho do Azure Log Analytics e define as configurações de dados. Você adiciona a extensão de VM do Microsoft Monitoring Agent ao\nVM1. Você cria um alerta no Azure Monitor e especifica o espaço de trabalho Log Analytics como fonte.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 264,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nVocê deve instalar o Microsoft Monitoring Agent na VM1 e não a extensão de VM do Microsoft Monitoring Agent.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview\nDistribuição de votos da comunidade\nB (67%) A (33%)\nTópico 4'
    }, {
        'question': '71\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma máquina virtual do Azure chamada VM1 que executa o Windows Server 2016.\nVocê precisa criar um alerta no Azure quando mais de dois eventos de erro são registrados no log de eventos do sistema na VM1 dentro de uma hora.\nSolução: você cria um espaço de trabalho do Azure Log Analytics e define as configurações de dados. Você instala o Microsoft Monitoring Agent na VM1. Você\ncrie um alerta em\nAzure Monitor e especifique o espaço de trabalho Log Analytics como fonte.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 264,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nOs alertas no Azure Monitor podem identificar informações importantes no seu repositório Log Analytics. Eles são criados por regras de alerta que automaticamente\nexecutar pesquisas de log em intervalos regulares e, se os resultados da pesquisa de log corresponderem a critérios específicos, um registro de alerta será criado e poderá ser\nconfigurado para executar uma resposta automatizada.\nO agente Log Analytics coleta dados de monitoramento do sistema operacional convidado e cargas de trabalho de máquinas virtuais no Azure, outras nuvens\nfornecedores e no local. Recolhe dados num espaço de trabalho Log Analytics.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-response https://docs.microsoft.com/en-us/azure/azure-\nvisão geral do monitor/plataforma/agentes\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `Quesão 72 Tópico 4
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/squestao72topico4parte1.png" alt="imagem da questão"></img>
            \nTodas as máquinas virtuais executam o Windows Server 2016.\nNa VM1, você faz backup de uma pasta chamada Folder1 conforme mostrado na exposição a seguir.
            <img src="imagens/squestao72topico4parte2.png" alt="imagem da questão"></img>
            \nVocê planeja restaurar o backup em uma máquina virtual diferente.\nVocê precisa restaurar o backup para VM2.\nO que você deve fazer primeiro?\n`,
        'number': '',
        'page': 265,
        'answers': [{
            'text': 'A. Na VM1, instale o recurso Backup do Windows Server.\n',
            'correct': false
        }, {
            'text': 'B. Na VM2, instale o agente de serviços de recuperação do Microsoft Azure.\n',
            'correct': true
        }, {
            'text': 'C. Na VM1, instale o agente de serviços de recuperação do Microsoft Azure.\n',
            'correct': false
        }, {
            'text': 'D. Na VM2, instale o recurso Backup do Windows Server.',
            'correct': false
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/backup/backup-azure-restore-windows-server\nDistribuição de votos da comunidade\nB (92%) 8%'
    }, {
        'question': `Questão 74 Tópico 4
            \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscrição1 que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/squestao74topico4.png" alt="imagem da questão"></img>
            \nA assinatura1 também inclui uma rede virtual chamada VNET2. VM1 se conecta a uma rede virtual chamada VNET2 usando uma interface de rede\ndenominado NIC1.\nVocê precisa criar uma nova interface de rede chamada NIC2 para VM1.\nSolução: você cria NIC2 em RG1 e no oeste dos EUA.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 268,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nA máquina virtual à qual você conecta uma interface de rede e a rede virtual à qual você a conecta devem existir no mesmo local, aqui no oeste dos EUA,\ntambém chamada de região.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface\nDistribuição de votos da comunidade\nA (75%) B (25%)'
    }, {
        'question': `Questão 75 Tópico 4 \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscrição1 que contém os recursos mostrados na tabela a seguir.
        <img src="imagens/squestao74topico4.png" alt="imagem da questão"></img>
        \nA assinatura1 também inclui uma rede virtual chamada VNET2. VM1 se conecta a uma rede virtual chamada VNET2 usando uma interface de rede\ndenominado NIC1.\nVocê precisa criar uma nova interface de rede chamada NIC2 para VM1.\nSolução: você cria NIC2 em RG2 e na região central dos EUA.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 269,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nA máquina virtual à qual você conecta uma interface de rede e a rede virtual à qual você a conecta devem existir no mesmo local, aqui no oeste dos EUA,\ntambém chamada de região.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `Questão 76 Tópico 4
            \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscrição1 que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/squestao74topico4.png" alt="imagem da questão"></img>
            \nA assinatura1 também inclui uma rede virtual chamada VNET2. VM1 se conecta a uma rede virtual chamada VNET2 usando uma interface de rede\ndenominado NIC1.\nVocê precisa criar uma nova interface de rede chamada NIC2 para VM1.\nSolução: você cria NIC2 em RG2 e no oeste dos EUA.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 270,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nA máquina virtual à qual você conecta uma interface de rede e a rede virtual à qual você a conecta devem existir no mesmo local, aqui no oeste dos EUA,\ntambém chamada de região.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `Questão 77 Tópico 4 
            \nVocê desenvolve o seguinte modelo do Azure Resource Manager (ARM) para criar um grupo de recursos e implantar uma conta do Armazenamento do Azure no\ngrupo de recursos.
            <img src="imagens/gquestao77topico4.png" alt="imagem da questão"></img>
            \nQual cmdlet você deve executar para implantar o modelo?\n`,
        'number': '',
        'page': 271,
        'answers': [{
            'text': 'A. New-AzResource\n',
            'correct': false
        }, {
            'text': 'B. New-AzResourceGroupDeployment\n',
            'correct': false
        }, {
            'text': 'C. New-AzTenantDeployment\n',
            'correct': false
        }, {
            'text': 'D. New-AzDeployment',
            'correct': true
        }
        ],
        'explication': 'B\nEscopo de implantação.\nVocê pode direcionar sua implantação para um grupo de recursos, assinatura, grupo de gerenciamento ou locatário. Dependendo do escopo da implantação,\nvocê usa comandos diferentes.\nPara implantar num grupo de recursos, utilize New-AzResourceGroupDeployment.\nIncorreta:\nNão C: para implantar em um locatário, use New-AzTenantDeployment.\nNão D: para implantar em uma assinatura, use New-AzSubscriptionDeployment, que é um alias do cmdlet New-AzDeployment.\nPara implementar num grupo de gestão, utilize New-AzManagementGroupDeployment.\nNão A: O cmdlet New-AzResource cria um recurso do Azure, como um site, um servidor de Banco de Dados SQL do Azure ou um Banco de Dados SQL do Azure, em um'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '79\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 274,
        'answers': [{
            'text': 'A. o cmdlet Publish-AzVMDscCon guração\n',
            'correct': false
        }, {
            'text': 'B. Informações sobre aplicativos do Azure\n',
            'correct': false
        }, {
            'text': 'C. Extensão de script personalizado do Azure\n',
            'correct': true
        }, {
            'text': 'D. um perfil de configuração de dispositivo do Microsoft Endpoint Manager',
            'correct': false
        }
        ],
        'explication': 'C\nUtilize modelos do Azure Resource Manager para instalar aplicações em conjuntos de escala de máquinas virtuais com a Extensão de Script Personalizado.\nObservação: a Extensão de Script Personalizado baixa e executa scripts em VMs do Azure. Esta extensão é útil para configuração pós-implantação,\ninstalação de software ou qualquer outra tarefa de configuração/gerenciamento.\nPara ver a Extensão de Script Personalizado em ação, crie um conjunto de dimensionamento que instale o servidor Web NGINX e produza o nome do host do conjunto de dimensionamento\nInstância de VM.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/tutorial-install-apps-template\nDistribuição de votos da comunidade\nC (95%) 5%'
    },
    {
        'question': `Questão 80 Tópico 4
        Você tem uma assinatura do Azure. A assinatura contém uma máquina virtual que executa o Windows 10.
        Você precisa associar a máquina virtual a um domínio do Active Directory.
        Como você deve preencher o modelo do Azure Resource Manager (ARM)? Para responder, selecione as opções apropriadas na área de resposta.
        NOTA: Cada seleção correta vale um ponto.

        <img src="imagens/Xquestao80topico4.jpg" alt="imagem da questão"></img>


`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `type:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': '"Extensions"',
                    'correct': false
                }, {
                    'text': '"Microsoft.Compute/VirtualMachines"',
                    'correct': false
                }, {
                    'text': '"Microsoft.Comput/VirtualMachines/extensions"',
                    'correct': true
                },
               
            ]
        },

        {
            'text': '',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': '"ProtectedSettings":{',
                    'correct': true
                }, {
                    'text': '"Settings":{',
                    'correct': false
                }, {
                    'text': '"Statuses":{',
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `********
            
`
    },

    

    {
        'question': `Questão 84 Tópico 4

        Você tem uma assinatura do Azure.
        Você cria o seguinte arquivo chamado Deploy.json.
        <img src="imagens/Xquestao84topico4parte1.png" alt="imagem da questão"></img>
        Você se conecta à assinatura e executa os seguintes comandos.
        <img src="imagens/Xquestao84topico4parte2.png" alt="imagem da questão"></img>
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto.

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'Os comandos criarão quatro novos recursos.',
            'correct': true
        }, {
            'text': 'Os comandos criarão contas de armazenamento na região oeste do Azure dos EUA.',
            'correct': false
        }, {
            'text': 'A primeira conta de armazenamento criada terá um prefixo 0.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*****
        `
        , 'filters': ['K002']

    },


    
    
    
    {
        'question': '85\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 282,
        'answers': [{
            'text': 'A. Extensão de script personalizado do Azure\n',
            'correct': true
        }, {
            'text': 'B. Centro de Implantação no Serviço de Aplicativo do Azure\n',
            'correct': false
        }, {
            'text': 'C. o cmdlet Publish-AzVMDscCon guração\n',
            'correct': false
        }, {
            'text': 'D. o cmdlet New-AzCon guraçãoAssignment',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)'
    },
    {
        'question': `Questão 87 Tópico 4
            Você tem um aplicativo Web do Azure App Service chamado app1.
            Você configura o dimensionamento automático conforme mostrado na exposição a seguir.
            <img src="imagens/tquestao87topico4parte1.png" alt="imagem da questão"></img>
            Você configura os critérios da regra de dimensionamento automático conforme mostrado na exposição a seguir.
            <img src="imagens/tquestao87topico4parte2.png" alt="imagem da questão"></img>
            Use os menus suspensos para selecionar a opção de resposta que responde a cada pergunta com base nas informações apresentadas no gráfico.
        `,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [
            {
            'text': `Depois que o uso da CPU atingir 80% por 15 minutos, [opção de resposta] estará em execução`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "1 instância",
                    'correct': false
                }, {
                    'text': "2 instância",
                    'correct': true
                }, {
                    'text': "3 instância",
                    'correct': false
                },
                {
                    'text': "4 instância",
                    'correct': false
                },
                {
                    'text': "5 instância",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Depois que a primeira instância de expansão for criada, o tempo mínimo antes da criação de uma instância adicional será [opção de resposta].',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "1 minuto",
                    'correct': false
                }, {
                    'text': "5 minutos",
                    'correct': false
                }, {
                    'text': "10 minutos",
                    'correct': false
                },
                {
                    'text': "15 minutos",
                    'correct': true
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `A fonte e a maioria votou 2 e 15 mas há algumas dúvidas se na verdade seria 3 instâncias ou 5 minutos
            
        `
        , 'filters': ['K002']
    },
    
    {
        'question': `Questão 88 Tópico 4 
            \nVocê tem uma assinatura do Azure.\nVocê planeja implantar as instâncias de contêiner do Azure mostradas na tabela a seguir.
            <img src="imagens/squestao88topico4.png" alt="imagem da questão"></img>
            \nQuais instâncias você pode implantar em um grupo de contêineres?\n`,
        'number': '',
        'page': 286,
        'answers': [{
            'text': 'A. Somente instância1\n',
            'correct': false
        }, {
            'text': 'B. Apenas instância2\n',
            'correct': false
        }, {
            'text': 'C. Somente Instância1 e Instância2\n',
            'correct': false
        }, {
            'text': 'D. Somente Instância3 e Instância4',
            'correct': true
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nD (96%) 4%\nTópico 4'
    }, {
        'question': '89\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 286,
        'answers': [{
            'text': 'A. Extensão de script personalizado do Azure\n',
            'correct': true
        }, {
            'text': 'B. Centro de Implantação no Serviço de Aplicativo do Azure\n',
            'correct': false
        }, {
            'text': 'C. o cmdlet New-AzCon guraçãoAssignment\n',
            'correct': false
        }, {
            'text': 'D. Proxy de aplicativo do Azure AD',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `90\nVocê tem uma assinatura do Azure que possui os endereços IP públicos
            mostrados na tabela a seguir.
            <img src="imagens/yquestao90topico4.png" alt="imagem da questão"></img>
            
            \nVocê planeja implantar uma instância do Azure Firewall Premium chamada FW1.
            \nQuais endereços IP você pode usar?\n`,
        'number': '',
        'page': 287,
        'answers': [{
            'text': 'A. Somente IP2\n',
            'correct': false
        }, {
            'text': 'B. Somente IP1 e IP2\n',
            'correct': true
        }, {
            'text': 'C. Somente IP1, IP2 e IP5\n',
            'correct': false
        }, {
            'text': 'D. Somente IP1, IP2, IP4 e IP5',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nB (91%) 7%'
        , 'filters': ['K002']
    },

    {
        'question': `Questão 92 Tópico 4
        Você precisa configurar um novo aplicativo do Azure App Service chamado WebApp1. A solução deve atender aos seguintes requisitos:

        • O WebApp1 deve ser capaz de verificar um nome de domínio personalizado de app.contoso.com.
        • O WebApp1 deve ser capaz de escalar automaticamente até oito instâncias.
        • Os custos e o esforço administrativo devem ser minimizados.

        Qual plano de preços você deve escolher e qual tipo de registro você deve usar para verificar o domínio? Para responder, selecione as opções apropriadas na área de resposta.
        `,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Plano de preços:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Básico",
                    'correct': false
                }, {
                    'text': "Grátis",
                    'correct': false
                }, {
                    'text': "Compartilhado",
                    'correct': false
                },
                {
                    'text': "Padrão",
                    'correct': true
                }
            ]
        },

        {
            'text': 'Tipo de registro:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "A",
                    'correct': false
                }, {
                    'text': "AAAA",
                    'correct': false
                }, {
                    'text': "PTR",
                    'correct': false
                },
                {
                    'text': "TXT",
                    'correct': true
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Com: Para verificar um domínio, o Azure usa registros TXT e MX.
            
`
        , 'filters': ['K002']
    },


    {
        'question': `Questão 93 Tópico 4

            Você tem uma assinatura do Azure que contém as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/Xquestao93topico4parte1 (1).png" alt="imagem da questão"></img>
            Você cria uma Azure Compute Gallery chamada ComputeGallery1, conforme mostrado na exposição da Azure Compute Gallery. (Clique na guia Azure Compute Gallery
            .)
            <img src="imagens/Xquestao93topico4parte1 (2).png" alt="imagem da questão"></img>
            Na ComputeGallery1, você cria uma definição de imagem de máquina virtual chamada Image1, conforme mostrado na exposição de definição de imagem. (Clique na guia
            Definição de imagem.)
            <img src="imagens/Xquestao93topico4parte1 (3).png" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'O disco do sistema operacional da VM1 pode ser usado como fonte para uma versão do Image1.',
            'correct': true
        }, {
            'text': 'O disco do sistema operacional da VM2 pode ser usado como fonte para uma versão do Image1.',
            'correct': true
        }, {
            'text': 'O disco do sistema operacional do VM3 pode ser usado como fonte para uma versão do Image1.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*****
        `

    },



    
    {
        'question': `Questão 94 Tópico 4 \nVocê planeja criar os aplicativos Web do Azure mostrados na tabela a seguir.
            <img src="imagens/squestao94topico4.png" alt="imagem da questão"></img>
            \nQual é o número mínimo de planos de Serviço de Aplicativo que você deve criar para os aplicativos Web?\n`,
        'number': '',
        'page': 291,
        'answers': [{
            'text': '1\n',
            'correct': false
        }, {
            'text': 'B. 2\n',
            'correct': true
        }, {
            'text': 'C.3',
            'correct': false
        }, {
            'text': '\nD. 4',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (95%) 5%'
        , 'filters': ['K002']
    },


    {
        'question': `Questão 95 Tópico 4

        Você tem uma assinatura do Azure que contém os grupos de recursos mostrados na tabela a seguir.
        <img src="imagens/questao95topico4parte1 (1).png" alt="imagem da questão"></img>
        Você cria o seguinte modelo do Azure Resource Manager (ARM) chamado deploy.json.
        <img src="imagens/questao95topico4parte1 (2).png" alt="imagem da questão"></img>
        Você implanta o modelo executando o seguinte cmdlet.
        <img src="imagens/questao95topico4parte1 (3).png" alt="imagem da questão"></img>
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'O modelo cria um grupo de recursos denominado RGO na região Leste do Azure dos EUA.',
            'correct': true
        }, {
            'text': 'O modelo cria quatro novos grupos de recursos.',
            'correct': false
        }, {
            'text': 'O modelo cria um grupo de recursos denominado RG3 na região oeste do Azure dos EUA.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*****
        `

    },
    
    
    
    
    {
        'question': `Questão 96 Tópico 4
            \nVocê tem um aplicativo do Serviço de Aplicativo do Azure chamado App1 que contém duas instâncias em execução.
            \nVocê tem uma regra de escalonamento automático configurada conforme mostrado na exposição a seguir.
            <img src="imagens/tquestao96topico4.png" alt="imagem da questão"></img>
            \nPara a configuração de condição de escala de limites de instância, defina Máximo como 5.
            \nDurante um período de 30 minutos, o App1 usa 80% da memória disponível.
            \nQual é o número máximo de instâncias do App1 durante o período de 30 minutos?\n`,
        'number': '',
        'page': 293,
        'answers': [{
            'text': 'A. 2\n',
            'correct': false
        }, {
            'text': 'B. 3\n',
            'correct': false
        }, {
            'text': 'C. 4\n',
            'correct': false
        }, {
            'text': 'D. 5',
            'correct': true
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nD (58%) B (41%)'
        , 'filters': ['K002']
    }, {
        'question': '98\nVocê tem um locatário do Azure AD chamado contoso.com.\nVocê tem uma assinatura do Azure que contém um aplicativo Web do Serviço de Aplicativo do Azure chamado App1 e um cofre de chaves do Azure chamado KV1. KV1 contém um\ncertificado curinga para contoso.com.\nVocê tem um usuário chamado user1@contoso.com ao qual foi atribuída a função de Proprietário para App1 e KV1.\nVocê precisa configurar o App1 para usar o certificado curinga do KV1.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 295,
        'answers': [{
            'text': 'A. Crie uma política de acesso para KV1 e atribua a entidade de segurança do Serviço de Aplicativo do Microsoft Azure à política.\n',
            'correct': false
        }, {
            'text': 'B. Atribuir uma identidade de usuário gerenciado ao App1.\n',
            'correct': true
        }, {
            'text': 'C. Configure o KV1 para usar o sistema de autorização de controle de acesso baseado em função (RBAC).\n',
            'correct': false
        }, {
            'text': 'D. Crie uma política de acesso para KV1 e atribua a política ao Usuário1.',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nB (56%) A (44%)\nTópico 4'
    }, {
        'question': `Questão 99 Tópico 4 
            \nVocê tem uma assinatura do Azure.\nVocê planeja implantar os recursos mostrados na tabela a seguir.
            <img src="imagens/squestao99topico4.png" alt="imagem da questão"></img>
            \nVocê precisa criar um único modelo do Azure Resource Manager (ARM) que será usado para implantar os recursos.\nQual recurso deve ser adicionado à seção depende da VM1?`,
        'number': '',
        'page': 295,
        'answers': [{
            'text': 'A. VNET1\n',
            'correct': false
        }, {
            'text': 'B. NIC1\n',
            'correct': true
        }, {
            'text': 'C. IP1',
            'correct': false
        }, {
            'text': 'D.NSG1',
            'correct': false
        }],
        'explication': 'B\nDistribuição de votos da comunidade\nB (93%) 7%'
    }, {
        'question': `Questão 100 Tópico 4 
            \nVocê tem uma assinatura do Azure.\nVocê cria o seguinte modelo do Azure Resource Manager (ARM) chamado Template.json.
            <img src="imagens/squestao100topico4.png" alt="imagem da questão"></img>
            \nVocê precisa implantar Template.json.\nQual cmdlet do PowerShell você deve executar do Azure Cloud Shell?\n`,
        'number': '',
        'page': 296,
        'answers': [{
            'text': 'A. New-AzSubscriptionDeployment\n',
            'correct': true
        }, {
            'text': 'B. New-AzManagementGroupDeployment\n',
            'correct': false
        }, {
            'text': 'C. New-AzResourceGroupDeployment\n',
            'correct': false
        }, {
            'text': 'D. New-AzTenantDeployment',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nA (77%) D (18%)5%'
    }, {
        'question': '101\nVocê tem uma assinatura do Azure que contém um grupo de recursos chamado RG1.\nVocê planeja criar uma conta de armazenamento chamada storage1.\nVocê tem um arquivo Bicep chamado File1.\nVocê precisa modificar o Arquivo1 para que ele possa ser usado para automatizar a implantação do armazenamento1 no RG1.\nQual propriedade você deve modificar?',
        'number': '',
        'page': 297,
        'answers': [{
            'text': '\nUm tipo\n',
            'correct': false
        }, {
            'text': 'B. escopo',
            'correct': true
        }, {
            'text': 'C.sku',
            'correct': false
        }, {
            'text': 'D. localização',
            'correct': false
        }],
        'explication': 'A\nDistribuição de votos da comunidade\nB (68%) D (20%) 12%'
        ,
        'filters':[
            'K001'
        ]
    },

    {
        'question': `Questão 102 Tópico 4

        Sua empresa compra uma nova assinatura do Azure.
        Você cria um arquivo chamado Deploy.json, conforme mostrado na exposição a seguir.
        <img src="imagens/questao102topico4.png" alt="imagem da questão"></img>
        Você se conecta à assinatura e executa o seguinte cmdlet.
        New-AzDeployment -Location westus -TemplateFile “deploy.json”
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        OBSERVAÇÃO: Cada seleção correta vale um ponto.

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            

            'text': 'Você pode implantar uma máquina virtual no RG1.',
            'correct': true
        }, {
            'text': 'Você pode implantar uma máquina virtual no RG2.',
            'correct': false
        }, {
            'text': 'É possível criar manualmente um grupo de recursos denominado RG3.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*****
        `
        ,
        'filters':[
            'K001'
        ]

    },
    
    
    
    {
        'question': `Questão 103 Tópico 4
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/squestao103topico4.png" alt="imagem da questão"></img>
            \nVocê precisa configurar um grupo de posicionamento de proximidade para VMSS1.\nQuais grupos de posicionamento de proximidade você deve usar?\n`,
        'number': '',
        'page': 301,
        'answers': [{
            'text': 'A. Apenas proximidade2\n',
            'correct': false
        }, {
            'text': 'B. Proximidade1, Proximidade2 e Proximidade3\n',
            'correct': false
        }, {
            'text': 'C. Somente Proximidade1\n',
            'correct': true
        }, {
            'text': 'D. Somente Proximidade1 e Proximidade3',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    },


    {
        'question': `Questão 104 Tópico 4
            Você tem uma assinatura do Azure que contém as redes virtuais mostradas na tabela a seguir.
            <img src="imagens/questao104topico4parte1 (1).png" alt="imagem da questão"></img>
            A assinatura contém as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/questao104topico4parte1 (2).png" alt="imagem da questão"></img>
            A assinatura contém os aplicativos da Web do Azure App Service mostrados na tabela a seguir.
            <img src="imagens/questao104topico4parte1 (3).png" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
                    
                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'WebApp1 pode se comunicar com VM2.',
            'correct': true
        }, {
            'text': 'O NSG1 controla o tráfego de entrada para WebApp1.',
            'correct': false
        }, {
            'text': 'WebApp2 pode se comunicar com VM1.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*****
        `

    },
    

    
    {
        'question': `Questão 105 Tópico 4 
            \nVocê tem uma assinatura do Azure chamada Subscrição1 que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/squestao105topico4parte1.png" alt="imagem da questão"></img>
            \nVocê cria máquinas virtuais em Subscription1 conforme mostrado na tabela a seguir.
            <img src="imagens/squestao105topico4parte2.png" alt="imagem da questão"></img>
            \nVocê planeja usar o Vault1 para fazer backup do maior número possível de máquinas virtuais.\nQuais máquinas virtuais podem ter backup no Vault1?\n`,
        'number': '',
        'page': 303,
        'answers': [{
            'text': 'A. Somente VM1\n',
            'correct': false
        }, {
            'text': 'B. Apenas VM3 e VMC\n',
            'correct': false
        }, {
            'text': 'C. VM1, VM2, VM3, VMA, VMB e VMC\n',
            'correct': false
        }, {
            'text': 'D. Somente VM1, VM3, VMA e VMC\n',
            'correct': true
        }, {
            'text': 'E. Somente VM1 e VM3',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)\nTópico 4'
    }, {
        'question': '106\nVocê tem uma assinatura do Azure que contém um registro de contêiner do Azure chamado ContReg1.\nVocê habilita o usuário Admin para ContReg1.\nQual nome de usuário você pode usar para fazer login no ContReg1?',
        'number': '',
        'page': 303,
        'answers': [{
            'text': 'A. Uma raíz\n',
            'correct': false
        }, {
            'text': 'B. admin\n',
            'correct': false
        }, {
            'text': 'C. administrador',
            'correct': false
        }, {
            'text': '\nD.ContReg1',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nD (84%) B (16%)'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': `Questão 4 Tópico 5
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/squestao4topico5parte1.png" alt="imagem da questão"></img>

            \nLB1 é configurado conforme mostrado na tabela a seguir.
            <img src="imagens/squestao4topico5parte2.png" alt="imagem da questão"></img>

            \nVocê planeja criar novas regras NAT de entrada que atendam aos seguintes requisitos:\n✑ Forneça acesso à Área de Trabalho Remota para VM1 pela Internet usando a porta 3389.
            \n✑ Forneça acesso à Área de Trabalho Remota para VM2 pela Internet usando a porta 3389.\nO que você deve criar no LB1 antes de criar as novas regras NAT de entrada?\n`,
        'number': '',
        'page': 307,
        'answers': [{
            'text': 'A. um endereço IP de front-end\n',
            'correct': true
        }, {
            'text': 'B. uma regra de balanceamento de carga\n',
            'correct': false
        }, {
            'text': 'C. uma investigação de saúde\n',
            'correct': false
        }, {
            'text': 'D. um pool de back-end',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nA (70%) B (29%)'
    }, {
        'question': `Questão 7 Tópico 5
            \nVocê tem as redes virtuais do Azure mostradas na tabela a seguir.
            <img src="imagens/squestao7topico5.png" alt="imagem da questão"></img>
            \nPara quais redes virtuais você pode estabelecer uma conexão de peering da VNet1?\n`,
        'number': '',
        'page': 310,
        'answers': [{
            'text': 'A. Somente VNet2 e VNet3\n',
            'correct': false
        }, {
            'text': 'B. Somente VNet2\n',
            'correct': false
        }, {
            'text': 'C. Somente VNet3 e VNet4\n',
            'correct': true
        }, {
            'text': 'D. VNet2, VNet3 e VNet4',
            'correct': false
        }
        ],
        'explication': 'C\nOs espaços de endereço não devem sobrepor-se para permitir o emparelhamento VNet.\nRespostas incorretas:\nA, B, D: O espaço de endereço para VNet2 se sobrepõe ao VNet1. Portanto, não podemos estabelecer um peering entre VNet2 e VNet1.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/tutorial-connect-virtual-networks-portal https://docs.microsoft.com/en-\nus/azure/virtual-network/virtual-networks-faq#vnet-peering\nDistribuição de votos da comunidade\nC (100%)'
        , 'filters': ['K002']
    }, {
        'question': '8\nVocê tem uma assinatura do Azure que contém uma rede virtual chamada VNet1. VNet1 contém quatro sub-redes denominadas Gateway, Perimeter, NVA e\nProdução.\nA sub-rede NVA contém dois dispositivos virtuais de rede (NVAs) que realizarão a inspeção do tráfego de rede entre a sub-rede Perimeter e a sub-rede Perimeter.\nSub-rede de produção.\nVocê precisa implementar um balanceador de carga do Azure para as NVAs. A solução deve atender aos seguintes requisitos:\n✑ Os NVAs devem ser executados em uma configuração ativa-ativa que use failover automático.\n✑ O balanceador de carga deve balancear a carga do tráfego para dois serviços na sub-rede de Produção. Os serviços têm endereços IP diferentes.\nQuais são as três ações que você deve realizar? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 311,
        'answers': [{
            'text': 'A. Implantar um balanceador de carga básico\n',
            'correct': false
        }, {
            'text': 'B. Implantar um balanceador de carga padrão\n',
            'correct': true
        }, {
            'text': 'C. Adicionar duas regras de balanceamento de carga que tenham portas HA e IP flutuante habilitados\n',
            'correct': true
        }, {
            'text': 'D. Adicionar duas regras de balanceamento de carga que tenham portas HA habilitadas e IP flutuante desabilitado\n',
            'correct': false
        }, {
            'text': 'E. Adicione uma configuração IP de front-end, um pool de back-end e uma investigação de integridade',
            'correct': false
        }, {
            'text': '\nF. Adicione uma configuração IP de front-end, dois pools de back-end e uma investigação de integridade',
            'correct': true
        }
        ],
        'explication': 'BCF\nUm balanceador de carga padrão é necessário para as portas HA.\nSão necessários dois pools de back-end, pois há dois serviços com endereços IP diferentes.\nA regra de IP flutuante é usada onde as portas de back-end são reutilizadas.\nRespostas incorretas:\nE: As portas HA não estão disponíveis para o balanceador de carga básico.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-standard-overview https://docs.microsoft.com/en-us/azure/load-\nvisão geral do balanceador/balanceador de carga-multivip\nDistribuição de votos da comunidade\nBDE (39%) BCF (39%) BCE (20%)'
    }, {
        'question': '9\nVocê tem uma assinatura do Azure chamada Subscrição1 que contém duas redes virtuais do Azure chamadas VNet1 e VNet2. VNet1 contém uma VPN\ngateway nomeado\nVPNGW1 que usa roteamento estático. Há uma conexão VPN site a site entre sua rede local e a VNet1.\nEm um computador chamado Client1 que executa o Windows 10, você configura uma conexão VPN ponto a site com a VNet1.\nVocê configura o peering de rede virtual entre VNet1 e VNet2. Verifique se é possível conectar-se à VNet2 por meio da rede local. Cliente1\nnão consegue se conectar ao VNet2.\nVocê precisa garantir que pode conectar o Client1 à VNet2.\nO que você deveria fazer?\n',
        'number': '',
        'page': 312,
        'answers': [{
            'text': 'A. Baixe e reinstale o pacote de configuração do cliente VPN no Client1.\n',
            'correct': true
        }, {
            'text': 'B. Selecione Permitir trânsito de gateway na VNet1.\n',
            'correct': false
        }, {
            'text': 'C. Selecione Permitir trânsito de gateway na VNet2.\n',
            'correct': false
        }, {
            'text': 'D. Habilitar BGP em VPNGW1',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-point-to-site-routing\nDistribuição de votos da comunidade\nA (89%) 11%'
    },

    {
        'question': `Questão 10 Tópico 5

            Você tem uma assinatura do Azure. A assinatura contém máquinas virtuais que executam o Windows Server 2016 e são configuradas conforme mostrado na tabela a seguir.
            <img src="imagens/questao10topico5parte2.png" alt="imagem da questão"></img>
            Você cria uma zona pública de DNS do Azure chamada adatum.com e uma zona privada de DNS do Azure chamada contoso.com.
            Você cria um link de rede virtual para contoso.com conforme mostrado na exposição a seguir.
            <img src="imagens/questao10topico5parte1.jpg" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione N

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Quando a VM1 é iniciada, um registro para VM1 é adicionado à zona DNS contoso.com.',
            'correct': true
        }, {
            'text': 'Quando a VM2 é iniciada, um registro para VM2 é adicionado à zona DNS contoso.com.',
            'correct': true
        }, {
            'text': 'Quando o VM3 é iniciado, um registro para VM3 é adicionado à zona DNS do adatum.com.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*******
        `

    },
    
    
    
    {
        'question': `Questão 11 Tópico 5
            \nVocê tem uma assinatura do Azure que contém os recursos da tabela a seguir.
            <img src="imagens/squestao11topico5.png" alt="imagem da questão"></img>
            \nA quais sub-redes você pode aplicar o NSG1?\n`,
        'number': '',
        'page': 314,
        'answers': [{
            'text': 'A. apenas as sub-redes na VNet1\n',
            'correct': false
        }, {
            'text': 'B. apenas as sub-redes em VNet2 e VNet3\n',
            'correct': false
        }, {
            'text': 'C. as sub-redes apenas na VNet2\n',
            'correct': false
        }, {
            'text': 'D. as sub-redes apenas na VNet3\n',
            'correct': true
        }, {
            'text': 'E. as sub-redes em VNet1, VNet2 e VNet3',
            'correct': false
        }
        ],
        'explication': 'D\nTodos os recursos do Azure são criados numa região e subscrição do Azure. Um recurso só pode ser criado em uma rede virtual que exista no mesmo\nregião e assinatura como recurso.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-vnet-plan-design-arm\nDistribuição de votos da comunidade\nD (100%)'
    },

    {
        'question': `Questão 12 Tópico 5
        Você tem uma assinatura do Azure que contém duas redes virtuais chamadas VNet1 e VNet2. As máquinas virtuais se conectam às redes virtuais.
        As redes virtuais têm os espaços de endereço e as sub-redes configuradas conforme mostrado na tabela a seguir.
        <img src="imagens/Xquestao12topico5parte1.png" alt="imagem da questão"></img>
        Você precisa adicionar o espaço de endereço de 10.33.0.0/16 à VNet1. A solução deve garantir que os hosts na VNet1 e na VNet2 possam se comunicar.
        Quais três ações você deve executar em sequência? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e
        organize-as na ordem correta.
`,
        'number': '31',
        'page': 11,
        'answers': [
            
            [
                {
                    'text': '',
                    'options': [
                        { 'text': 'Remova VNet1.', 'correct': false, 'index': '-1' },
                        { 'text': 'Adicione o espaço de endereço 10.33.0.0/16 à VNet1.', 'correct': true, 'index': '2' },
                        { 'text': 'Crie uma nova rede virtual chamada VNet1.', 'correct': false, 'index': '-1' },
                        { 'text': 'Na ligação de peering em VNet2, permita o trânsito do gateway.', 'correct': false, 'index': '-1' },
                        { 'text': 'Recrie o peering entre VNet1 e VNet2.', 'correct': true, 'index': '3' },
                        { 'text': 'Na ligação de peering em VNet1, permita o trânsito do gateway.', 'correct': false, 'index': '-1' },
                        { 'text': 'Remova o peering entre VNet1 e VNet2.', 'correct': true, 'index': '1' },

                    ],
                    'function': 'origin'

                },
                {
                    'text': '',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `**** fontee
            Etapa 1: Remova o peering entre Vnet1 e VNet2.
            Você não pode adicionar intervalos de endereços ou excluir intervalos de endereços do espaço de endereços de uma rede virtual depois que uma rede virtual é pareada com outra
            rede virtual.
            Para adicionar ou remover intervalos de endereços, exclua o peering, adicione ou remova os intervalos de endereços e, em seguida, recrie o peering.
            Etapa 2: Adicione o espaço de endereço 10.44.0.0/16 à VNet1.
            Etapa 3: Recrie o peering entre VNet1 e VNet2
            Referência:
            https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-peering
        `,
        'typeQuestion': 'dragdrop'
    },

    {
        'question': `Questão 13 Tópico 5

        Você tem uma assinatura do Azure que contém os grupos de recursos mostrados na tabela a seguir.
        <img src="imagens/questao13topico5parte1 (2).png" alt="imagem da questão"></img>
        RG1 contém os recursos mostrados na tabela a seguir.
        <img src="imagens/questao13topico5parte1 (2).png" alt="imagem da questão"></img>
        VM1 está em execução e se conecta a NIC1 e Disk1. NIC1 se conecta a VNET1.
        RG2 contém um endereço IP público chamado IP2 que está no local East US. IP2 não é atribuído a uma máquina virtual.
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
           
                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'Você pode mover o armazenamento1 para RG2.',
            'correct': true
        }, {
            'text': 'Você pode mover NIC1 para RG2.',
            'correct': true
        }, {
            'text': 'Se você mover IP2 para RG1, a localização do IP2 mudará.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `******
        `

    },
    
    
    {
        'question': '14\nVocê tem um aplicativo Web do Azure chamado webapp1.\nVocê tem uma rede virtual chamada VNET1 e uma máquina virtual do Azure chamada VM1 que hospeda um banco de dados MySQL. VM1 se conecta ao VNET1.\nVocê precisa garantir que o webapp1 possa acessar os dados hospedados na VM1.\nO que você deveria fazer?\n',
        'number': '',
        'page': 318,
        'answers': [{
            'text': 'A. Implantar um balanceador de carga interno\n',
            'correct': false
        }, {
            'text': 'B. Parear VNET1 com outra rede virtual\n',
            'correct': false
        }, {
            'text': 'C. Conecte webapp1 ao VNET1\n',
            'correct': true
        }, {
            'text': 'D. Implantar um Gateway de Aplicativo do Azure',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': `Questão 15 tópico 5 
            Você cria uma VM do Azure chamada VM1 que executa o Windows Server 2019.
            VM1 está configurado conforme mostrado na exposição. (Clique na guia Exposição.)
            <img src="imagens/jquestao15topico5.png" alt="imagem da questão"></img>
            Você precisa ativar a configuração de estado desejado para VM1.
            O que você deve fazer primeiro?
            ` ,
         'number': '',
        'page': 319,
        'answers': [{
            'text': 'A. Conecte-se à VM1.\n',
            'correct': false
        }, {
            'text': 'B. Inicie a VM1.\n',
            'correct': true
        }, {
            'text': 'C. Capture um instantâneo da VM1.\n',
            'correct': false
        }, {
            'text': 'D. Configure um nome DNS para VM1.',
            'correct': false
        }
        ],
        'explication': 'B\nO status é Parado (Desalocado).\nA extensão DSC para Windows requer que a máquina virtual alvo seja capaz de comunicar com o Azure.\nA VM precisa ser iniciada.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-windows\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '16\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 320,
        'answers': [{
            'text': 'A. IP flutuante (retorno direto do servidor) para desativado\n',
            'correct': false
        }, {
            'text': 'B. Persistência de sessão para Nenhuma\n',
            'correct': false
        }, {
            'text': 'C. IP flutuante (retorno direto do servidor) para Habilitado\n',
            'correct': false
        }, {
            'text': 'D. Persistência de sessão para IP do cliente',
            'correct': true
        }
        ],
        'explication': 'D\nCom Sticky Sessions, quando um cliente inicia uma sessão em um de seus servidores web, a sessão permanece nesse servidor específico. Para configurar um Azure\nBalanceador de carga para\nSessões fixas definem a persistência da sessão para o IP do cliente ou para o IP e protocolo do cliente.\nNa imagem a seguir você pode ver a configuração da sessão fixa:\nObservação:\n✑ O IP do cliente e o protocolo especificam que solicitações sucessivas do mesmo endereço IP do cliente e combinação de protocolo serão tratadas pelo\nmesma máquina virtual.\n✑ O IP do cliente especifica que solicitações sucessivas do mesmo endereço IP do cliente serão tratadas pela mesma máquina virtual.\nReferência:\nhttps://cloudopszone.com/con gure-azure-load-balancer-for-sticky-sessions/\nDistribuição de votos da comunidade\nD (100%)'
    }, {
        'question': '17\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém os seguintes recursos:\n✑ Uma rede virtual que possui uma sub-rede chamada Subnet1\n✑ Dois grupos de segurança de rede (NSGs) denominados NSG-VM1 e NSG-Subnet1\n✑ Uma máquina virtual chamada VM1 que tenha as configurações necessárias do Windows Server para permitir conexões de Área de Trabalho Remota\nNSG-Subnet1 tem apenas as regras de segurança de entrada padrão.\nO NSG-VM1 tem as regras de segurança de entrada padrão e a seguinte regra de segurança de entrada personalizada:\n✑ Prioridade: 100\n✑ Fonte: Qualquer\n✑ Intervalo de portas de origem: *\n✑ Destino: *\n✑ Intervalo de portas de destino: 3389\n✑ Protocolo: UDP\n✑ Ação: Permitir\nVM1 possui um endereço IP público e está conectada à Subnet1. O NSG-VM1 está associado à interface de rede do VM1. NSG-Subnet1 está associado a\nSub-rede1.\nVocê precisa estabelecer conexões de Área de Trabalho Remota da Internet para a VM1.\nSolução: você adiciona uma regra de segurança de entrada ao NSG-Subnet1 que permite conexões de Qualquer origem ao *destino para o intervalo de portas 3389\ne usa o protocolo TCP. Você remove o NSG-VM1 da interface de rede da VM1.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 321,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'B\nA porta padrão para RDP é a porta TCP 3389. Uma regra para permitir o tráfego RDP deve ser criada automaticamente quando você cria sua VM.\nNota sobre NSG-Subnet1: O Azure encaminha o tráfego de rede entre todas as sub-redes numa rede virtual, por padrão.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/troubleshooting/troubleshoot-rdp-connection\nDistribuição de votos da comunidade\nA (69%) B (31%)'
    }, {
        'question': '18\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém os seguintes recursos:\n✑ Uma rede virtual que possui uma sub-rede chamada Subnet1\n✑ Dois grupos de segurança de rede (NSGs) denominados NSG-VM1 e NSG-Subnet1\n✑ Uma máquina virtual chamada VM1 que tenha as configurações necessárias do Windows Server para permitir conexões de Área de Trabalho Remota\nNSG-Subnet1 tem apenas as regras de segurança de entrada padrão.\nO NSG-VM1 tem as regras de segurança de entrada padrão e a seguinte regra de segurança de entrada personalizada:\n✑ Prioridade: 100\n✑ Fonte: Qualquer\n✑ Intervalo de portas de origem: *\n✑ Destino: *\n✑ Intervalo de portas de destino: 3389\nProtocolo: UDP -\n✑ Ação: Permitir\nVM1 possui um endereço IP público e está conectada à Subnet1. O NSG-VM1 está associado à interface de rede do VM1. NSG-Subnet1 está associado a\nSub-rede1.\nVocê precisa estabelecer conexões de Área de Trabalho Remota da Internet para a VM1.\nSolução: você adiciona uma regra de segurança de entrada ao NSG-Subnet1 que permite conexões da origem da Internet ao destino da VirtualNetwork para\nintervalo de portas 3389 e usa o protocolo UDP.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 322,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nA porta padrão para RDP é a porta TCP 3389. Uma regra para permitir o tráfego RDP deve ser criada automaticamente quando você cria sua VM.\nNota sobre NSG-Subnet1: O Azure encaminha o tráfego de rede entre todas as sub-redes numa rede virtual, por padrão.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/troubleshooting/troubleshoot-rdp-connection\nDistribuição de votos da comunidade\nB (76%) A (20%)4%'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '19\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém os seguintes recursos:\n✑ Uma rede virtual que possui uma sub-rede chamada Subnet1\n✑ Dois grupos de segurança de rede (NSGs) denominados NSG-VM1 e NSG-Subnet1\n✑ Uma máquina virtual chamada VM1 que tenha as configurações necessárias do Windows Server para permitir conexões de Área de Trabalho Remota\nNSG-Subnet1 tem apenas as regras de segurança de entrada padrão.\nO NSG-VM1 tem as regras de segurança de entrada padrão e a seguinte regra de segurança de entrada personalizada:\n✑ Prioridade: 100\n✑ Fonte: Qualquer\n✑ Intervalo de portas de origem: *\n✑ Destino: *\n✑ Intervalo de portas de destino: 3389\n✑ Protocolo: UDP\n✑ Ação: Permitir\nVM1 possui um endereço IP público e está conectada à Subnet1. O NSG-VM1 está associado à interface de rede do VM1. NSG-Subnet1 está associado a\nSub-rede1.\nVocê precisa estabelecer conexões de Área de Trabalho Remota da Internet para a VM1.\nSolução: você adiciona uma regra de segurança de entrada ao NSG-Subnet1 e NSG-VM1 que permite conexões da origem da Internet para a Rede Virtual\ndestino para o intervalo de portas 3389 e usa o protocolo TCP.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 323,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nA porta padrão para RDP é a porta TCP 3389. Uma regra para permitir o tráfego RDP deve ser criada automaticamente quando você cria sua VM.\nNota sobre NSG-Subnet1: O Azure encaminha o tráfego de rede entre todas as sub-redes numa rede virtual, por padrão.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-machines/troubleshooting/troubleshoot-rdp-connection\nDistribuição de votos da comunidade\nA (55%) B (45%)'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': `Questão 21 tópico 5
            Você tem uma assinatura do Azure que contém uma rede virtual chamada VNET1. VNET1 contém as sub-redes mostradas na tabela a seguir.
            <img src="imagens/jquestao21topico5.png" alt="imagem da questão"></img>
            Cada máquina virtual usa um endereço IP estático.
            Você precisa criar grupos de segurança de rede (NSGs) para atender aos seguintes requisitos:
            ✑ Permita solicitações da Web da Internet para VM3, VM4, VM5 e VM6.
            ✑ Permita todas as conexões entre VM1 e VM2.
            ✑ Permitir conexões de Área de Trabalho Remota para VM1.
            ✑ Evite todo o outro tráfego de rede para VNET1.
            Qual é o número mínimo de NSGs que você deve criar?
            `,
        'number': '',
        'page': 325,
        'answers': [{
            'text': 'A. 1\n',
            'correct': true
        }, {
            'text': 'B. 3\n',
            'correct': false
        }, {
            'text': 'C. 4\n',
            'correct': false
        }, {
            'text': 'D. 12',
            'correct': false
        }
        ],
        'explication': 'C\nCada grupo de segurança de rede também contém regras de segurança padrão.\nNota: Um grupo de segurança de rede (NSG) contém uma lista de regras de segurança que permitem ou negam o tráfego de rede a recursos ligados ao Azure Virtual\nRedes (VNet).\nOs NSGs podem ser associados a sub-redes, VMs individuais (clássico) ou interfaces de rede individuais (NIC) anexadas a VMs (Gerenciador de Recursos).\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/security-overview#default-security-rules\nDistribuição de votos da comunidade\nA (69%) B (31%)'
    }, {
        'question': `Questão 22 tópico 5
            Você tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/jquestao22topico5.png" alt="imagem da questão"></img>
            A política do Azure de tipos de recursos não permitidos que tem a aplicação de políticas habilitada é atribuída ao RG1 e usa os seguintes parâmetros:
            Microsoft.Network/redes virtuais
            Microsoft.Compute/virtualMachines
            No RG1, é necessário criar uma nova máquina virtual chamada VM2 e, em seguida, conectar a VM2 à VNET1.
            O que você deve fazer primeiro?
            `,
        'number': '',
        'page': 326,
        'answers': [{
            'text': 'A. Remova Microsoft.Compute/virtualMachines da política.\n',
            'correct': true
        }, {
            'text': 'B. Criar um modelo do Azure Resource Manager\n',
            'correct': false
        }, {
            'text': 'C. Adicione uma sub-rede à VNET1.\n',
            'correct': false
        }, {
            'text': 'D. Remova Microsoft.Network/virtualNetworks da política.',
            'correct': false
        }
        ],
        'explication': 'A\nA política do Azure de tipos de recursos não permitidos proíbe a implantação de tipos de recursos especi cados. Você especifica uma matriz de tipos de recursos para\nbloquear.\nRedes Virtuais e Máquinas Virtuais são proibidas.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/governance/policy/samples/not-allowed-resource-types\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': '23\nSua empresa tem uma assinatura do Azure chamada Subscription1.\nA empresa também possui dois servidores locais chamados Server1 e Server2 que executam o Windows Server 2016. Server1 é configurado como um servidor DNS\nque possui uma zona DNS primária chamada adatum.com. Adatum.com contém 1.000 registros DNS.\nVocê gerencia o Servidor1 e a Assinatura1 do Servidor2. Server2 possui as seguintes ferramentas instaladas:\n✑ O console do Gerenciador DNS\n✑ AzurePowerShell\n✑ CLI do Azure 2.0\nVocê precisa mover a zona adatum.com para uma zona DNS do Azure na Assinatura1. A solução deve minimizar o esforço administrativo.\nO que você deve usar?\n',
        'number': '',
        'page': 327,
        'answers': [{
            'text': 'A. CLI do Azure\n',
            'correct': true
        }, {
            'text': 'B. Azure PowerShell\n',
            'correct': false
        }, {
            'text': 'C. o portal do Azure\n',
            'correct': false
        }, {
            'text': 'D. o console do Gerenciador DNS',
            'correct': false
        }
        ],
        'explication': 'B\nEtapa 1: Instalando o script de migração DNS\nAbra uma janela elevada do PowerShell (modo administrativo) e execute o seguinte comando install-script PrivateDnsMigrationScript\nEtapa 2: executando o script -\nExecute o seguinte comando para executar o script\nPrivateDnsMigrationScript.ps1 -\nReferência:\nhttps://docs.microsoft.com/en-us/azure/dns/private-dns-migration-guide\nDistribuição de votos da comunidade\nA (79%) B (21%)\nTópico 5'
    }, {
        'question': '24\nVocê tem um balanceador de carga público que equilibra as portas 80 e 443 em três máquinas virtuais denominadas VM1, VM2 e VM3.\nVocê precisa direcionar todas as conexões do Remote Desktop Protocol (RDP) somente para VM3.\nO que você deve configurar?\n',
        'number': '',
        'page': 327,
        'answers': [{
            'text': 'A. uma regra NAT de entrada\n',
            'correct': true
        }, {
            'text': 'B. um novo balanceador de carga público para VM3\n',
            'correct': false
        }, {
            'text': 'C. uma configuração IP frontend\n',
            'correct': false
        }, {
            'text': 'D. uma regra de balanceamento de carga',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/load-balancer/tutorial-load-balancer-port-forwarding-portal https://pixelrobots.co.uk/2017/08/azure-\nbalanceador de carga para rds/\nDistribuição de votos da comunidade\nUm (100%)'
    },
    {
        'question': `Questão 25 Tópico 5
        Você tem uma assinatura do Azure chamada Subscription1 que contém as redes virtuais na tabela a seguir.
        <img src="imagens/questao25topico5parte1 (1).png" alt="imagem da questão"></img>
        Subscription1 contém as máquinas virtuais na tabela a seguir.
        <img src="imagens/questao25topico5parte1 (2).png" alt="imagem da questão"></img>
        Em Subscription1, você cria um balanceador de carga que tem as seguintes configurações:
        ✑ Nome: LB1
        ✑ SKU: Básico
        ✑ Tipo: Interno
        ✑ Sub-rede: Subnet12
        ✑ Rede virtual: VNET1
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'LB1 pode equilibrar o tráfego entre VM1 e VM2.',
            'correct': true
        }, {
            'text': 'LB1 pode equilibrar o tráfego entre VM3 e VM4.',
            'correct': false
        }, {
            'text': 'LB1 pode equilibrar o tráfego entre VM5 e VM6.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `***** fontee+
        `
        ,
        'filters':[
            'K001'
        ]

    },

    {
        'question': `Questão 27 Tópico 5
            ARRASTAR E SOLTAR - POR ENQUANTO NAO CONTA NA CONTAGEM DE PONTOS DESSE SIMULADO EM ESPECIFO MAS VOCE PODE CLICAR EM VER RESPOSTA
            Você tem uma rede local que planeja conectar ao Azure usando uma VPN site-so-site.
            No Azure, você tem uma rede virtual do Azure chamada VNet1 que usa um espaço de endereço de 10.0.0.0/16. A VNet1 contém uma sub-rede chamada Subnet1 que usa um espaço de endereço de 10.0.0.0/24.
            Você precisa criar uma VPN site-to-site para o Azure.
            Quais quatro ações você deve executar em sequência? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize-as na ordem correta.
            OBSERVAÇÃO: Mais de uma ordem de escolha de resposta está correta. Você receberá crédito por qualquer uma das ordens corretas que selecionar.
            Selecionar e colocar:

        `,
        'number': '31',
        'page': 11,
        'answers': [

            [
                {
                    'text': '',
                    'options': [
                        { 'text': 'Crie um gateway local.', 'correct': true, 'index': '3' },
                        { 'text': 'Crie um gateway VPN.', 'correct': true, 'index': '2' },
                        { 'text': 'Crie uma sub-rede de gateway.', 'correct': true, 'index': '1' },
                        { 'text': 'Crie um servidor DNS personalizado.', 'correct': false, 'index': '-1' },
                        { 'text': 'Crie uma conexão VPN.', 'correct': true, 'index': '4' },
                        { 'text': 'Crie um perfil da CDN (rede de distribuição de conteúdo) do Azure.', 'correct': false, 'index': '-1' },

                    ],
                    'function': 'origin'

                },
                {
                    'text': '',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `A maioria concordou com a fonte original`,
        'typeQuestion': 'dragdrop'
        ,
        'filters':[
            'K001'
        ]
    },
    
    
    {
        'question': `Questão 28 Tópico 5
            Você tem uma assinatura do Azure que contém os recursos da tabela a seguir.
            <img src="imagens/jquestao28topico5parte1.png" alt="imagem da questão"></img>
            VM1 e VM2 são implementadas a partir do mesmo modelo e hospedam aplicativos de linha de negócios.
            Você configura o grupo de segurança de rede (NSG) mostrado na exposição. (Clique na guia Exposição.)
            <img src="imagens/jquestao28topico5parte2.png" alt="imagem da questão"></img>
            Você precisa impedir que usuários de VM1 e VM2 acessem sites na Internet pela porta TCP 80.\nO que você deveria fazer?\n`,
        'number': '',
        'page': 331,
        'answers': [{
            'text': 'A. Desassociar o NSG de uma interface de rede\n',
            'correct': false
        }, {
            'text': 'B. Altere a regra de segurança de entrada Port_80.\n',
            'correct': false
        }, {
            'text': 'C. Associe o NSG à Subnet1.\n',
            'correct': true
        }, {
            'text': 'D. Altere a regra de segurança de saída DenyWebSites.',
            'correct': false
        }
        ],
        'explication': 'C\nVocê pode associar ou dissociar um grupo de segurança de rede de uma interface de rede ou sub-rede.\nO NSG tem a regra apropriada para bloquear o acesso dos usuários à Internet. Precisamos apenas associá-lo à Subnet1.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': '29\nVocê tem duas assinaturas denominadas Assinatura1 e Assinatura2. Cada assinatura está associada a um locatário diferente do Azure AD.\nA assinatura1 contém uma rede virtual chamada VNet1. VNet1 contém uma máquina virtual do Azure chamada VM1 e tem um espaço de endereço IP de\n10.0.0.0/16.\nA assinatura2 contém uma rede virtual chamada VNet2. VNet2 contém uma máquina virtual do Azure chamada VM2 e tem um espaço de endereço IP de\n10.10.0.0/24.\nVocê precisa conectar VNet1 a VNet2.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 332,
        'answers': [{
            'text': 'A. Mova VM1 para Subscrição2.\n',
            'correct': false
        }, {
            'text': 'B. Mover VNet1 para Subscrição2.\n',
            'correct': false
        }, {
            'text': 'C. Modifique o espaço de endereço IP da VNet2.\n',
            'correct': false
        }, {
            'text': 'D. Provisionar gateways de rede virtual.',
            'correct': true
        }
        ],
        'explication': 'D\nAs redes virtuais podem estar na mesma região ou em regiões diferentes e de assinaturas iguais ou diferentes. Ao conectar VNets de\nassinaturas diferentes, as assinaturas não precisam estar associadas ao mesmo locatário do Active Directory.\nConfigurar uma conexão VNet a VNet é uma boa maneira de conectar VNets facilmente. Conectando uma rede virtual a outra rede virtual usando o\nO tipo de conexão VNet a VNet (VNet2VNet) é semelhante à criação de uma conexão IPsec site a site para um local local. Tanto a conectividade\ntipos usam um gateway VPN para fornecer um túnel seguro usando IPsec/IKE, e ambos funcionam da mesma maneira durante a comunicação.\nO gateway de rede local para cada VNet trata a outra VNet como um site local. Isso permite especificar espaço de endereço adicional para o local\ngateway de rede para rotear o tráfego.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-vnet-vnet-resource-manager-portal\nDistribuição de votos da comunidade\nD (80%) C (20%)'
    }, {
        'question': `Questão 30 tópico 5
            Você planeja criar uma máquina virtual do Azure chamada VM1 que será configurada conforme mostrado na exposição a seguir.
            <img src="imagens/jquestao30topico5parte1.png" alt="imagem da questão"></img>
            As configurações de disco planejadas para VM1 são mostradas na exposição a seguir.
            <img src="imagens/jquestao30topico5parte2.png" alt="imagem da questão"></img>
             Você precisa garantir que a VM1 possa ser criada em uma zona de disponibilidade.
             Quais são as duas configurações que você deve modificar? Cada resposta correta apresenta parte da solução.
             NOTA: Cada seleção correta vale um ponto.
             `,
        'number': '',
        'page': 334,
        'answers': [{
            'text': 'A. Use discos gerenciados\n',
            'correct': true
        }, {
            'text': 'B. Tipo de disco do SO\n',
            'correct': false
        }, {
            'text': 'C. Opções de disponibilidade\n',
            'correct': true
        }, {
            'text': 'D. Tamanho\n',
            'correct': false
        }, {
            'text': 'E. Imagem',
            'correct': false
        }
        ],
        'explication': 'AC\nR: Suas VMs deverão usar discos gerenciados se você quiser movê-las para uma zona de disponibilidade usando o Site Recovery.\nC: Ao criar uma VM para uma zona de disponibilidade, em Configurações > Alta disponibilidade, selecione uma das zonas numeradas da zona de disponibilidade\nsuspenso.'
    }, {
        'question': '33\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um computador chamado Computer1 que tem uma conexão VPN ponto a site com uma rede virtual do Azure chamada VNet1. O ponto-a-site\nconexão usa um certificado autoassinado.\nNo Azure, você baixa e instala o pacote de configuração do cliente VPN em um computador chamado Computer2.\nVocê precisa garantir que pode estabelecer uma conexão VPN ponto a site com a VNet1 do Computador2.\nSolução: você modifica as políticas de autenticação do Azure Active Directory (Azure AD).\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 338,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nEm vez disso, exporte o certificado de cliente do Computador1 e instale o certificado no Computador2.\nObservação:\nCada computador cliente que se conecta a uma VNet usando ponto a site deve ter um certificado de cliente instalado. Você gera um certificado de cliente a partir de\no certificado raiz autoassinado e, em seguida, exporte e instale o certificado do cliente. Se o certificado do cliente não estiver instalado, a autenticação falhará.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-certi cates-point-to-site\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '34\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um computador chamado Computer1 que tem uma conexão VPN ponto a site com uma rede virtual do Azure chamada VNet1. O ponto-a-site\nconexão usa um certificado autoassinado.\nNo Azure, você baixa e instala o pacote de configuração do cliente VPN em um computador chamado Computer2.\nVocê precisa garantir que pode estabelecer uma conexão VPN ponto a site com a VNet1 do Computador2.\nSolução: você ingressa o Computer2 no Azure Active Directory (Azure AD).\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 339,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nUm computador cliente que se conecta a uma VNet usando ponto a site deve ter um certificado de cliente instalado.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-certi cates-point-to-site\nDistribuição de votos da comunidade\nB (100%)\nTópico 5'
    }, {
        'question': '35\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém 10 redes virtuais. As redes virtuais são hospedadas em grupos de recursos separados.\nOutro administrador planeia criar vários grupos de segurança de rede (NSGs) na subscrição.\nVocê precisa garantir que, quando um NSG for criado, ele bloqueie automaticamente a porta TCP 8080 entre as redes virtuais.\nSolução: você cria um bloqueio de recursos e depois atribui o bloqueio à assinatura.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 339,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (83%) A (17%)'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': `Questão 36 tópico 5
            Você tem uma assinatura do Azure chamada Subscription1. Subscription1 contém uma máquina virtual chamada VM1.
            Você tem um computador chamado Computador1 que executa o Windows 10. O Computador1 está conectado à Internet.
            Você adiciona uma interface de rede chamada vm1173 à VM1, conforme mostrado na exposição. (Clique na guia Exposição.)
            <img src="imagens/jquestao36topico5.png" alt="imagem da questão"></img>
            No Computador1, você tenta se conectar à VM1 usando a Área de Trabalho Remota, mas a conexão falha.
            Você precisa estabelecer uma conexão de Área de Trabalho Remota com VM1.
            O que você deve fazer primeiro?\n`,
        'number': '',
        'page': 340,
        'answers': [{
            'text': 'A. Alterar a prioridade da regra RDP\n',
            'correct': false
        }, {
            'text': 'B. Conecte uma interface de rede\n',
            'correct': false
        }, {
            'text': 'C. Exclua a regra DenyAllInBound\n',
            'correct': false
        }, {
            'text': 'D. Iniciar VM1',
            'correct': true
        }
        ],
        'explication': 'D\nRespostas incorretas:\nR: As regras são processadas em ordem de prioridade, com os números mais baixos processados \u200b\u200bantes dos números mais altos, porque os números mais baixos têm prioridade mais alta.\nQuando o tráfego corresponde a uma regra, o processamento é interrompido. O RDP já tem o número mais baixo e, portanto, a prioridade mais alta.\nB: A interface de rede já foi adicionada à VM.\nC: As regras de saída são boas.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/security-overview\nDistribuição de votos da comunidade\nD (100%)'
    }, {
        'question': `Questão 37 Tópico 5 
            
            Você tem as máquinas virtuais do Azure mostradas na tabela a seguir.
            <img src="imagens/jquestao37topico5parte1.png" alt="imagem da questão"></img>
            Um serviço DNS está instalado na VM1.
            Você define as configurações dos servidores DNS para cada rede virtual, conforme mostrado na exposição a seguir.
            <img src="imagens/jquestao37topico5parte2.png" alt="imagem da questão"></img>
            Você precisa garantir que todas as máquinas virtuais possam resolver nomes DNS usando o serviço DNS na VM1.
            O que você deveria fazer?
            `,
        'number': '',
        'page': 341,
        'answers': [{
            'text': 'A. Configure um encaminhador condicional na VM1\n',
            'correct': false
        }, {
            'text': 'B. Adicionar pontos de extremidade de serviço na VNET1\n',
            'correct': false
        }, {
            'text': 'C. Adicionar pontos finais de serviço em VNET2 e VNET3\n',
            'correct': false
        }, {
            'text': 'D. Configurar peering entre VNET1, VNET2 e VNET3',
            'correct': true
        }
        ],
        'explication': 'D\nO peering de rede virtual permite-lhe ligar perfeitamente redes na Rede Virtual do Azure. As redes virtuais aparecem como uma só para\npropósitos de conectividade. O tráfego entre máquinas virtuais utiliza a infraestrutura de backbone da Microsoft.\nRespostas incorretas:\nB, C: O ponto final de serviço da Rede Virtual (VNet) fornece conectividade segura e direta aos serviços do Azure através de uma rota otimizada sobre o Azure\nrede principal.\nOs pontos finais permitem-lhe proteger os seus recursos críticos do serviço Azure apenas para as suas redes virtuais. Endpoints de serviço permitem IP privado\nendereços na VNet para chegar ao ponto final de um serviço do Azure sem precisar de um endereço IP público na VNet.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview https://docs.microsoft.com/en-\nus/azure/virtual-network/virtual-network-peering-overview\nDistribuição de votos da comunidade\nD (100%)'
    }, 

    {
        'question': `Questão 38 Tópico 5

        Você tem uma assinatura do Azure que contém as máquinas virtuais do Azure mostradas na tabela a seguir.
        <img src="imagens/questao38topico5parte1.png" alt="imagem da questão"></img>
        Você adiciona regras de segurança de entrada a um grupo de segurança de rede (NSG) chamado NSG1, conforme mostrado na tabela a seguir.
        <img src="imagens/questao38topico5parte2.png" alt="imagem da questão"></img>
        Você executa o Azure Network Watcher, conforme mostrado na exposição a seguir.
        <img src="imagens/questao38topico5parte3.jpg" alt="imagem da questão"></img>
        Você executa o Network Watcher novamente, conforme mostrado na exposição a seguir
        <img src="imagens/questao38topico5parte4.jpg" alt="imagem da questão"></img>
        <img src="imagens/questao38topico5parte5.jpg" alt="imagem da questão"></img>
           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'NSG1 limita o tráfego VM1',
            'correct': false
        }, {
            'text': 'NSG1 se aplica à VM2',
            'correct': true
        }, {
            'text': 'VM1 e VM2 conectam-se à mesma rede virtual',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `******
        `

    },
    
    
    
    {
        'question': '39\nVocê tem a rede virtual do Azure chamada VNet1 que contém uma sub-rede chamada Subnet1. Subnet1 contém três máquinas virtuais do Azure. Cada\nmáquina virtual tem um endereço IP público.\nAs máquinas virtuais hospedam vários aplicativos que podem ser acessados \u200b\u200bpelos usuários na Internet pela porta 443.\nA sua rede local tem uma conexão VPN site a site com a VNet1.\nVocê descobre que as máquinas virtuais podem ser acessadas usando o Remote Desktop Protocol (RDP) da Internet e do local\nrede.\nVocê precisa impedir o acesso RDP às máquinas virtuais pela Internet, a menos que a conexão RDP seja estabelecida no local\nrede. A solução deve garantir que todos os aplicativos ainda possam ser acessados \u200b\u200bpelos usuários da Internet.\nO que você deveria fazer?\n',
        'number': '',
        'page': 344,
        'answers': [{
            'text': 'A. Modifique o espaço de endereço do gateway da rede local\n',
            'correct': false
        }, {
            'text': 'B. Crie uma regra de negação em um grupo de segurança de rede (NSG) vinculado à Subnet1\n',
            'correct': true
        }, {
            'text': 'C. Remova os endereços IP públicos das máquinas virtuais\n',
            'correct': false
        }, {
            'text': 'D. Modifique o espaço de endereço da Subnet1',
            'correct': false
        }
        ],
        'explication': 'B\nVocê pode usar uma VPN site a site para conectar sua rede local a uma rede virtual do Azure. Os usuários da sua rede local se conectam por\nusando o RDP ou\nProtocolo SSH na conexão VPN site a site. Você não precisa permitir acesso direto RDP ou SSH pela Internet.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/security/fundamentals/network-best-practices\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `Questão 40 Tópico 5
            Você tem uma assinatura do Azure que contém os recursos da tabela a seguir.
            <img src="imagens/jquestao40topico5.png" alt="imagem da questão"></img>
            A Subnet1 está associada à VNet1. NIC1 anexa VM1 à Subnet1.
            Você precisa aplicar ASG1 ao VM1.
            O que você deveria fazer?
            `,
        'number': '',
        'page': 345,
        'answers': [{
            'text': 'A. Associar NIC1 a ASG1\n',
            'correct': true
        }, {
            'text': 'B. Modifique as propriedades do ASG1\n',
            'correct': false
        }, {
            'text': 'C. Modifique as propriedades do NSG1',
            'correct': false
        }
        ],
        'explication': 'A\nO Application Security Group pode ser associado a NICs.\nReferências:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/security-overview#application-security-groups\nDistribuição de votos da comunidade\nA (100%)\nTópico 5'
    }, {
        'question': '41\nVocê tem uma assinatura do Azure chamada Subscrição1 que contém uma rede virtual do Azure chamada VNet1. VNet1 se conecta ao seu local\nrede usando\nRota Expressa do Azure.\nVocê planeja preparar o ambiente para failover automático em caso de falha do ExpressRoute.\nVocê precisa conectar a VNet1 à rede local usando uma VPN site a site. A solução deve minimizar custos.\nQuais são as três ações que você deve realizar? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 345,
        'answers': [{
            'text': 'A. Crie uma conexão\n',
            'correct': true
        }, {
            'text': 'B. Crie um gateway VPN de site local\n',
            'correct': true
        }, {
            'text': 'C. Crie um gateway VPN que use o SKU VpnGw1\n',
            'correct': true
        }, {
            'text': 'D. Crie uma sub-rede de gateway\n',
            'correct': false
        }, {
            'text': 'E. Crie um gateway VPN que use o SKU Básico',
            'correct': false
        }
        ],
        'explication': 'ADE\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-site-to-site-resource-manager-portal\nDistribuição de votos da comunidade\nABC (80%) 11%6%'
    },


    {
        'question': `Questão 43 Tópico 5

        Você tem uma assinatura do Azure que contém os recursos na tabela a seguir.
        <img src="imagens/xquestao43topico5parte1.png" alt="imagem da questão"></img>
        Você instala a função de servidor Web Server (IIS) em VM1 e VM2 e, em seguida, adiciona VM1 e VM2 ao LB1.
        LB1 é configurado conforme mostrado na exposição LB1. (Clique na guia LB1.)
        <img src="imagens/xquestao43topico5parte2.png" alt="imagem da questão"></img>
        Rule1 é configurado conforme mostrado na exposição Rule1. (Clique na guia Rule1.)
        <img src="imagens/xquestao43topico5parte3.jpg" alt="imagem da questão"></img>
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'VM1 está no mesmo conjunto de disponibilidade que VM2.',
            'correct': true
        }, {
            'text': 'Se Probe1.htm estiver presente em VM1 e VM2, LB1 equilibrará a porta TCP 80 entre VM1 e VM2.',
            'correct': true
        }, {
            'text': 'Se você excluir a Regra1, o LB1 equilibrará todas as solicitações entre VM1 e VM2 para todas as portas.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*******
        `

    },

    
     
    
     {
        'question': `Questão 45 Tópico 5 
            Você tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/jquestao45topico5.png" alt="imagem da questão"></img>
            Você precisa criar uma interface de rede chamada NIC1.
            Em qual local você pode criar NIC1?
            `,
        'number': '',
        'page': 350,
        'answers': [{
            'text': 'A. Apenas Leste dos EUA e Norte da Europa\n',
            'correct': false
        }, {
            'text': 'B. Apenas Leste dos EUA\n',
            'correct': true
        }, {
            'text': 'C. Leste dos EUA, Europa Ocidental e Norte da Europa\n',
            'correct': false
        }, {
            'text': 'D. Somente Leste dos EUA e Europa Ocidental',
            'correct': false
        }
        ],
        'explication': 'B\nAntes de criar uma interface de rede, você deve ter uma rede virtual existente no mesmo local e assinatura em que você cria uma rede\ninterface em.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `Questão 46 Tópico 5
            Você tem máquinas virtuais do Azure que executam o Windows Server 2019 e estão configuradas conforme mostrado na tabela a seguir.
            <img src="imagens/jquestao46topico5parte1.png" alt="imagem da questão"></img>
            Você cria uma zona DNS pública do Azure chamada adatum.com e uma zona DNS privada do Azure chamada contoso.com.
            Para controso.com, você cria um link de rede virtual denominado link1 conforme mostrado na exposição. (Clique na guia Exposição.)
            <img src="imagens/jquestao46topico5parte2.png" alt="imagem da questão"></img>
            Você descobre que a VM1 pode resolver nomes em contoso.com, mas não pode resolver nomes em adatum.com. VM1 pode resolver outros hosts na Internet.
            Você precisa garantir que a VM1 possa resolver nomes de host em adatum.com.
            O que você deveria fazer?\n`,
        'number': '',
        'page': 351,
        'answers': [{
            'text': 'A. Atualize o DNS su x na VM1 para ser adatum.com\n',
            'correct': false
        }, {
            'text': 'B. Configure os servidores de nomes para adatum.com no registrador de domínio\n',
            'correct': true
        }, {
            'text': 'C. Criar um registro SRV na zona contoso.com\n',
            'correct': false
        }, {
            'text': 'D. Modifique as configurações de controle de acesso (IAM) para link1',
            'correct': false
        }
        ],
        'explication': 'A\nSe você usar o DNS fornecido pelo Azure, o DNS su x apropriado será aplicado automaticamente às suas máquinas virtuais. Para todas as outras opções você deve\nuse totalmente\nNomes de domínio qualificados (FQDN) ou aplique manualmente o suf x DNS apropriado às suas máquinas virtuais.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-name-resolution-for-vms-and-role-instances\nDistribuição de votos da comunidade\nB (100%)'
    },

    {
        'question': `Questão 48 Tópico 5
        Você tem uma assinatura do Azure que contém as máquinas virtuais do Azure mostradas na tabela a seguir.
        <img src="imagens/xquestao48topico5parte1.png" alt="imagem da questão"></img>
        Você configura as interfaces de rede das máquinas virtuais para usar as configurações mostradas na tabela a seguir.
        <img src="imagens/xquestao48topico5parte2.png" alt="imagem da questão"></img>
        Nas configurações do VNET1, você configura os servidores DNS mostrados na exposição a seguir.
        <img src="imagens/xquestao48topico5parte3.png" alt="imagem da questão"></img>
        As máquinas virtuais podem se conectar com sucesso ao servidor DNS que tem um endereço IP de 192.168.10.15 e ao servidor DNS que tem um
        endereço IP de 193.77.134.10.
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
                

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'VM1 se conecta a 193.77.134.10 para consultas DNS.',
            'correct': true
        }, {
            'text': 'VM2 se conecta a 193.77.134.10 para consultas DNS.',
            'correct': false
        }, {
            'text': 'VM3 se conecta a 192.168.10.15 para consultas DNS.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `******
        `

    },

    {
        'question': `Questão 49 Tópico 5
            Você tem uma assinatura do Azure que contém os grupos de recursos mostrados na tabela a seguir.
            <img src="imagens/jquestao49topico5.png" alt="imagem da questão"></img>
            RG1 contém os recursos mostrados na tabela a seguir.
            <img src="imagens/jquestao49topico5parte2.png" alt="imagem da questão"></img>
            Você precisa identificar quais recursos você pode mover de RG1 para RG2 e quais recursos você pode mover de RG2 para RG1.
            Quais recursos você deve identificar? Para responder, selecione as opções apropriadas na área de resposta.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
        `,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Recursos que você pode mover do RG1 para o RG2:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Nenhum",
                    'correct': false
                }, {
                    'text': "Somente IP1",
                    'correct': false
                }, {
                    'text': "Somente IP1 e storage1",
                    'correct': false
                },
                {
                    'text': "Somente IP1 e VNET1",
                    'correct': false
                },
                {
                    'text': "IP1, VNET2 e storage1",
                    'correct': true
                }
            ]
        },

        {
            'text': 'Recursos que você pode mover do RG2 para o RG1:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Nenhum",
                    'correct': false
                }, {
                    'text': "Somente IP2",
                    'correct': false
                }, {
                    'text': "Somente IP2 e storage2",
                    'correct': false
                },
                {
                    'text': "Somente IP2 e VNET2",
                    'correct': false
                },
                {
                    'text': "IP2, VNET2 e storage2",
                    'correct': true
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Comentário mais votado:
            Resposta correta: Caixa 1: IP1, VNET2 e storage1 
            Caixa 2: IP2, VNET2 e storage2 Os bloqueios são projetados para qualquer atualização ou remoção. Neste caso, queremos apenas mover, não estamos excluindo e não estamos alterando nada no recurso.
            
`
    },
    {
        'question': `questao 50 tópico 5 
            Nota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que
            pode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.
            Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.
            Você tem uma assinatura do Azure que contém as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/jquestao50topico5.png" alt="imagem da questão"></img>
            Você implanta um balanceador de carga que possui as seguintes configurações:
            ✑ Nome: LB1\n✑ Tipo: Interno\n✑ SKU: Padrão\n✑ Rede virtual: VNET1\nVocê precisa garantir que pode adicionar VM1 e VM2 ao pool de back-end do LB1.\nSolução: você cria um endereço IP público de SKU básico, associa o endereço à interface de rede da VM1 e, em seguida, inicia a VM1.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 356,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nUm pool de back-end configurado por endereço IP tem as seguintes limitações:\n✑ Somente balanceador de carga padrão\nReferência:\nhttps://docs.microsoft.com/en-us/azure/load-balancer/backend-pool-management\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `questao 51 tópico 5
            Nota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que
            pode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.
            Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.
            Você tem uma assinatura do Azure que contém as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/jquestao51topico5.png" alt="imagem da questão"></img>
            Você implanta um balanceador de carga que possui as seguintes configurações:
            ✑ Nome: LB1\n✑ Tipo: Interno\n✑ SKU: Padrão\n✑ Rede virtual: VNET1\nVocê precisa garantir que pode adicionar VM1 e VM2 ao pool de back-end do LB1.\nSolução: você cria um endereço IP público de SKU padrão, associa o endereço à interface de rede da VM1 e, em seguida, interrompe a VM2.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 357,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nUm pool de back-end configurado por endereço IP tem as seguintes limitações:\n✑ Somente balanceador de carga padrão\nReferência:\nhttps://docs.microsoft.com/en-us/azure/load-balancer/backend-pool-management\nDistribuição de votos da comunidade\nB (100%)'
        , 'filters': ['K002']
    }, {
        'question': `52\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela.
             Como resultado, estas perguntas não aparecerão na tela de revisão.
             \nVocê tem uma assinatura do Azure que contém as máquinas virtuais mostradas na tabela a seguir.
             <img src="imagens/jquestao52topico5.png" alt="imagem da questão"></img>
             \nVocê implanta um balanceador de carga que possui as seguintes configurações:
            \n✑ Nome: LB1\n✑ Tipo: Interno\n✑ SKU: Padrão\n✑ Rede virtual: VNET1\nVocê precisa garantir que pode adicionar VM1 e VM2 ao pool de back-end do LB1.\nSolução: você cria dois endereços IP públicos de SKU padrão e associa um endereço IP público de SKU padrão à interface de rede de cada um.\nmáquina virtual.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 358,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nUm pool de back-end configurado por endereço IP tem as seguintes limitações:\n✑ Somente balanceador de carga padrão\nReferência:\nhttps://docs.microsoft.com/en-us/azure/load-balancer/backend-pool-management\nDistribuição de votos da comunidade\nA (83%) B (17%)'
        , 'filters': ['K002']
    }, {
        'question': '53\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um computador chamado Computer1 que tem uma conexão VPN ponto a site com uma rede virtual do Azure chamada VNet1. O ponto-a-site\nconexão usa um certificado autoassinado.\nNo Azure, você baixa e instala o pacote de configuração do cliente VPN em um computador chamado Computer2.\nVocê precisa garantir que pode estabelecer uma conexão VPN ponto a site com a VNet1 do Computador2.\nSolução: você exporta o certificado de cliente do Computador1 e instala o certificado no Computador2.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 359,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nCada computador cliente que se conecta a uma VNet usando ponto a site deve ter um certificado de cliente instalado. Você gera um certificado de cliente a partir de\no certificado raiz autoassinado e, em seguida, exporte e instale o certificado do cliente. Se o certificado do cliente não estiver instalado, a autenticação falhará.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-certi cates-point-to-site\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': '54\nVocê tem uma máquina virtual do Azure chamada VM1.\nA interface de rede para VM1 é configurada conforme mostrado na exposição. (Clique na guia Exposição.)\nVocê implanta um servidor web na VM1 e, em seguida, cria um site seguro que pode ser acessado usando o protocolo HTTPS. VM1 é usado como servidor web\napenas.\nVocê precisa garantir que os usuários possam se conectar ao site pela Internet.\nO que você deveria fazer?\n',
        'number': '',
        'page': 360,
        'answers': [{
            'text': 'A. Modifique o protocolo da Regra 4\n',
            'correct': false
        }, {
            'text': 'B. Excluir Regra1\n',
            'correct': false
        }, {
            'text': 'C. Para a Regra 5, altere a Ação para Permitir e altere a prioridade para 401\n',
            'correct': true
        }, {
            'text': 'D. Crie uma nova regra de entrada que permita o protocolo TCP 443 e configure a regra para ter prioridade 501.',
            'correct': false
        }
        ],
        'explication': 'C\nHTTPS usa a porta 443.\nA regra2, com prioridade 500, nega o tráfego HTTPS.\nA regra 5, com prioridade alterada de 2000 para 401, permitiria o tráfego HTTPS.\nNota: Prioridade é um número entre 100 e 4096. As regras são processadas em ordem de prioridade, com os números mais baixos processados \u200b\u200bantes dos números mais altos,\nporque números mais baixos têm prioridade mais alta. Quando o tráfego corresponde a uma regra, o processamento é interrompido. Como resultado, quaisquer regras que existam com prioridades mais baixas\n(números mais altos) que possuem os mesmos atributos que regras com prioridades mais altas não são processados.\nObservação:\nExistem várias versões desta questão no exame. A pergunta tem duas possíveis respostas corretas:\n1. Altere a prioridade da Regra3 para 450.\n2. Para a Regra5, altere a Ação para Permitir e altere a prioridade para 401.\nOutras opções de respostas incorretas que você pode ver no exame incluem o seguinte:\n✑ Modifique a ação da Regra1.\n✑ Altere a prioridade da Regra6 para 100.\n✑ Para Rule4, altere o protocolo de UDP para Qualquer.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview\nDistribuição de votos da comunidade\nC (89%) 11%'
    }, {
        'question': '55\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém 10 redes virtuais. As redes virtuais são hospedadas em grupos de recursos separados.\nOutro administrador planeia criar vários grupos de segurança de rede (NSGs) na subscrição.\nVocê precisa garantir que, quando um NSG for criado, ele bloqueie automaticamente a porta TCP 8080 entre as redes virtuais.\nSolução: Na folha Provedores de recursos, você cancela o registro do provedor Microsoft.ClassicNetwork.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 361,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nVocê deve usar uma definição de política.\nA definição de política de recursos usada pelo Azure Policy permite estabelecer convenções para recursos em sua organização, descrevendo quando o\npolítica é aplicada e qual o efeito a ter. Ao definir convenções, você pode controlar custos e gerenciar seus recursos com mais facilidade.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-policy/policy-de nition\nDistribuição de votos da comunidade\nB (100%)'
        ,
        'filters':[
            'K001'
        ]
    },

    {
        'question': `Questão 56 Tópico 5

        Você gerencia duas assinaturas do Azure chamadas Subscription1 e Subscription2.
        Subscription1 tem as seguintes redes virtuais:
        <img src="imagens/xquestao56topico5parte1.png" alt="imagem da questão"></img>
        As redes virtuais contêm as seguintes sub-redes:
        <img src="imagens/xquestao56topico5parte2.png" alt="imagem da questão"></img>
        Subscription2 contém a seguinte rede virtual:
        <img src="imagens/xquestao56topico5parte3.png" alt="imagem da questão"></img>
        ✑ Nome: VNETA
        ✑ Espaço de endereço: 10.10.128.0/17
        ✑ Localização: Canada Central
        VNETA contém as seguintes sub-redes:
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto.

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Uma conexão site a site pode ser estabelecida entre VNET1 e VNET2.',
            'correct': false
        }, {
            'text': 'VNET1 e VNET2 podem ser emparelhados.',
            'correct': true
        }, {
            'text': 'VNET1 e VNETA podem ser emparelhados.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `******
        `

    },
    
    
    
    {
        'question': '57\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um aplicativo chamado App1 instalado em duas máquinas virtuais do Azure chamadas VM1 e VM2. As conexões com App1 são gerenciadas usando\numa carga do Azure\nBalanceador.\nAs configurações efetivas de segurança de rede para VM2 são mostradas na exposição a seguir.\nVocê descobre que as conexões com App1 de 131.107.100.50 pela porta TCP 443 falham.\nVocê verifica se as regras do Load Balancer estão configuradas corretamente.\nVocê precisa garantir que as conexões com o App1 possam ser estabelecidas com êxito a partir de 131.107.100.50 pela porta TCP 443.\nSolução: você cria uma regra de segurança de entrada que nega todo o tráfego da origem 131.107.100.50 e tem um custo de 64.999.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 363,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://fastreroute.com/azure-network-security-groups-explained/\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '58\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um aplicativo chamado App1 instalado em duas máquinas virtuais do Azure chamadas VM1 e VM2. As conexões com App1 são gerenciadas usando\numa carga do Azure\nBalanceador.\nAs configurações efetivas de segurança de rede para VM2 são mostradas na exposição a seguir.\nVocê descobre que as conexões com App1 de 131.107.100.50 pela porta TCP 443 falham.\nVocê verifica se as regras do Load Balancer estão configuradas corretamente.\nVocê precisa garantir que as conexões com o App1 possam ser estabelecidas com êxito a partir de 131.107.100.50 pela porta TCP 443.\nSolução: você exclui a regra de segurança de entrada BlockAllOther443.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 364,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://fastreroute.com/azure-network-security-groups-explained/\nDistribuição de votos da comunidade\nB (51%) A (49%)'
    }, {
        'question': '59\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um aplicativo chamado App1 instalado em duas máquinas virtuais do Azure chamadas VM1 e VM2. As conexões com App1 são gerenciadas usando\numa carga do Azure\nBalanceador.\nAs configurações efetivas de segurança de rede para VM2 são mostradas na exposição a seguir.\nVocê descobre que as conexões com App1 de 131.107.100.50 pela porta TCP 443 falham.\nVocê verifica se as regras do Load Balancer estão configuradas corretamente.\nVocê precisa garantir que as conexões com o App1 possam ser estabelecidas com êxito a partir de 131.107.100.50 pela porta TCP 443.\nSolução: você modifica a prioridade da regra de segurança de entrada Allow_131.107.100.50.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 365,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nA regra atualmente tem a prioridade mais alta.\nReferência:\nhttps://fastreroute.com/azure-network-security-groups-explained/\nDistribuição de votos da comunidade\nB (83%) A (17%)'
    }, {
        'question': '60\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém 10 redes virtuais. As redes virtuais são hospedadas em grupos de recursos separados.\nOutro administrador planeia criar vários grupos de segurança de rede (NSGs) na subscrição.\nVocê precisa garantir que, quando um NSG for criado, ele bloqueie automaticamente a porta TCP 8080 entre as redes virtuais.\nSolução: você atribui uma definição de política integrada à assinatura.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 366,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nA definição de política de recursos usada pelo Azure Policy permite estabelecer convenções para recursos em sua organização, descrevendo quando o\npolítica é aplicada e qual o efeito a ter. Ao definir convenções, você pode controlar custos e gerenciar seus recursos com mais facilidade.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-policy/policy-de nition\nDistribuição de votos da comunidade\nB (100%)\nTópico 5'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '61\nVocê tem uma assinatura do Azure.\nVocê planeja implantar um cluster do Azure Kubernetes Service (AKS) para dar suporte a um aplicativo chamado App1. Os clientes locais se conectam ao App1 usando o\nEndereço IP do pod.\nPara o cluster AKS, você precisa escolher um tipo de rede que dê suporte ao App1.\nO que você deve escolher?',
        'number': '',
        'page': 366,
        'answers': [{
            'text': 'A. kubenet\n',
            'correct': false
        }, {
            'text': 'B. Interface de Rede de Contêiner do Azure (CNI)\n',
            'correct': true
        }, {
            'text': 'C. Terminais de conexão híbrida\n',
            'correct': false
        }, {
            'text': 'D. Link Privado do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nCom o Azure CNI, cada cápsula obtém um endereço IP da sub-rede e pode ser acedido diretamente. Esses endereços IP devem ser exclusivos em todo o seu\nespaço de rede.\nRespostas incorretas:\nR: A opção de rede kubenet é a configuração padrão para a criação de cluster AKS. Com o kubenet, os nós obtêm um endereço IP do Azure\nsub-rede de rede virtual. Os pods recebem um endereço IP de um espaço de endereço logicamente diferente da sub-rede da rede virtual do Azure dos nós.\nA tradução de endereços de rede (NAT) é então configurada para que os pods possam alcançar recursos na rede virtual do Azure.\nC, D: AKS suporta apenas redes Kubenet e redes Azure Container Networking Interface (CNI)\nReferência:\nhttps://docs.microsoft.com/en-us/azure/aks/concepts-network\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `questão 62 tópico 5 \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/fquestao62topico5.png" alt="imagem da questão"></img>
            \nVocê implanta um balanceador de carga que possui as seguintes configurações:\n✑ Nome: LB1\n✑ Tipo: Interno\n✑ SKU: Padrão\n✑ Rede virtual: VNET1\nVocê precisa garantir que pode adicionar VM1 e VM2 ao pool de back-end do LB1.\nSolução: você desassocia o endereço IP público da interface de rede da VM2.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 367,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nUm (100%)\nTópico 5'
    }, {
        'question': '63\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém 10 redes virtuais. As redes virtuais são hospedadas em grupos de recursos separados.\nOutro administrador planeia criar vários grupos de segurança de rede (NSGs) na subscrição.\nVocê precisa garantir que, quando um NSG for criado, ele bloqueie automaticamente a porta TCP 8080 entre as redes virtuais.\nSolução: você configura uma definição de política personalizada e, em seguida, atribui a política à assinatura.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 367,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nA definição de política de recursos usada pelo Azure Policy permite estabelecer convenções para recursos em sua organização, descrevendo quando o\npolítica é aplicada e qual o efeito a ter. Ao definir convenções, você pode controlar custos e gerenciar seus recursos com mais facilidade.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-policy/policy-de nition\nDistribuição de votos da comunidade\nUm (100%)'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '64\nVocê tem duas redes virtuais do Azure chamadas VNet1 e VNet2. VNet1 contém uma máquina virtual do Azure chamada VM1. VNet2 contém um Azure\nmáquina virtual chamada VM2.\nVM1 hospeda um aplicativo frontend que se conecta ao VM2 para recuperar dados.\nOs usuários relatam que o aplicativo frontend está mais lento que o normal.\nVocê precisa visualizar o tempo médio de ida e volta (RTT) dos pacotes de VM1 a VM2.\nQual recurso do Azure Network Watcher você deve usar?\n',
        'number': '',
        'page': 368,
        'answers': [{
            'text': 'A. Verificação de fluxo de IP\n',
            'correct': false
        }, {
            'text': 'B. Solução de problemas de conexão\n',
            'correct': false
        }, {
            'text': 'C. Monitor de conexão\n',
            'correct': true
        }, {
            'text': 'D. Registros de fluxo NSG',
            'correct': false
        }
        ],
        'explication': 'C\nO recurso de monitor de conexão monitora a comunicação em intervalos regulares e informa sobre acessibilidade, latência e topologia de rede\nmudanças entre a VM e o endpoint\nRespostas incorretas:\nR: O recurso de verificação de fluxo de IP permite especificar um endereço IPv4 de origem e destino, porta, protocolo (TCP ou UDP) e direção de tráfego.\n(entrada ou saída). A verificação de fluxo de IP testa a comunicação e informa se a conexão foi bem-sucedida ou falhou. Se a conexão falhar,\nA verificação de fluxo de IP informa qual regra de segurança permitiu ou negou a comunicação, para que você possa resolver o problema.\nB: O recurso de solução de problemas de conexão permite testar uma conexão entre uma VM e outra VM, um FQDN, um URI ou um endereço IPv4.\nO teste retorna informações semelhantes retornadas ao usar o recurso de monitor de conexão, mas testa a conexão em um determinado momento, em vez de\ndo que monitorá-lo ao longo do tempo, como faz o monitor de conexão.\nD: O recurso de log de fluxo NSG permite registrar o endereço IP de origem e destino, porta, protocolo e se o tráfego foi permitido ou negado\npor um NSG.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview\nDistribuição de votos da comunidade\nC (100%)'
    },

    {
        'question': `questão 67 tópico 5 
            Você tem uma assinatura do Azure que contém duas máquinas virtuais, conforme mostrado na tabela a seguir.
            <img src="imagens/fquestao67topico5.png" alt="imagem da questão"></img>
            Você executa uma pesquisa de DNS reversa para 10.0.0.4 da VM2.
            Qual FQDN será retornado?
        `,
        'number': '',
        'page': 372,
        'answers': [{
            'text': 'A. vm1.core.windows.net',
            'correct': false
        }, {
            'text': 'B. vm1.azure.com',
            'correct': false
        }, {
            'text': 'C. vm1.westeurope.cloudapp.azure.com',
            'correct': false
        }, {
            'text': 'D. vm1.internal.cloudapp.net',
            'correct': true
        }
        ],
        'explication': `Resposta da fonte: B 🗳️
                Distribuição de votos na comunidade
                d (100%)`
    },
    
    
    
    {
        'question': `questão 68 tópico 5 \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um aplicativo chamado App1 instalado em duas máquinas virtuais do Azure chamadas VM1 e VM2. As conexões com App1 são gerenciadas usando\numa carga do Azure\nBalanceador.\nAs configurações efetivas de segurança de rede para VM2 são mostradas na exposição a seguir.
            <img src="imagens/fquestao68topico5.png" alt="imagem da questão"></img>
            \nVocê descobre que as conexões com App1 de 131.107.100.50 pela porta TCP 443 falham.\nVocê verifica se as regras do Load Balancer estão configuradas corretamente.\nVocê precisa garantir que as conexões com o App1 possam ser estabelecidas com êxito a partir de 131.107.100.50 pela porta TCP 443.\nSolução: você cria uma regra de segurança de entrada que permite qualquer tráfego da origem do AzureLoadBalancer e tem um custo de 150.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 372,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview\nDistribuição de votos da comunidade\nB (53%) A (47%)'
    }, {
        'question': '69\nVocê tem uma assinatura do Azure que contém um gateway de rede virtual baseado em políticas chamado GW1 e uma rede virtual chamada VNet1.\nVocê precisa garantir que pode configurar uma conexão ponto a site de um computador local para a VNet1.\nQuais são as duas ações que você deve realizar? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 373,
        'answers': [{
            'text': 'A. Adicionar um ponto final de serviço à VNet1\n',
            'correct': false
        }, {
            'text': 'B. Redefinir GW1\n',
            'correct': false
        }, {
            'text': 'C. Crie um gateway de rede virtual baseado em rota\n',
            'correct': true
        }, {
            'text': 'D. Adicionar uma conexão ao GW1\n',
            'correct': false
        }, {
            'text': 'E. Excluir GW1',
            'correct': true
        }, {
            'text': '\nF. Adicionar um espaço de endereço IP público à VNet1',
            'correct': false
        }
        ],
        'explication': 'CE\nC: Um gateway VPN é usado ao criar uma conexão VPN com sua rede local.\nDispositivos VPN baseados em rota usam seletores de tráfego qualquer-para-qualquer (curinga) e permitem que tabelas de roteamento/encaminhamento direcionem o tráfego para diferentes túneis IPsec. Isto\nnormalmente é construído em plataformas de roteador onde cada túnel IPsec é modelado como uma interface de rede ou VTI (interface de túnel virtual).\nE: Dispositivos VPN baseados em políticas usam as combinações de prefixos de ambas as redes para definir como o tráfego é criptografado/descriptografado por meio de IPsec.\ntúneis. Geralmente é construído em dispositivos de firewall que realizam filtragem de pacotes. A criptografia e descriptografia do túnel IPsec são adicionadas ao pacote\nmecanismo de filtragem e processamento.\nRespostas incorretas:\nF: As conexões ponto a site não exigem um dispositivo VPN ou um endereço IP público.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/create-routebased-vpn-gateway-portal https://docs.microsoft.com/en-us/azure/vpn-\ngateway/vpn-gateway-connect-multiple-policybased-rm-ps\nDistribuição de votos da comunidade\nCE (86%) 11%'
    },


    {
        'question': `Questão 70 Tópico 5

        Você tem uma assinatura do Azure que contém os recursos na tabela a seguir:
        <img src="imagens/xquestao70topico5parte1.png" alt="imagem da questão"></img>
        No Azure, você cria uma zona DNS privada chamada adatum.com. Você define a rede virtual de registro para VNet2. A zona adatum.com é
        configurada conforme mostrado na seguinte exposição:
        <img src="imagens/xquestao70topico5parte2.png" alt="imagem da questão"></img>
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'O registro A para VM5 será registrado automaticamente na zona adatum.com.',
            'correct': false
        }, {
            'text': 'VM5 pode resolver VM9.adatum.com.',
            'correct': false
        }, {
            'text': 'VM6 pode resolver VM9.adatum.com.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*****
        `

    },

    {
        'question': `Questão 71 Tópico 5
        Você tem uma assinatura do Azure que contém as redes virtuais mostradas na tabela a seguir.
        <img src="imagens/xquestao71topico5parte1.png" alt="imagem da questão"></img>
        A assinatura contém as zonas DNS privadas mostradas na tabela a seguir.
        <img src="imagens/xquestao71topico5parte2.png" alt="imagem da questão"></img>
        Você adiciona links de rede virtual às zonas DNS privadas conforme mostrado na tabela a seguir.
        <img src="imagens/xquestao71topico5parte3.png" alt="imagem da questão"></img>
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'Você pode ativar o registro automático para Link2.',
            'correct': true
        }, {
            'text': 'Você pode adicionar um link de rede virtual para VNET1 em Zone3.com.',
            'correct': true
        }, {
            'text': 'Você pode adicionar um link de rede virtual para VNET2 ao Zone1.com e habilitar o registro automático.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `******
        `

    },
    
    
    
    
    {
        'question': '73\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nGere uma rede virtual chamada VNet1 que está hospedada na região oeste do Azure dos EUA.\nA VNet1 hospeda duas máquinas virtuais chamadas VM1 e VM2 que executam o Windows Server.\nVocê precisa inspecionar todo o tráfego de rede da VM1 para a VM2 por um período de três horas.\nSolução: No Azure Network Watcher, você cria uma captura de pacotes.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 379,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nA captura de pacotes variáveis \u200b\u200bdo Network Watcher permite criar sessões de captura de pacotes para rastrear o tráfego de e para uma máquina virtual. Pacote\nA captura ajuda a diagnosticar anomalias de rede de forma reativa e proativa. Outros usos incluem a coleta de estatísticas de rede, obtenção de\ninformações sobre invasões de rede, para depurar comunicações cliente-servidor e muito mais.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-packet-capture-overview\nDistribuição de votos da comunidade\nA (81%) B (19%)\nTópico 5'
    }, {
        'question': '74\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nGere uma rede virtual chamada VNet1 que está hospedada na região oeste do Azure dos EUA.\nA VNet1 hospeda duas máquinas virtuais chamadas VM1 e VM2 que executam o Windows Server.\nVocê precisa inspecionar todo o tráfego de rede da VM1 para a VM2 por um período de três horas.\nSolução: No Azure Network Watcher, você cria um monitor de conexão.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 379,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'A\nReferência:\nhttps://azure.microsoft.com/en-us/updates/general-availability-azure-network-watcher-connection-monitor-in-all-public-regions/\nDistribuição de votos da comunidade\nB (88%) 12%'
    }, {
        'question': '75\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nGere uma rede virtual chamada VNet1 que está hospedada na região oeste do Azure dos EUA.\nA VNet1 hospeda duas máquinas virtuais chamadas VM1 e VM2 que executam o Windows Server.\nVocê precisa inspecionar todo o tráfego de rede da VM1 para a VM2 por um período de três horas.\nSolução: No Performance Monitor, você cria um Conjunto de Coletores de Dados (DCS).\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 380,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nUtilize a funcionalidade Monitor de Ligação do Azure Network Watcher.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': '77\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nGere uma rede virtual chamada VNet1 que está hospedada na região oeste do Azure dos EUA.\nA VNet1 hospeda duas máquinas virtuais chamadas VM1 e VM2 que executam o Windows Server.\nVocê precisa inspecionar todo o tráfego de rede da VM1 para a VM2 por um período de três horas.\nSolução: No Azure Monitor, você cria uma métrica de entrada e saída de rede.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 382,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://azure.microsoft.com/en-us/updates/general-availability-azure-network-watcher-connection-monitor-in-all-public-regions/\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `questão 78 tópico 5 
            \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um aplicativo chamado App1 instalado em duas máquinas virtuais do Azure chamadas VM1 e VM2. As conexões com App1 são gerenciadas usando\numa carga do Azure\nBalanceador.\nAs configurações efetivas de segurança de rede para VM2 são mostradas na exposição a seguir.
            <img src="imagens/fquestao78topico5.png" alt="imagem da questão"></img>
            \nVocê descobre que as conexões com App1 de 131.107.100.50 pela porta TCP 443 falham.\nVocê verifica se as regras do Load Balancer estão configuradas corretamente.\nVocê precisa garantir que as conexões com o App1 possam ser estabelecidas com êxito a partir de 131.107.100.50 pela porta TCP 443.\nSolução: você cria uma regra de segurança de entrada que nega todo o tráfego da origem 131.107.100.50 e tem uma prioridade de 64999.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 383,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nReferência:\nhttps://fastreroute.com/azure-network-security-groups-explained/\nDistribuição de votos da comunidade\nB (96%) 4%'
        ,
        'filters':[
            'K001'
        ]
    },

    {
        'question': `Questão 80 Tópico 5
        Você tem uma assinatura do Azure que contém as redes virtuais mostradas na tabela a seguir.
        <img src="imagens/xquestao80topico5parte1.png" alt="imagem da questão"></img>
        Você tem as máquinas virtuais mostradas na tabela a seguir.
        <img src="imagens/xquestao80topico5parte2.png" alt="imagem da questão"></img>
        Você tem as interfaces de rede virtual mostradas na tabela a seguir.
        <img src="imagens/xquestao80topico5parte3.png" alt="imagem da questão"></img>
        Server1 é um servidor DNS que contém os recursos mostrados na tabela a seguir.
        <img src="imagens/xquestao80topico5parte4.png" alt="imagem da questão"></img>
        Você tem uma zona DNS privada do Azure chamada contoso.com que tem um link de rede virtual para VNET2 e os registros mostrados na tabela a seguir.
        <img src="imagens/xquestao80topico5parte5.png" alt="imagem da questão"></img>
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Server2 resolve host2.contoso.com para 131.107.50.50.',
            'correct': true
        }, {
            'text': 'Server2 resolve host1.contoso.com para 131.107.10.15.',
            'correct': false
        }, {
            'text': 'Server3 resolve host2.contoso.com para 131.107.50.50.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*******
        `
        ,
        'filters':[
            'K001'
        ]

    },
    
    
    
    
    {
        'question': `questão 81 tópico 5 \nVocê tem uma rede virtual chamada VNet1 conforme mostrado na exposição. (Clique na guia Exposição.)
            <img src="imagens/fquestao81topico5.png" alt="imagem da questão"></img>
            \nNenhum dispositivo está conectado ao VNet1.\nVocê planeja emparelhar a VNet1 com outra rede virtual chamada VNet2. VNet2 tem um espaço de endereço de 10.2.0.0/16.\nVocê precisa criar o peering.\nO que você deve fazer primeiro?\n`,
        'number': '',
        'page': 386,
        'answers': [{
            'text': 'A. Modifique o espaço de endereço da VNet1.\n',
            'correct': true
        }, {
            'text': 'B. Adicione uma sub-rede de gateway à VNet1.\n',
            'correct': false
        }, {
            'text': 'C. Crie uma sub-rede em VNet1 e VNet2.\n',
            'correct': false
        }, {
            'text': 'D. Configure um endpoint de serviço na VNet2.',
            'correct': false
        }
        ],
        'explication': 'A\nAs redes virtuais que você peer devem ter espaços de endereço IP não sobrepostos. A exposição indica que VNet1 tem um espaço de endereço de\n10.2.0.0/16, que é igual ao VNet2 e, portanto, se sobrepõe. Precisamos alterar o espaço de endereço do VNet1.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-peering#requirements-and-constraints\nhttps://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-faq\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `questão 82 tópico 5 
            \nVocê tem as máquinas virtuais do Azure mostradas na tabela a seguir.
            <img src="imagens/fquestao82topico5.png" alt="imagem da questão"></img>
            \nA VNET1 está vinculada a uma zona DNS privada chamada contoso.com que contém os registros mostrados na tabela a seguir.
            <img src="imagens/fquestao82topico5parte2.png" alt="imagem da questão"></img>
            \nVocê precisa executar ping na VM2 da VM1.\nQuais nomes DNS você pode usar para executar ping na VM2?\n`,
        'number': '',
        'page': 387,
        'answers': [{
            'text': 'A. somente comp2.contoso.com e comp4.contoso.com\n',
            'correct': false
        }, {
            'text': 'B. comp1.contoso.com, comp2.contoso.com, comp3.contoso.com e comp4.contoso.com\n',
            'correct': false
        }, {
            'text': 'C. somente comp2.contoso.com\n',
            'correct': true
        }, {
            'text': 'D. somente comp1.contoso.com e comp2.contoso.com\n',
            'correct': false
        }, {
            'text': 'E. somente comp1.contoso.com, comp2.contoso.com e comp4.contoso.com',
            'correct': false
        }
        ],
        'explication': 'B\nReferência:\nhttps://medium.com/azure-architects/exploring-azure-private-dns-be65de08f780 https://simpledns.plus/help/dns-record-types\nDistribuição de votos da comunidade\nC (97%)'
    }, {
        'question': '84\nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um computador chamado Computer1 que tem uma conexão VPN ponto a site com uma rede virtual do Azure chamada VNet1. O ponto-a-site\nconexão usa um certificado autoassinado.\nNo Azure, você baixa e instala o pacote de configuração do cliente VPN em um computador chamado Computer2.\nVocê precisa garantir que pode estabelecer uma conexão VPN ponto a site com a VNet1 do Computador2.\nSolução: No Computador2, você define o tipo de inicialização do serviço Agente de política IPSec como Automático.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 390,
        'answers': [{
            'text': 'Sim\n',
            'correct': false
        }, {
            'text': 'Não',
            'correct': true
        }
        ],
        'explication': 'B\nCada computador cliente que se conecta a uma VNet usando ponto a site deve ter um certificado de cliente instalado. Você gera um certificado de cliente a partir de\no certificado raiz autoassinado e, em seguida, exporte e instale o certificado do cliente. Se o certificado do cliente não estiver instalado, a autenticação falhará.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-certi cates-point-to-site\nDistribuição de votos da comunidade\nB (100%)\nTópico 5'
    }, {
        'question': '85\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 390,
        'answers': [{
            'text': 'A. Persistência de sessão para IP e protocolo do cliente\n',
            'correct': true
        }, {
            'text': 'B. Protocolo para UDP\n',
            'correct': false
        }, {
            'text': 'C. Persistência de sessão para Nenhuma\n',
            'correct': false
        }, {
            'text': 'D. IP flutuante (retorno direto do servidor) para Habilitado',
            'correct': false
        }
        ],
        'explication': 'A\nReferência:\nhttps://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-distribution-mode?tabs=azure-portal\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `questao 86 tópico 5 
            \nVocê tem uma assinatura do Azure que usa os endereços IP públicos mostrados na tabela a seguir.
            <img src="imagens/fquestao86topico5.png" alt="imagem da questão"></img>
            \nVocê precisa criar um Azure Standard Load Balancer público.\nQuais endereços IP públicos você pode usar?\n`,
        'number': '',
        'page': 391,
        'answers': [{
            'text': 'A. IP1, IP2 e IP3\n',
            'correct': false
        }, {
            'text': 'B. Somente IP2\n',
            'correct': false
        }, {
            'text': 'C. Somente IP3\n',
            'correct': true
        }, {
            'text': 'D. Somente IP1 e IP3',
            'correct': false
        }
        ],
        'explication': 'C\nSKUs correspondentes são necessários para balanceadores de carga e recursos de IP público. Você não pode ter uma mistura de recursos de SKU básico e SKU padrão\nrecursos.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses\nDistribuição de votos da comunidade\nC (100%)\nTópico 5'
    }, {
        'question': '87\nVocê tem uma assinatura do Azure.\nVocê está implantando um cluster do Azure Kubernetes Service (AKS) que conterá vários pods. Os pods usarão rede kubernet.\nVocê precisa restringir o tráfego de rede entre os pods.\nO que você deve configurar no cluster AKS?\n',
        'number': '',
        'page': 391,
        'answers': [{
            'text': 'A. a política de rede do Azure\n',
            'correct': false
        }, {
            'text': 'B. a política da rede Calico\n',
            'correct': true
        }, {
            'text': 'C. políticas de segurança de pod\n',
            'correct': false
        }, {
            'text': 'D. um grupo de segurança de aplicativos',
            'correct': false
        }
        ],
        'explication': 'B\nReferência:\nhttps://docs.microsoft.com/en-us/azure/aks/use-network-policies\nDistribuição de votos da comunidade\nB (97%)'
    }, {
        'question': '89\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 393,
        'answers': [{
            'text': 'A. IP flutuante (retorno direto do servidor) para Habilitado\n',
            'correct': false
        }, {
            'text': 'B. IP flutuante (retorno direto do servidor) para Desabilitado\n',
            'correct': false
        }, {
            'text': 'C. uma sonda de integridade\n',
            'correct': false
        }, {
            'text': 'D. Persistência de sessão para IP e protocolo do cliente',
            'correct': true
        }
        ],
        'explication': 'D\nCom Sticky Sessions, quando um cliente inicia uma sessão em um de seus servidores web, a sessão permanece nesse servidor específico. Para configurar um Azure\nBalanceador de carga para\nSessões fixas definem a persistência da sessão para o IP do cliente.\nNa imagem a seguir você pode ver a configuração da sessão fixa:\nObservação:\nExistem várias versões desta questão no exame. A pergunta pode ter outras opções de resposta incorretas, incluindo as seguintes:\n1. Tempo limite de inatividade (minutos) até 20\n2. Protocolo para UDP\nReferência:\nhttps://cloudopszone.com/con gure-azure-load-balancer-for-sticky-sessions/\nDistribuição de votos da comunidade\nD (100%)'
    },

    {
        'question': `Questão 90 Tópico 5
            Você tem uma assinatura do Azure que contém as máquinas virtuais mostradas na tabela a seguir:
            <img src="imagens/xquestao90topico5.png" alt="imagem da questão"></img>
            VM1 e VM2 usam endereços IP públicos. No Windows Server 2019 em VM1 e VM2, você permite conexões de entrada da Área de Trabalho Remota.
            Subnet1 e Subnet2 estão em uma rede virtual chamada VNET1.
            A assinatura contém dois grupos de segurança de rede (NSGs) chamados NSG1 e NSG2. NSG1 usa apenas as regras padrão.
            NSG2 usa as regras padrão e a seguinte regra de entrada personalizada:
            ✑ Prioridade: 100
            ✑ Nome: Rule1
            ✑ Porta: 3389
            ✑ Protocolo: TCP
            ✑ Origem: Qualquer
            ✑ Destino: Qualquer
            ✑ Ação: Permitir
            NSG1 está associado à Subnet1. NSG2 está associado à interface de rede de VM2.
            Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
            NOTA: Cada seleção correta vale um ponto.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Na Internet, você pode conectar-se à VM1 usando a Área de Trabalho Remota.',
            'correct': false
        }, {
            'text': 'Na Internet, você pode conectar-se ao VM2 usando a Área de Trabalho Remota.',
            'correct': true
        }, {
            'text': 'Da VM1, você pode se conectar à VM2 usando a Área de Trabalho Remota',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `******
        `

    },
    
    
    
    {
        'question': '91\nVocê tem uma assinatura do Azure que contém duas máquinas virtuais denominadas VM1 e VM2.\nVocê cria um balanceador de carga do Azure.\nVocê planeja criar uma regra de balanceamento de carga que balanceará a carga do tráfego HTTPS entre VM1 e VM2.\nQuais dois recursos adicionais do balanceador de carga você deve criar antes de criar a regra de balanceamento de carga? Cada resposta correta apresenta parte\nda solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 395,
        'answers': [{
            'text': 'A. um endereço IP de front-end\n',
            'correct': false
        }, {
            'text': 'B. uma regra NAT de entrada\n',
            'correct': false
        }, {
            'text': 'C. uma rede virtual\n',
            'correct': false
        }, {
            'text': 'D. um pool de back-end\n',
            'correct': true
        }, {
            'text': 'E. uma investigação de saúde',
            'correct': true
        }
        ],
        'explication': 'DE\nReferência:\nhttps://docs.microsoft.com/en-us/azure/load-balancer/components\nDistribuição de votos da comunidade\nDE (83%) Outros\nTópico 5'
    }, {
        'question': '92\nVocê tem uma rede local que contém um servidor de banco de dados denominado dbserver1.\nVocê tem uma assinatura do Azure.\nVocê planeja implantar três máquinas virtuais do Azure. Cada máquina virtual será implantada em uma zona de disponibilidade separada.\nVocê precisa configurar um gateway de VPN do Azure para uma VPN site a site. A solução deve garantir que as máquinas virtuais possam se conectar ao dbserver1.\nQue tipo de SKU e atribuição de endereço IP público você deve usar para o gateway?\n',
        'number': '',
        'page': 395,
        'answers': [{
            'text': 'A. um SKU básico e uma atribuição de endereço IP estático\n',
            'correct': false
        }, {
            'text': 'B. um SKU padrão e uma atribuição de endereço IP estático\n',
            'correct': true
        }, {
            'text': 'C. um SKU básico e uma atribuição de endereço IP dinâmico',
            'correct': false
        }
        ],
        'explication': 'C\nO gateway VPN suporta apenas Dinâmico.\nNota: O gateway VPN requer um endereço IP público para sua configuração. Um endereço IP público é usado como ponto de conexão externo da VPN.\nEspecifique nos valores para Endereço IP público. Essas configurações especificam o objeto de endereço IP público associado ao gateway VPN. O\no endereço IP público é atribuído dinamicamente a este objeto quando o gateway VPN é criado. A única vez que o endereço IP público muda é quando\no gateway é excluído e recriado.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/tutorial-site-to-site-portal\nDistribuição de votos da comunidade\nB (88%) 12%'
    },

    {
        'question': `Questão 93 Tópico 5

        Você tem as máquinas virtuais do Azure mostradas na tabela a seguir.
        <img src="imagens/xquestao93topico5parte1.png" alt="imagem da questão"></img>
        VNET1, VNET2 e VNET3 são pareadas.
        <img src="imagens/xquestao93topico5parte2.jpg" alt="imagem da questão"></img>
        VNET1 e VNET2 são vinculadas a uma zona DNS privada do Azure chamada contoso.com que contém os registros mostrados na tabela a seguir.
        <img src="imagens/xquestao93topico5parte3.jpg" alt="imagem da questão"></img>
        As redes virtuais são configuradas para usar os servidores DNS mostrados na tabela a seguir.
        <img src="imagens/xquestao93topico5parte4.jpg" alt="imagem da questão"></img>
        Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'Da VM1, server1.contoso.com é resolvido para 131.107.3.3.',
            'correct': true
        }, {
            'text': 'Na VM2, server1.contoso.com é resolvido para 131.107.3.3.',
            'correct': false
        }, {
            'text': 'Na VM3, server2.contoso.com é resolvido para 131.107.2.4.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `******
        `

    },
    {
        'question': `Questão 94 Tópico 5
        Você tem duas máquinas virtuais do Azure, conforme mostrado na tabela a seguir.
        <img src="imagens/xquestao94topico5parte1.png" alt="imagem da questão"></img>
        Você cria as zonas DNS do Azure mostradas na tabela a seguir.
        <img src="imagens/xquestao94topico5parte1.png" alt="imagem da questão"></img>
        Você executa as seguintes ações:
        ✑ ׀¢׀ 3/4fabrikam.com, você adiciona um link de rede virtual para vnet1 e habilita o registro automático.
        ✑ Para contoso.com, você atribui a vm1 e vm2 a função Proprietário.
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'O registro DNS A para vm1 é adicionado a contoso.com e tem o endereço IP 131.107.50.20.',
            'correct': false
        }, {
            'text': 'O registro DNS A para vm1 é adicionado a fabrikam.com e tem o endereço IP 10.0.1.4.',
            'correct': true
        }, {
            'text': 'O registro DNS A para vm2 é adicionado a fabrikam.com e tem o endereço IP 10.0.1.5.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*****
        `

    },

    {
        'question': `Questão 96 Tópico 5
        Você tem uma rede virtual chamada VNET1 que contém as sub-redes mostradas na tabela a seguir:
        <img src="imagens/xquestao96topico5parte1.png" alt="imagem da questão"></img>
        Você tem máquinas virtuais do Azure que têm as configurações de rede mostradas na tabela a seguir:
        <img src="imagens/xquestao96topico5parte2.png" alt="imagem da questão"></img>
        Para NSG1, você cria a regra de segurança de entrada mostrada na tabela a seguir:
        <img src="imagens/xquestao96topico5parte3.png" alt="imagem da questão"></img>
        Para NSG2, você cria a regra de segurança de entrada mostrada na tabela a seguir:
        <img src="imagens/xquestao96topico5parte4.png" alt="imagem da questão"></img>
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{
            'text': 'VM2 pode se conectar aos serviços da porta TCP 1433 em VM1.',
            'correct': false
        }, {
            'text': 'VM1 pode se conectar aos serviços da porta TCP 1433 na VM2.',
            'correct': true
        }, {
            'text': 'VM2 pode se conectar aos serviços da porta TCP 1433 em VM3.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `******
        `

    },

    {
        'question': `Questão 97 Tópico 5
        Você tem uma assinatura do Azure chamada Subscription1.
        Subscription1 contém as máquinas virtuais na tabela a seguir:
        <img src="imagens/xquestao97topico5parte1.png" alt="imagem da questão"></img>
        Subscription1 contém uma rede virtual chamada VNet1 que tem as sub-redes na tabela a seguir:
        <img src="imagens/xquestao97topico5parte2.png" alt="imagem da questão"></img>
        VM3 tem vários adaptadores de rede, incluindo um adaptador de rede chamado NIC3. O encaminhamento de IP está habilitado em NIC3. O roteamento está habilitado em VM3.
        Você cria uma tabela de rotas chamada RT1 que contém as rotas na tabela a seguir:
        <img src="imagens/xquestao97topico5parte3.png" alt="imagem da questão"></img>
        
        Você aplica RT1 a Subnet1 e Subnet2.
        Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'VM3 pode estabelecer uma conexão de rede com VM1.',
            'correct': true
        }, {
            'text': 'Se a VM3 estiver desativada, a VM2 poderá estabelecer uma conexão de rede com a VM1.',
            'correct': false
        }, {
            'text': 'VM1 pode estabelecer uma conexão de rede com VM2.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*****
        `

    },
    
    
    
    {
        'question': '98\nSua rede local contém um compartilhamento SMB chamado Share1.\nVocê tem uma assinatura do Azure que contém os seguintes recursos:\n✑ Um aplicativo da web chamado webapp1\n✑ Uma rede virtual chamada VNET1\nVocê precisa garantir que o webapp1 possa se conectar ao Share1.\nO que você deve implantar?\n',
        'number': '',
        'page': 403,
        'answers': [{
            'text': 'A. um Azure Application Gateway\n',
            'correct': false
        }, {
            'text': 'B. um Azure Active Directory (Azure AD) Application Proxy\n',
            'correct': false
        }, {
            'text': 'C. um Azure Virtual Network Gateway',
            'correct': true
        }
        ],
        'explication': 'C\nUma conexão de gateway VPN site a site pode ser usada para conectar sua rede local a uma rede virtual do Azure por meio de um IPsec/IKE (IKEv1\nou IKEv2) túnel VPN.\nEste tipo de conexão requer um dispositivo VPN, um gateway VPN, localizado no local que tenha um endereço IP público externo atribuído a\nisto.\nRespostas incorretas:\nB: O Application Proxy é um recurso do Azure AD que permite aos usuários acessar aplicativos Web locais a partir de um cliente remoto.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-site-to-site-resource-manager-portal\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': '99\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 404,
        'answers': [{
            'text': 'A. o cmdlet Publish-AzVMDscCon guração\n',
            'correct': false
        }, {
            'text': 'B. Informações sobre aplicativos do Azure\n',
            'correct': false
        }, {
            'text': 'C. Extensão de script personalizado do Azure\n',
            'correct': true
        }, {
            'text': 'D. o cmdlet New-AzCon guraçãoAssignement',
            'correct': false
        }
        ],
        'explication': 'C\nObservação:\nExistem várias versões desta questão no exame. A pergunta tem duas respostas corretas:\n1. uma extensão Desired State Configuration (DSC)\n2. Extensão de script personalizado do Azure\nA pergunta pode ter outras opções de resposta incorretas, incluindo as seguintes:\n✑ Centro de Implantação no Serviço de Aplicativo do Azure\n✑ um perfil de configuração de dispositivo do Microsoft Intune\nReferência:\nhttps://docs.microsoft.com/en-us/azure/architecture/framework/devops/automation-con guração\nDistribuição de votos da comunidade\nC (92%) 8%\nTópico 5'
    }, {
        'question': `questão 100 tópico 5 
            \nSua rede local contém um gateway VPN.\nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/fquestao100topico5.png" alt="imagem da questão"></img>
            \nVocê precisa garantir que todo o tráfego da VM1 para o storage1 viaje pela rede de backbone da Microsoft.\nO que você deve configurar?\n`,
        'number': '',
        'page': 404,
        'answers': [{
            'text': 'A. um grupo de segurança de rede (NSG)\n',
            'correct': false
        }, {
            'text': 'B. pontos de extremidade de serviço\n',
            'correct': true
        }, {
            'text': 'C. Serviço de peering do Azure\n',
            'correct': false
        }, {
            'text': 'D. Firewall do Azure',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `questão 102 tópico 5
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/fquestao102topico5.png" alt="imagem da questão"></img>
            \nVocê configura o Azure Site Recovery para replicar a VM1 entre as regiões Leste e Oeste dos EUA.\nExecute um failover de teste da VM1 e especifique VNET2 como a rede virtual de destino.\nQuando a versão de teste da VM1 for criada, a qual sub-rede a máquina virtual estará conectada?\n`,
        'number': '',
        'page': 405,
        'answers': [{
            'text': 'A. TestSubnet1\n',
            'correct': false
        }, {
            'text': 'B. DemoSubnet1\n',
            'correct': true
        }, {
            'text': 'C. Sub-rede de recuperaçãoA\n',
            'correct': false
        }, {
            'text': 'D. RecuperaçãoSub-redeB',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nB (93%) 7%'
    }, {
        'question': '103\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 406,
        'answers': [{
            'text': 'A. Protocolo para UDP\n',
            'correct': false
        }, {
            'text': 'B. Persistência de sessão para Nenhuma\n',
            'correct': false
        }, {
            'text': 'C. IP flutuante (retorno direto do servidor) para desabilitado\n',
            'correct': false
        }, {
            'text': 'D. Persistência de sessão para IP do cliente',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (90%) 10%\nTópico 5'
    }, {
        'question': '104\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 406,
        'answers': [{
            'text': 'A. o cmdlet Publish-AzVMDscCon guração\n',
            'correct': false
        }, {
            'text': 'B. um perfil de configuração de dispositivo do Microsoft Endpoint Manager\n',
            'correct': false
        }, {
            'text': 'C. Centro de Implantação no Serviço de Aplicativo do Azure\n',
            'correct': false
        }, {
            'text': 'D. uma extensão Desired State Configuration (DSC)',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)'
    }, {
        'question': '105\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 407,
        'answers': [{
            'text': 'A. IP flutuante (retorno direto do servidor) para Desativado\n',
            'correct': false
        }, {
            'text': 'B. Persistência de sessão para IP do cliente\n',
            'correct': true
        }, {
            'text': 'C. Protocolo para UDP\n',
            'correct': false
        }, {
            'text': 'D. Tempo limite ocioso (minutos) para 20',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)\nTópico 5'
    }, {
        'question': '106\nVocê tem uma assinatura do Azure que contém 20 máquinas virtuais, um grupo de segurança de rede (NSG) denominado NSG1 e duas redes virtuais denominadas\nVNET1 e VNET2 que estão emparelhados.\nVocê planeja implantar um host SKU básico do Azure Bastion chamado Bastion1 na VNET1.\nVocê precisa configurar o NSG1 para permitir acesso de entrada às máquinas virtuais por meio do Bastion1.\nQual porta você deve configurar para a regra de segurança de entrada?\n',
        'number': '',
        'page': 407,
        'answers': [{
            'text': 'A. 22\n',
            'correct': false
        }, {
            'text': 'B. 443',
            'correct': true
        }, {
            'text': '\nC.389',
            'correct': false
        }, {
            'text': '\nD.8080',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (72%) A (28%)'
    }, {
        'question': '108\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 409,
        'answers': [{
            'text': 'A. Persistência de sessão para Nenhuma\n',
            'correct': false
        }, {
            'text': 'B. uma investigação de saúde\n',
            'correct': false
        }, {
            'text': 'C. Persistência de sessão para IP do cliente\n',
            'correct': true
        }, {
            'text': 'D. Tempo limite de inatividade (minutos) até 20',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': `questão 109 tópico 5
            \nVocê tem uma assinatura do Azure que contém as redes virtuais mostradas na tabela a seguir.
            <img src="imagens/fquestao109topico5.png" alt="imagem da questão"></img>
            \nVocê precisa implantar um firewall do Azure chamado AF1 para RG1 na região oeste do Azure dos EUA.\nEm quais redes virtuais você pode implantar o AF1?\n`,
        'number': '',
        'page': 410,
        'answers': [{
            'text': 'A. VNET1, VNET2, VNET3 e VNET4\n',
            'correct': false
        }, {
            'text': 'B. Somente VNET1 e VNET2\n',
            'correct': false
        }, {
            'text': 'C. Somente VNET1\n',
            'correct': true
        }, {
            'text': 'D. Somente VNET1, VNET2 e VNET4\n',
            'correct': false
        }, {
            'text': 'E. Somente VNET1 e VNET4',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (70%) E (29%)\nTópico 5'
    }, {
        'question': `questão 110 tópico 5
            \nVocê tem uma rede local.\nVocê tem uma assinatura do Azure que contém três redes virtuais denominadas VNET1. VNET2. e VNET3. As redes virtuais são peered e\nconectado à rede local. A assinatura contém as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/fquestao110topico5.png" alt="imagem da questão"></img>
            \nVocê precisa monitorar a conectividade entre as máquinas virtuais e a rede local usando o Connection Monitor.\nQual é o número mínimo de monitores de conexão que você deve implantar?\n`,
        'number': '',
        'page': 410,
        'answers': [{
            'text': 'A. 1\n',
            'correct': false
        }, {
            'text': 'B. 2',
            'correct': true
        }, {
            'text': '\nC.3',
            'correct': false
        }, {
            'text': '\nD. 4',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (76%) A (22%)'
    },
    {
        'question': `Questão 111 Tópico 5
            Você planeja implantar o seguinte modelo do Azure Resource Manager (ARM).
            <img src="imagens/gquestao111topico5.png" alt="imagem da questão" style="max-width: 80%;"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'LB1 será conectado a uma sub-rede chamada VNET1/netname',
            'correct': false
        }, {
            'text': 'LB1 só pode ser implantado no grupo de recursos que contém VNET1',
            'correct': true
        }, {
            'text': 'O valor da variável sku pode ser fornecido como parâmetro quando o modelo é implantado a partir de um prompt de comando',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Maioria concordou com a fonte original
        `

    },

    
    {
        'question': '112\nVocê tem uma assinatura do Azure que contém uma conta de armazenamento. A conta armazena dados do site.\nVocê precisa garantir que o tráfego de entrada do usuário use o ponto de presença (POP) da Microsoft mais próximo da localização do usuário.\nO que você deve configurar?\n',
        'number': '',
        'page': 413,
        'answers': [{
            'text': 'A. endpoints privados\n',
            'correct': false
        }, {
            'text': 'B. Regras do Firewall do Azure\n',
            'correct': false
        }, {
            'text': 'C. Preferência de roteamento\n',
            'correct': true
        }, {
            'text': 'D. balanceamento de carga',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (94%) 6%'
    }, {
        'question': '113\nVocê tem duas máquinas virtuais do Azure chamadas VM1 e VM2 que executam o Windows Server. As máquinas virtuais estão em uma sub-rede chamada Subnet1.\nA Subnet1 está numa rede virtual chamada VNet1.\nVocê precisa impedir que a VM1 acesse a VM2 na porta 3389.\nO que você deveria fazer?\n',
        'number': '',
        'page': 414,
        'answers': [{
            'text': 'A. Crie um grupo de segurança de rede (NSG) que tenha uma regra de segurança de saída para negar a porta de destino 3389 e aplicar o NSG à rede\ninterface da VM1.\n',
            'correct': true
        }, {
            'text': 'B. Configurar o Azure Bastion na VNet1.\n',
            'correct': false
        }, {
            'text': 'C. Crie um grupo de segurança de rede (NSG) que tenha uma regra de segurança de saída para negar a porta de origem 3389 e aplique o NSG à Subnet1.\n',
            'correct': false
        }, {
            'text': 'D. Crie um grupo de segurança de rede (NSG) que tenha uma regra de segurança de entrada para negar a porta de origem 3389 e aplique o NSG à Subnet1.',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nA (89%) 11%\nTópico 5'
    }, {
        'question': `questão 114 tópico 5 
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/fquestao115topico5.png" alt="imagem da questão"></img>
            \nVocê precisa gerenciar o tráfego de saída da VNET1 usando o Firewall1.\nO que você deve fazer primeiro?\n`,
        'number': '',
        'page': 414,
        'answers': [{
            'text': 'A. Configure o Hybrid Connection Manager.\n',
            'correct': false
        }, {
            'text': 'B. Atualize o ASP1 para o SKU Premium.\n',
            'correct': false
        }, {
            'text': 'C. Crie uma tabela de rotas.\n',
            'correct': true
        }, {
            'text': 'D. Crie um observador de rede do Azure.',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': `questão 115 tópico 5 
            \nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/fquestao115topico5.png" alt="imagem da questão"></img>
            \nTodos os recursos ligam-se a uma rede virtual chamada VNet1.\nVocê planeja implantar um host do Azure Bastion chamado Bastion1 na VNet1.\nQuais recursos podem ser protegidos usando Bastion1?\n`,
        'number': '',
        'page': 415,
        'answers': [{
            'text': 'A. Somente VM1\n',
            'correct': true
        }, {
            'text': 'B. apenas contoso.com\n',
            'correct': false
        }, {
            'text': 'C. Somente App1 e contoso.com\n',
            'correct': false
        }, {
            'text': 'D. Somente VM1 e contoso.com\n',
            'correct': false
        }, {
            'text': 'E. VM1, App1 e contoso.com',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (98%)\nTópico 5'
    }, {
        'question': '116\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 415,
        'answers': [{
            'text': 'A. Persistência de sessão para Nenhuma\n',
            'correct': false
        }, {
            'text': 'B. uma investigação de saúde\n',
            'correct': false
        }, {
            'text': 'C. Persistência de sessão para IP e protocolo do cliente\n',
            'correct': true
        }, {
            'text': 'D. Tempo limite de inatividade (minutos) até 20',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
    }, {
        'question': '117\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 416,
        'answers': [{
            'text': 'A. uma investigação de saúde\n',
            'correct': false
        }, {
            'text': 'B. IP flutuante (retorno direto do servidor) para Habilitado\n',
            'correct': false
        }, {
            'text': 'C. Persistência de sessão para IP e protocolo do cliente\n',
            'correct': true
        }, {
            'text': 'D. Protocolo para UDP',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)\nTópico 5'
    }, {
        'question': `questão 118 tópico 5
            \nVocê tem uma assinatura do Azure que contém 10 máquinas virtuais e os recursos mostrados na tabela a seguir.
            <img src="imagens/fquestao118topico5.png" alt="imagem da questão"></img>
            \nVocê precisa garantir que o Bastion1 possa suportar 100 usuários SSH simultâneos. A solução deve minimizar o esforço administrativo.\nO que você deve fazer primeiro?\n`,
        'number': '',
        'page': 416,
        'answers': [{
            'text': 'A. Redimensionar a sub-rede do Bastion1\n',
            'correct': false
        }, {
            'text': 'B. Configurar o dimensionamento do host.\n',
            'correct': false
        }, {
            'text': 'C. Crie um grupo de segurança de rede (NSG)\n',
            'correct': false
        }, {
            'text': 'D. Atualize o Bastion1 para o SKU padrão',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (77%) A (23%)'
    }, {
        'question': '119\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 417,
        'answers': [{
            'text': 'A. Persistência de sessão para IP e protocolo do cliente\n',
            'correct': true
        }, {
            'text': 'B. Protocolo para UDP\n',
            'correct': false
        }, {
            'text': 'C. Persistência de sessão para Nenhuma\n',
            'correct': false
        }, {
            'text': 'D. IP flutuante (retorno direto do servidor) para desabilitado',
            'correct': false
        }
        ],
        'explication': 'A'
    },

    {
        'question': `Questão 120 Tópico 5
            Você tem um dispositivo Windows 11 chamado Dispositivo e uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/gquestao120topico5.png" alt="imagem da questão"></img>
            O Dispositivo1 tem o Azure PowerShell e a Interface de Linha de Comando (CLI) do Azure instalados.
            Do Dispositivo1, você precisa estabelecer uma conexão de Área de Trabalho Remota com a VM1.
            Quais três ações você deve executar em sequência? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize-as na ordem correta.

`,
        'number': '31',
        'page': 11,
        'answers': [

            [
                {
                    'text': '',
                    'options': [
                        { 'text': 'Na CLI do Azure no Dispositivo1, execute az network bastion rdp.', 'correct': true, 'index': '3' },
                        { 'text': 'No Bastion1, habilite a autenticação Kerberos.', 'correct': false, 'index': '-1' },
                        { 'text': 'Na VM1, habilite o acesso à VM just-in-time (JIT).', 'correct': false, 'index': '-1' },
                        { 'text': 'No Bastion1, selecione Suporte ao cliente nativo.', 'correct': true, 'index': '2' },
                        { 'text': 'No Dispositivo1, execute mstsc.exe.', 'correct': false, 'index': '-1' },
                        { 'text': 'Atualize o Bastion1 para o SKU padrão.', 'correct': true, 'index': '1' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': '',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `A maioria concordou com a fonte`,
        'typeQuestion': 'dragdrop'
    },
    
    {
        'question': '121\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 419,
        'answers': [{
            'text': 'A. IP flutuante (retorno direto do servidor) para Habilitado\n',
            'correct': false
        }, {
            'text': 'B. Persistência de sessão para IP do cliente\n',
            'correct': true
        }, {
            'text': 'C. Protocolo para UDP\n',
            'correct': false
        }, {
            'text': 'D. Tempo limite de inatividade (minutos) até 20',
            'correct': false
        }
        ],
        'explication': 'B\nTópico 5'
    }, {
        'question': `questão 122 tópico 5 
            \nVocê tem uma assinatura do Azure que tem os endereços IP públicos mostrados na tabela a seguir.
            <img src="imagens/fquestao122topico5.png" alt="imagem da questão"></img>
            \nVocê planeja implantar um host SKU do Azure Bastion Basic chamado Bastion1.\nQuais endereços IP você pode usar?\n`,
        'number': '',
        'page': 419,
        'answers': [{
            'text': 'A. Somente IP1\n',
            'correct': true
        }, {
            'text': 'B. Somente IP1 e IP2\n',
            'correct': false
        }, {
            'text': 'C. Somente IP3, IP4 e IP5\n',
            'correct': false
        }, {
            'text': 'D. Somente IP1, IP2, IP4 e IP5\n',
            'correct': false
        }, {
            'text': 'E. IP1, IP2, IP3, IP4 e IP5',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nA (80%) B (20%)'
    }, {
        'question': '123\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 420,
        'answers': [{
            'text': 'A. IP flutuante (retorno direto do servidor) para desativado\n',
            'correct': false
        }, {
            'text': 'B. IP flutuante (retorno direto do servidor) para Habilitado\n',
            'correct': false
        }, {
            'text': 'C. uma investigação de saúde\n',
            'correct': false
        }, {
            'text': 'D. Persistência de sessão para IP do cliente',
            'correct': true
        }
        ],
        'explication': 'D\nTópico 5'
    }, {
        'question': '124\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 420,
        'answers': [{
            'text': 'A. IP flutuante (retorno direto do servidor) para Enabled\n',
            'correct': false
        }, {
            'text': 'B. Tempo limite ocioso (minutos) para 20\n',
            'correct': false
        }, {
            'text': 'C. uma sonda de integridade\n',
            'correct': false
        }, {
            'text': 'D. Persistência de sessão para IP do cliente',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)'
    }, {
        'question': `questao 125 tópico 5 
        \nVocê tem duas assinaturas do Azure denominadas Sub1 e Sub2.\nSub1 contém uma máquina virtual chamada VM1 e uma conta de armazenamento chamada storage1.
        \nVM1 está associada aos recursos mostrados na tabela a seguir.\nVocê precisa mover VM1 para Sub2.
        <img src="imagens/fquestao125topico5.png" alt="imagem da questão"></img>
        \nQuais recursos você deve mover para Sub2?\n`,
        'number': '',
        'page': 421,
        'answers': [{
            'text': 'A. Somente VM1, Disk1 e NetInt1\n',
            'correct': false
        }, {
            'text': 'B. Somente VM1, Disco1 e VNet1\n',
            'correct': false
        }, {
            'text': 'C. Somente VM1, Disco1 e armazenamento1\n',
            'correct': false
        }, {
            'text': 'D. VM1, Disco1, NetInt1 e VNet1',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (94%) 6%\nTópico 5'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '126\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 421,
        'answers': [{
            'text': 'A. Persistência de sessão para IP e protocolo do cliente\n',
            'correct': true
        }, {
            'text': 'B. Tempo limite de inatividade (minutos) até 20\n',
            'correct': false
        }, {
            'text': 'C. Persistência de sessão para Nenhuma\n',
            'correct': false
        }, {
            'text': 'D. IP flutuante (retorno direto do servidor) para Habilitado',
            'correct': false
        }
        ],
        'explication': 'A'
    }, {
        'question': '127\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 422,
        'answers': [{
            'text': 'A. IP flutuante (retorno direto do servidor) para desativado\n',
            'correct': false
        }, {
            'text': 'B. Tempo limite de inatividade (minutos) até 20\n',
            'correct': false
        }, {
            'text': 'C. uma investigação de saúde\n',
            'correct': false
        }, {
            'text': 'D. Persistência de sessão para IP do cliente',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)\nTópico 5'
    }, {
        'question': '128\nVocê tem cinco máquinas virtuais do Azure que executam o Windows Server 2016. As máquinas virtuais são configuradas como servidores web.\nVocê tem um balanceador de carga do Azure chamado LB1 que fornece serviços de balanceamento de carga para as máquinas virtuais.\nVocê precisa garantir que os visitantes sejam atendidos pelo mesmo servidor web para cada solicitação.\nO que você deve configurar?\n',
        'number': '',
        'page': 422,
        'answers': [{
            'text': 'A. Persistência de sessão para IP do cliente\n',
            'correct': true
        }, {
            'text': 'B. Tempo limite de inatividade (minutos) até 20\n',
            'correct': false
        }, {
            'text': 'C. Persistência de sessão para Nenhuma\n',
            'correct': false
        }, {
            'text': 'D. Protocolo para UDP',
            'correct': false
        }
        ],
        'explication': 'A'
    }, {
        'question': '129\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 423,
        'answers': [{
            'text': 'A. o cmdlet Publish-AzVMDscCon guração\n',
            'correct': true
        }, {
            'text': 'B. um perfil de configuração de dispositivo do Microsoft Endpoint Manager\n',
            'correct': false
        }, {
            'text': 'C. Informações sobre aplicativos do Azure\n',
            'correct': false
        }, {
            'text': 'D. uma extensão Desired State Configuration (DSC)',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nA (59%) D (41%)\nTópico 5'
    }, {
        'question': '130\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 423,
        'answers': [{
            'text': 'A. Extensão de script personalizado do Azure\n',
            'correct': true
        }, {
            'text': 'B. Centro de Implantação no Serviço de Aplicativo do Azure\n',
            'correct': false
        }, {
            'text': 'C. o cmdlet New-AzCon guraçãoAssignment\n',
            'correct': false
        }, {
            'text': 'D. um perfil de configuração de dispositivo do Microsoft Endpoint Manager',
            'correct': false
        }
        ],
        'explication': 'A',
        'filters':[
            'K001'
        ]
    }, {
        'question': '131\nVocê tem uma assinatura do Azure que contém um cofre dos Serviços de Recuperação denominado Vault1.\nVocê precisa habilitar a autorização multiusuário (MAU) para o Vault1.\nQual recurso você deve criar primeiro?\n',
        'number': '',
        'page': 424,
        'answers': [{
            'text': 'A. uma unidade administrativa\n',
            'correct': false
        }, {
            'text': 'B. uma identidade gerenciada\n',
            'correct': false
        }, {
            'text': 'C. um guarda de recursos\n',
            'correct': true
        }, {
            'text': 'D. uma função personalizada do Azure',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': `questão 132 tópico 5
            \nNota: Esta questão faz parte de uma série de questões que apresentam o mesmo cenário. Cada questão da série contém uma solução única que\npode atingir os objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, estas perguntas não aparecerão na tela de revisão.\nVocê tem um aplicativo chamado App1 instalado em duas máquinas virtuais do Azure chamadas VM1 e VM2. As conexões com App1 são gerenciadas usando\num balanceador de carga do Azure.\nAs configurações efetivas de segurança de rede para VM2 são mostradas na exposição a seguir.
            <img src="imagens/fquestao132topico5.png" alt="imagem da questão"></img>
            \nVocê descobre que as conexões com App1 de 131.107.100.50 pela porta TCP 443 falham.\nVocê verifica se as regras do Load Balancer estão configuradas corretamente.\nVocê precisa garantir que as conexões com o App1 possam ser estabelecidas com êxito a partir de 131.107.100.50 pela porta TCP 443.\nSolução: você cria uma regra de segurança de entrada que permite qualquer tráfego da origem do AzureLoadBalancer e tem uma prioridade de 150.\nIsso atende ao objetivo?\n`,
        'number': '',
        'page': 425,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nA (76%) B (24%)'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': `questao 133 tópico 5
        <img src="imagens/fquestao133topico5.png" alt="imagem da questão"></img>
            \nSua rede local contém um gateway VPN.\nVocê tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            \nVocê precisa garantir que todo o tráfego da VM1 para o armazenamento1 viaje pela rede backbone da Microsoft.\nO que você deve configurar?\n`,
        'number': '',
        'page': 426,
        'answers': [{
            'text': 'A. Gateway de Aplicativo do Azure\n',
            'correct': false
        }, {
            'text': 'B. terminais/pontos de serviço\n',
            'correct': true
        }, {
            'text': 'C. Proxy de aplicativo do Azure AD\n',
            'correct': false
        }, {
            'text': 'D. WAN Virtual do Azure',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    }, {
        'question': `questao 134 tópico 5
            \nVocê cria uma VM do Azure chamada VM1 que executa o Windows Server 2019.
            \nVM1 está configurado conforme mostrado na exposição. (Clique na guia Exposição.)
            <img src="imagens/fquestao134topico5.png" alt="imagem da questão"></img>
            \nVocê precisa ativar a configuração de estado desejado para VM1.\nO que você deve fazer primeiro?\n`,
        'number': '',
        'page': 427,
        'answers': [{
            'text': 'A. Conecte-se à VM1.\n',
            'correct': false
        }, {
            'text': 'B. Inicie a VM1.\n',
            'correct': true
        }, {
            'text': 'C. Capture um instantâneo da VM1.\n',
            'correct': false
        }, {
            'text': 'D. Configure um nome DNS para VM1.',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
        , 'filters': ['K002']
    },
    {
        'question': `Questão 135 Tópico 5
        Você tem uma assinatura do Azure que contém as redes virtuais mostradas na tabela a seguir.
        <img src="imagens/questao135topico5parte1.png" alt="imagem da questão"></img>
        As sub-redes têm os espaços de endereço IP mostrados na tabela a seguir.
        <img src="imagens/questao135topico5parte2.png" alt="imagem da questão"></img>
        Você planeja criar um aplicativo de contêiner chamado contapp1 na região do Azure East US.
        Você precisa criar um ambiente de aplicativo de contêiner chamado con-env1 que atenda aos seguintes requisitos:
        • Usa sua própria rede virtual.
        • Usa sua própria sub-rede.
        • Está conectado à menor sub-rede possível.
        A quais redes virtuais você pode conectar con-env1 e qual máscara de sub-rede você deve usar? Para responder, selecione as opções apropriadas na
        área de resposta
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Virtual network: `,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente VNET1",
                    'correct': false
                }, {
                    'text': "Somente VNET2",
                    'correct': false
                }, {
                    'text': "Somente VNET3",
                    'correct': true
                },
                {
                    'text': "Somente VNET1 ou VNET2",
                    'correct': false
                }
                ,
                {
                    'text': "Somente VNET2 ou VNET3",
                    'correct': false
                }
                ,
                {
                    'text': "Somente VNET1 ou VNET3",
                    'correct': false
                }
                ,
                {
                    'text': "VNET1,VNET2 ou VNET4",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Subnet mask',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "/16",
                    'correct': false
                }, {
                    'text': "/23",
                    'correct': true
                }, {
                    'text': "/24",
                    'correct': false
                },
                {
                    'text': "/26",
                    'correct': false
                }
                ,
                {
                    'text': "/28",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `
            
	`,
	'filters':[
		'K002','L003'
	]
    },

    
    
    {
        'question': `questaao 136 tópico 5
            \nVocê tem uma assinatura do Azure que contém as redes virtuais mostradas na tabela a seguir.
            <img src="imagens/fquestao136topico5.png" alt="imagem da questão"></img>
            \nTodas as redes virtuais são peered. Cada rede virtual contém nove máquinas virtuais.\nVocê precisa configurar conexões RDP seguras com as máquinas virtuais usando o Azure Bastion.\nQual é o número mínimo de hosts Bastion necessários?\n`,
        'number': '',
        'page': 430,
        'answers': [{
            'text': 'A. 1\n',
            'correct': true
        }, {
            'text': 'B. 3\n',
            'correct': false
        }, {
            'text': 'C. 9\n',
            'correct': false
        }, {
            'text': 'D. 10',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nA (65%) B (30%) 5%'
        , 'filters': ['K002']
    }, {
        'question': '139\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 435,
        'answers': [{
            'text': 'A. o cmdlet New-AzCon guraçãoAssignment\n',
            'correct': false
        }, {
            'text': 'B. Informações sobre aplicativos do Azure\n',
            'correct': false
        }, {
            'text': 'C. o cmdlet Publish-AzVMDscCon guração\n',
            'correct': false
        }, {
            'text': 'D. uma extensão Desired State Configuration (DSC)',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)\nTópico 5'
    }, {
        'question': '140\nVocê tem uma assinatura do Azure que contém um grupo de recursos denominado RG1 e uma rede virtual denominada VNet1.\nVocê planeja criar uma instância de contêiner do Azure chamada container1.\nVocê precisa ser capaz de configurar a reutilização do escopo do rótulo de nome DNS para o contêiner1.\nO que você deve configurar para o container1?\n',
        'number': '',
        'page': 435,
        'answers': [{
            'text': 'A. o tipo de rede privada\n',
            'correct': false
        }, {
            'text': 'B. o tipo de rede pública\n',
            'correct': true
        }, {
            'text': 'C. uma nova sub-rede na VNet1\n',
            'correct': false
        }, {
            'text': 'D. um SKU confidencial',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)'
    },
    {
        'question': `Questão 141 Tópico 5
            Você tem as máquinas virtuais do Azure mostradas na tabela a seguir.
            <img src="imagens/gquestao141topico5parte1.png" alt="imagem da questão"></img>
            VNET1, VNET2 e VNET3 são pareadas.
            <img src="imagens/gquestao141topico5parte2.png" alt="imagem da questão"></img>
            VM4 tem um servidor DNS que é autoritativo para uma zona chamada contoso.com e contém os registros mostrados na tabela a seguir.
            <img src="imagens/gquestao141topico5parte3.png" alt="imagem da questão"></img>
            As redes virtuais são configuradas para usar os servidores DNS mostrados na tabela a seguir.

            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Da VM1, server1.contoso.com é resolvido para 131.107.3.3.',
            'correct': true
        }, {
            'text': 'Na VM2, server1.contoso.com é resolvido para 131.107.3.3.',
            'correct': false
        }, {
            'text': 'Na VM3, server2.contoso.com é resolvido para 131.107.2.4.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Muita divergência sobre a resposta correta, mas alguns relatando YNY,
         que também é a resposta da fonte original
        `

    },
    
    
    
    {
        'question': '143\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 438,
        'answers': [{
            'text': 'A. uma extensão Desired State Configuration (DSC)\n',
            'correct': true
        }, {
            'text': 'B. um perfil de configuração de dispositivo Microsoft Intune\n',
            'correct': false
        }, {
            'text': 'C. o cmdlet Publish-AzVMDscCon guração\n',
            'correct': false
        }, {
            'text': 'D. o cmdlet New-AzCon guraçãoAssignment',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `questao 144 tópico 5
            \nVocê tem uma assinatura do Azure que contém as redes virtuais mostradas na tabela a seguir.
            <img src="imagens/fquestao144topico5parte1.png" alt="imagem da questão"></img>
            \nA assinatura contém as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/fquestao144topico5parte2.png" alt="imagem da questão"></img>
            \nTodas as máquinas virtuais possuem apenas endereços IP privados.\nImplante um host do Azure Bastion chamado Bastion1 na VNet1.\nA quais máquinas virtuais você pode se conectar por meio do Bastion1?\n`,
        'number': '',
        'page': 439,
        'answers': [{
            'text': 'A. Somente VM1\n',
            'correct': false
        }, {
            'text': 'B. Somente VM1 e VM2\n',
            'correct': true
        }, {
            'text': 'C. Apenas VM1 e VM3\n',
            'correct': false
        }, {
            'text': 'D. VM1, VM2 e VM3',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (72%) D (28%)'
        , 'filters': ['K002']
    }, {
        'question': '145\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 440,
        'answers': [{
            'text': 'A. um perfil de configuração de dispositivo do Microsoft Intune\n',
            'correct': false
        }, {
            'text': 'B. uma extensão Desired State Configuration (DSC)\n',
            'correct': true
        }, {
            'text': 'C. Informações sobre aplicativos do Azure\n',
            'correct': false
        }, {
            'text': 'D. Centro de Implantação no Serviço de Aplicativo do Azure',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nB (100%)\nTópico 5'
    }, {
        'question': `146\nVocê tem uma assinatura do Azure.\nVocê planeja migrar 50 máquinas virtuais do VMware vSphere para a assinatura.\nVocê cria um cofre dos Serviços de Recuperação.
            \nO que você deve fazer a seguir?\n`,
        'number': '',
        'page': 440,
        'answers': [{
            'text': 'A. Configure uma rede estendida.\n',
            'correct': false
        }, {
            'text': 'B. Crie um plano de recuperação.\n',
            'correct': false
        }, {
            'text': 'C. Implante um modelo Open Virtualization Application (OVA) no vSphere.\n',
            'correct': false
        }, {
            'text': 'D. Configure uma rede virtual.',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)'
        , 'filters': ['K002']

    }, {
        'question': `questao 148 tópico 6 
            \nVocê tem uma assinatura do Azure que contém as redes virtuais mostradas na tabela a seguir.
            <img src="imagens/fquestao148topico6.png" alt="imagem da questão"></img>
            \nVocê precisa garantir que todo o tráfego entre VNet1 e VNet2 atravesse a rede backbone da Microsoft.\nO que você deve configurar?\n`,
        'number': '',
        'page': 442,
        'answers': [{
            'text': 'A. um endpoint privado\n',
            'correct': false
        }, {
            'text': 'B. espiar\n',
            'correct': true
        }, {
            'text': 'C. Rota Expressa\n',
            'correct': false
        }, {
            'text': 'D. uma tabela de rotas',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nB (91%) 9%\nTópico 5'
    }, {
        'question': `questao 149 tópico 6
            \nVocê tem as redes virtuais do Azure mostradas na tabela a seguir.
            <img src="imagens/fquestao149topico5.png" alt="imagem da questão"></img>

            \nQuais redes virtuais você pode fazer peering com VNet1?\n`,
        'number': '',
        'page': 442,
        'answers': [{
            'text': 'A. VNet2, VNet3 e VNet4\n',
            'correct': false
        }, {
            'text': 'B. Somente VNet2\n',
            'correct': false
        }, {
            'text': 'C. Somente VNet3 e VNet4\n',
            'correct': true
        }, {
            'text': 'D. Somente VNet2 e VNet3',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nC (100%)'
        , 'filters': ['K002']
    }, {
        'question': '150\nVocê tem uma assinatura do Azure.\nVocê está criando uma nova instância de contêiner do Azure que terá as seguintes configurações:\n• Nome do contêiner: cont1\n• SKU: Padrão\n• Tipo de sistema operacional: Windows\n• Tipo de rede: Pública\n• Memória (GiB): 2,5\n• Número de núcleos de CPU: 2\nVocê descobre que a configuração Privada para o tipo de rede não está disponível.\nVocê precisa garantir que cont1 possa ser configurado para usar rede privada.\nQual configuração você deve alterar?\n',
        'number': '',
        'page': 443,
        'answers': [{
            'text': 'A. Memória (GiB)\n',
            'correct': false
        }, {
            'text': 'B. Tipo de rede\n',
            'correct': false
        }, {
            'text': 'C. Número de núcleos de CPU\n',
            'correct': false
        }, {
            'text': 'D. Tipo de sistema operacional\n',
            'correct': true
        }, {
            'text': 'E. SKU',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nD (56%) B (44%)'
    }, {
        'question': `questao 1 tópico 6 
            Você tem uma assinatura do Azure que possui um cofre dos Serviços de Recuperação chamado Vault1. A assinatura contém as máquinas virtuais mostradas no\nseguinte tabela:
            <img src="imagens/fquestao1topico6.png" alt="imagem da questão"></img>
            \nVocê planeja agendar backups para ocorrerem todas as noites às 23h.\nDe quais máquinas virtuais você pode fazer backup usando o Backup do Azure?\n`,
        'number': '',
        'page': 444,
        'answers': [{
            'text': 'A. Somente VM1 e VM3\n',
            'correct': false
        }, {
            'text': 'B. VM1, VM2, VM3 e VM4\n',
            'correct': true
        }, {
            'text': 'C. Somente VM1 e VM2\n',
            'correct': false
        }, {
            'text': 'D. Somente VM1',
            'correct': false
        }
        ],
        'explication': 'B\nO Backup do Azure dá suporte ao backup do sistema operacional de servidor Windows de 64 bits do Windows Server 2008.\nO Backup do Azure dá suporte ao backup do sistema operacional Windows 10 de 64 bits.\nO Backup do Azure dá suporte ao backup do sistema operacional Ubuntu Server de 64 bits do Ubuntu 12.04.\nO Backup do Azure dá suporte ao backup de VMs desligadas ou inativas.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/backup/backup-support-matrix-iaas https://docs.microsoft.com/en-us/azure/virtual-\nmáquinas/linux/distros endossadas\nDistribuição de votos da comunidade\nB (100%)\nTópico 6'
    }, {
        'question': '2\nVocê tem uma assinatura do Azure que contém uma máquina virtual chamada VM1.\nVocê planeja implantar uma regra de alerta do Azure Monitor que disparará um alerta quando o uso da CPU na VM1 exceder 80%.\nVocê precisa garantir que a regra de alerta envie uma mensagem de email para dois usuários chamados Usuário1 e Usuário2.\nO que você deve criar para o Azure Monitor?\n',
        'number': '',
        'page': 444,
        'answers': [{
            'text': 'A. um grupo de ação\n',
            'correct': true
        }, {
            'text': 'B. um grupo de segurança habilitado para email\n',
            'correct': false
        }, {
            'text': 'C. um grupo de distribuição\n',
            'correct': false
        }, {
            'text': 'D. um grupo do Microsoft 365',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': `questao 3 tópico 6 
            \nVocê tem as máquinas virtuais do Azure mostradas na tabela a seguir:
            <img src="imagens/fquestao3topico6.png" alt="imagem da questão"></img>
            \nVocê tem um cofre dos Serviços de Recuperação que protege VM1 e VM2.
            \nVocê precisa proteger VM3 e VM4 usando os Serviços de Recuperação.\nO que você deve fazer primeiro?\n`,
        'number': '',
        'page': 445,
        'answers': [{
            'text': 'A. Criar um novo cofre dos Serviços de Recuperação\n',
            'correct': true
        }, {
            'text': 'B. Criar uma conta de armazenamento\n',
            'correct': false
        }, {
            'text': 'C. Configurar as extensões para VM3 e VM4\n',
            'correct': false
        }, {
            'text': 'D. Crie uma nova política de backup',
            'correct': false
        }
        ],
        'explication': 'A\nUm cofre dos Serviços de Recuperação é uma entidade de armazenamento no Azure que aloja dados. Os dados normalmente são cópias de dados ou informações de configuração para\nmáquinas virtuais\n(VMs), cargas de trabalho, servidores ou estações de trabalho. Você pode usar cofres dos Serviços de Recuperação para armazenar dados de backup para vários serviços do Azure\nReferência:\nhttps://docs.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-enable-replicatio\nDistribuição de votos da comunidade\nUm (100%)'
        , 'filters': ['K002']
    }, {
        'question': `questao 5 tópico 6\n
            Você tem uma assinatura do Azure que contém as identidades mostradas na tabela a seguir.
                <img src="imagens/fquestao5topico6.png" alt="imagem da questão"></img>
                \nUser1, Principal1 e Group1 recebem a função de Leitor de Monitoramento.\nUm grupo de ação denominado AG1 tem o tipo de notificação Email Azure Resource Manager Role e está configurado para enviar email com a função Monitoring Reader.
                \nVocê cria uma regra de alerta chamada Alert1 que usa AG1.\nVocê precisa identificar quem receberá uma notificação por e-mail quando o Alerta1 for acionado.
                \nQuem você deve identificar?\n
              `,
        'number': '',
        'page': 447,
        'answers': [{
            'text': 'A. Somente Usuário1 e Principal1\n',
            'correct': false
        }, {
            'text': 'B. Usuário1, Usuário2, Principal1 e Principal2\n',
            'correct': false
        }, {
            'text': 'C. Somente usuário1\n',
            'correct': false
        }, {
            'text': 'D. Somente Usuário1 e Usuário2',
            'correct': true
        }
        ],
        'explication': 'C\nO email só será enviado aos membros usuários do Azure AD com a função de Leitor de Monitoramento. O email não será enviado para grupos ou entidades de serviço do Azure AD.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/platform/action-groups\nDistribuição de votos da comunidade\nD (64%) C (36%)'
    }, {
        'question': '8\nVocê tem uma máquina virtual do Azure chamada VM1.\nVocê usa o Backup do Azure para criar um backup da VM1 chamado Backup1.\nDepois de criar o Backup1, você executa as seguintes alterações na VM1:\n✑ Modifique o tamanho da VM1.\n✑ Copie um arquivo chamado Budget.xls para uma pasta chamada Data.\n✑ Redefina a senha da conta de administrador integrada.\n✑ Adicione um disco de dados à VM1.\nUm administrador usa a opção Substituir existente para restaurar a VM1 do Backup1.\nVocê precisa garantir que todas as alterações na VM1 sejam restauradas.\nQual mudança você deve realizar novamente?\n',
        'number': '',
        'page': 451,
        'answers': [{
            'text': 'A. Modifique o tamanho da VM1.\n',
            'correct': false
        }, {
            'text': 'B. Redefina a senha da conta de administrador integrada.\n',
            'correct': false
        }, {
            'text': 'C. Adicione um disco de dados.\n',
            'correct': false
        }, {
            'text': 'D. Copie Budget.xls para Dados.',
            'correct': true
        }
        ],
        'explication': 'D\nReferência:\nhttps://docs.microsoft.com/en-us/azure/backup/about-azure-vm-restore\nDistribuição de votos da comunidade\nD (79%) C (18%)'
    },


    {
        'question': `Questão 9 Tópico 6

        Você tem um locatário do Azure Active Directory (Azure AD) chamado contoso.onmicrosoft.com que contém os usuários mostrados na tabela a seguir.
        <img src="imagens/questao9topico6parte1.png" alt="imagem da questão"></img>
        Você habilita a redefinição de senha para contoso.onmicrosoft.com conforme mostrado na exposição Redefinição de senha. (Clique na guia Redefinição de senha.)
        <img src="imagens/questao9topico6parte2.png" alt="imagem da questão"></img>
        Você configura os métodos de autenticação para redefinição de senha conforme mostrado na exposição Métodos de autenticação. (Clique na guia Métodos de autenticação
        <img src="imagens/questao9topico6parte3.png" alt="imagem da questão"></img>

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Depois que o Usuário2 responder corretamente a três perguntas de segurança, ele poderá redefinir sua senha imediatamente.',
            'correct': false
        }, {
            'text': 'Se o Usuário1 esquecer sua senha, ela poderá redefini-la usando o aplicativo do celular. ',
            'correct': false
        }, {
            'text': 'User3 pode adicionar perguntas de segurança ao processo de redefinição de senha',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `******
        `

    },
    
    
    
    {
        'question': '10\nSua empresa possui um escritório principal em Londres que contém 100 computadores clientes.\nHá três anos, você migrou para o Azure Active Directory (Azure AD).\nA política de segurança da empresa afirma que todos os dispositivos pessoais e de propriedade corporativa devem ser registrados ou associados ao Azure AD.\nUm utilizador remoto chamado User1 não consegue aderir a um dispositivo pessoal ao Azure AD a partir de uma rede doméstica.\nVocê verifica se o Usuário1 conseguiu ingressar dispositivos no Azure AD no passado.\nVocê precisa garantir que o Usuário1 possa ingressar o dispositivo no Azure AD.\nO que você deveria fazer?\n',
        'number': '',
        'page': 454,
        'answers': [{
            'text': 'A. Atribua a função de administrador de usuário ao Usuário1.\n',
            'correct': false
        }, {
            'text': 'B. Na folha Configurações do dispositivo, modifique a configuração Número máximo de dispositivos por usuário.\n',
            'correct': true
        }, {
            'text': 'C. Crie uma VPN ponto a site da rede doméstica do Usuário1 para o Azure.\n',
            'correct': false
        }, {
            'text': 'D. Na folha Configurações do dispositivo, modifique a configuração Os usuários podem ingressar dispositivos na configuração do Azure AD.',
            'correct': false
        }
        ],
        'explication': 'B\nA configuração Número máximo de dispositivos permite selecionar o número máximo de dispositivos que um usuário pode ter no Azure AD. Se um usuário\natingir essa cota, eles não poderão adicionar dispositivos adicionais até que um ou mais dispositivos existentes sejam removidos.\nRespostas incorretas:\nC: O Azure AD Join permite que os usuários ingressem seus dispositivos no Active Directory de qualquer lugar, desde que tenham conectividade com a Internet.\nD: A configuração Os usuários podem ingressar dispositivos no Azure AD permite selecionar os usuários que podem ingressar dispositivos no Azure AD. As opções são Todas, Selecionadas\ne Nenhum. O padrão é Todos.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/active-directory/devices/device-management-azure-portal http://techgenix.com/pros-and-cons-azure-\njuntar-se ao anúncio/\nDistribuição de votos da comunidade\nB (92%) 8%'
    },

    {
        'question': `Questão 11 Tópico 6

            Você tem dois aplicativos do Azure App Service chamados App1 e App2. Cada aplicativo tem um slot de implantação de produção e um slot de implantação de teste.
            As configurações de backup para os slots de produção são mostradas na tabela a seguir.
            <img src="imagens/questao11topico6.jpg" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
            NOTA: Cada seleção correta vale um ponto.
           
                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Em 15 de janeiro de 2021, o App1 terá apenas um backup no armazenamento',
            'correct': false
        }, {
            'text': 'O Em 6 de fevereiro de 2021, você poderá acessar o backup do slot de teste do App2 de 15 de janeiro de 2021',
            'correct': false
        }, {
            'text': 'Em 15 de janeiro de 2021, você poderá restaurar o backup do slot de produção do App2 de 6 de janeiro para o slot de teste do App2.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': ` **********
        `
        ,
        'filters':[
            'K001'
        ]

    },
    
    
    {
        'question': `Questão 12 Tópico 6

        Você tem uma assinatura do Azure que contém um locatário do Azure Active Directory (Azure AD) chamado contoso.com. O locatário é sincronizado com o domínio do Active Directory no local. O domínio contém os usuários mostrados na tabela a seguir.
        <img src="imagens/questao12topico6.png" alt="imagem da questão"></img>
        Você habilita a redefinição de senha de autoatendimento (SSPR) para todos os usuários e configura o SSPR para ter os seguintes métodos de autenticação:

        ✑ Número de métodos necessários para redefinir: 2
        ✑ Métodos disponíveis para usuários: Celular, Perguntas de segurança
        ✑ Número de perguntas necessárias para registrar: 3
        ✑ Número de perguntas necessárias para redefinir: 3
        Você seleciona as seguintes perguntas de segurança:
        ✑ Qual é sua comida favorita?
        ✑ Em que cidade foi seu primeiro emprego?
        ✑ Qual era o nome do seu primeiro animal de estimação?
        Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
        NOTA: Cada seleção correta vale um ponto.

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'O SecAdmin1 deve responder a seguinte pergunta durante a redefinição de senha do autoatendimento: Em que cidade foi seu primeiro emprego?',
            'correct': false
        }, {
            'text': 'BillAdmin1 deve responder a seguinte pergunta durante a redefinição de senha do autoatendimento: Qual é a sua comida favorita?',
            'correct': false
        }, {
            'text': 'O usuário1 deve responder a seguinte pergunta durante a redefinição de senha do autoatendimento: Qual era o nome do seu primeiro animal de estimação?',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `*******
        `

    },
    
    
    {
        'question': '13\nObservação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que\npode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\nDepois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure que contém os seguintes usuários em um locatário do Azure Active Directory chamado contoso.onmicrosoft.com:\nO usuário1 cria um novo locatário do Azure Active Directory chamado external.contoso.onmicrosoft.com.\nVocê precisa criar novas contas de usuário em external.contoso.onmicrosoft.com.\nSolução: você instrui o usuário1 a criar as contas de usuário.\nIsso atende ao objetivo?\n',
        'number': '',
        'page': 457,
        'answers': [{
            'text': 'Sim\n',
            'correct': true
        }, {
            'text': 'Não',
            'correct': false
        }
        ],
        'explication': 'A\nApenas um administrador global pode adicionar utilizadores a este inquilino.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/devops/organizations/accounts/add-users-to-azure-ad\nDistribuição de votos da comunidade\nA (87%) 13%'
    }, {
        'question': '14\nVocê tem uma assinatura do Azure existente que contém 10 máquinas virtuais.\nVocê precisa monitorar a latência entre sua rede local e as máquinas virtuais.\nO que você deve usar?\n',
        'number': '',
        'page': 458,
        'answers': [{
            'text': 'A. Mapa de serviços\n',
            'correct': false
        }, {
            'text': 'B. Solução de problemas de conexão\n',
            'correct': false
        }, {
            'text': 'C. Monitor de desempenho de rede\n',
            'correct': true
        }, {
            'text': 'D. Rotas eficazes',
            'correct': false
        }
        ],
        'explication': 'C\nNetwork Performance Monitor é uma solução de monitoramento de rede híbrida baseada em nuvem que ajuda a monitorar o desempenho da rede entre\nvários pontos da sua infraestrutura de rede. Ele também ajuda a monitorar a conectividade de rede para terminais de serviços e aplicativos e monitorar\no desempenho do Azure ExpressRoute.\nVocê pode monitorar a conectividade de rede em implantações em nuvem e locais, vários data centers e filiais e\naplicativos ou microsserviços multicamadas de missão crítica. Com o Performance Monitor, você pode detectar problemas de rede antes que os usuários reclamem.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/insights/network-performance-monitor\nDistribuição de votos da comunidade\nC (100%)'
    },

    {
        'question': `16 Tópico 6. DRAG DROP –
            DRAG DROP –
            Você tem uma máquina virtual Azure Linux protegida pelo Azure Backup.
            Há uma semana, dois arquivos foram excluídos da máquina virtual.
            Você precisa restaurar os arquivos excluídos em um computador Windows Server 2016 local o mais rápido possível.
            Quais são as quatro ações que você deve executar em sequência ? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize - as na ordem correta.
            Selecione e coloque: `,
        'number': '',
        'page': 0,
        'answers': [

            [
                {
                    'text': 'Options \n',
                    'options': [
                        { 'text': 'Baixe e execute o script para montar uma unidade no computador local', 'correct': true, 'index': '3' },
                        { 'text': 'Selecione um ponto de restauração que contenha os arquivos excluídos', 'correct': true, 'index': '2' },
                        { 'text': 'No portal do Azure, clique em Restaurar VM do cofre', 'correct': false, 'index': '-1' },
                        { 'text': 'No portal do Azure, clique em Recuperação de Arquivos do cofre Monte um VHD', 'correct': true, 'index': '1' },
                        { 'text': 'Copie os arquivos usando AZCopy', 'correct': false, 'index': '-1' },
                        { 'text': 'Copie os arquivos usando o File Explorer', 'correct': true, 'index': '4' },

                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer \n',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `Etapa 1: No portal do Azure, clique em Recuperação de arquivos no cofre
            Etapa 2. Selecione um ponto de restauração que contenha os arquivos excluídos
            Etapa 3: Baixe e execute o script para montar uma unidade no computador local
            Gere e baixe o script para navegue e recupere arquivos:
            Passo 4: Copie os arquivos usando o File Explorer!
            Depois que os discos forem anexados, use o Windows File Explorer para navegar pelos novos volumes e arquivos.A funcionalidade de restauração de arquivos fornece acesso a todos os arquivos em um ponto de recuperação.Gerencie os arquivos por meio do File Explorer como faria com arquivos normais.
    Etapas 1 a 3 abaixo:
            Para restaurar arquivos ou pastas do ponto de recuperação, acesse a máquina virtual e execute as seguintes etapas:
1. Entre no portal do Azure e, no painel esquerdo, selecione Máquinas virtuais.Na lista de máquinas virtuais, selecione a máquina virtual para abrir o painel dessa máquina virtual.
            2. No menu da máquina virtual, selecione Backup para abrir o painel Backup.
            3. No menu do painel de backup, selecione Recuperação de arquivos.

            O menu Recuperação de arquivos é aberto.

            4. No menu suspenso Selecionar ponto de recuperação, selecione o ponto de recuperação que contém os arquivos desejados.Por padrão, o ponto de recuperação mais recente já está selecionado.
            5. Selecione Baixar Executável(para VMs do Windows Azure) ou Baixar Script(para VMs do Linux Azure, um script python é gerado) para baixar o software usado para copiar arquivos do ponto de recuperação.
            Executando o script e identificando volumes:
            Para máquinas Linux, um script python é gerado.Baixe o script e copie - o para o servidor Linux relevante / compatível.
    Referência:
https://docs.microsoft.com/en-us/azure/backup/backup-azure-restore-files-from-vm https://docs.microsoft.com/en-us/azure/backup/backup -azure-vms-automation#restore-files-from-an-azure-vm-backup
            
            Comentário mais votado: Parece ter divergências se a resposta ta certa ou não
        `,
        'typeQuestion': 'dragdrop'
    },


    {
        'question': `Questão 17. Tópico 6.
HOTSPOT –
            você compra uma nova assinatura do Azure chamada Subscription1.
            Você cria uma máquina virtual chamada VM1 em Subscription1.VM1 não está protegida pelo Backup do Azure.
            Você precisa proteger a VM1 usando o Backup do Azure.Os backups devem ser criados à 01h00 e armazenados por 30 dias.
            O que você deveria fazer ? Para responder, selecione as opções apropriadas na área de resposta.
    NOTA: Cada seleção correta vale um ponto.
            Área Quente:
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': 'Local onde armazenar os backups:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Um contêiner de blob",
                    'correct': false
                }, {
                    'text': "Um compartilhamento de arquivo",
                    'correct': false
                }, {
                    'text': "Um cofre dos Serviços de Recuperação",
                    'correct': true
                },
                {
                    'text': "Uma conta de armazenamento",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Objeto a ser usado para configurar a proteção para VM1:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Uma política de backup",
                    'correct': true
                }, {
                    'text': "Um trabalho em lote",
                    'correct': false
                }, {
                    'text': "Uma programação em lote",
                    'correct': false
                },
                {
                    'text': "Um plano de recuperação",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': true,
        'explication': `
            Caixa 1: Um cofre dos Serviços de Recuperação
            Você pode configurar um cofre dos Serviços de Recuperação e configurar o backup para várias VMs do Azure.

    Caixa 2: Uma política de backup -
        Em Escolher política de backup, siga um destes procedimentos:
            ✑ Deixe a política padrão.Isso faz backup da VM uma vez por dia no horário especificado e mantém os backups no cofre por 30 dias.
            ✑ Selecione uma política de backup existente, se você tiver uma.
            ✑ Crie uma nova política e defina as configurações da política.
    Referência:
https://docs.microsoft.com/en-us/azure/backup/backup-azure-vms-first-look-arm 
`
    , 'filters': ['K002']
    },




    {
        'question': '18\nVocê tem uma máquina virtual do Azure chamada VM1.\nO Azure coleta eventos da VM1.\nVocê está criando uma regra de alerta no Azure Monitor para notificar um administrador quando um erro é registrado no log de eventos do sistema da VM1.\nQual recurso de destino você deve monitorar na regra de alerta?\n',
        'number': '',
        'page': 464,
        'answers': [{
            'text': 'A. extensão de máquina virtual\n',
            'correct': false
        }, {
            'text': 'B. máquina virtual\n',
            'correct': false
        }, {
            'text': 'C. alerta métrico\n',
            'correct': false
        }, {
            'text': 'D. Espaço de trabalho do Azure Log Analytics',
            'correct': true
        }
        ],
        'explication': 'D\nPara a primeira etapa de criação do novo tule de alerta, na seção Criar Alerta, você selecionará seu espaço de trabalho do Log Analytics como o\nrecurso, uma vez que este é um sinal de alerta baseado em log.\nReferência:\nhttps://docs.microsoft.com/en-us/windows-server/storage/storage-spaces/con gure-azure-monitor\nDistribuição de votos da comunidade\nD (85%) B (15%)'
    }, {
        'question': '19\nVocê tem uma assinatura do Azure que contém 100 máquinas virtuais.\nVocê cria e exclui regularmente máquinas virtuais.\nVocê precisa identificar os discos não anexados que podem ser excluídos.\nO que você deveria fazer?\n',
        'number': '',
        'page': 465,
        'answers': [{
            'text': 'A. No Azure Cost Management, veja Análise de Custos\n',
            'correct': false
        }, {
            'text': 'B. No Azure Advisor, modifique a configuração do Advisor\n',
            'correct': false
        }, {
            'text': 'C. No Microsoft Azure Storage Explorer, visualize as propriedades de gerenciamento de contas\n',
            'correct': false
        }, {
            'text': 'D. No Azure Cost Management, veja as recomendações do consultor',
            'correct': true
        }
        ],
        'explication': 'D\nEm Home ג >"€Gerenciamento de Custos + Faturamento ג >"€Gerenciamento de Custos, role para baixo nas opções e selecione Exibir Recomendações:\nGerenciamento/Assistente(Advisor) de Custos do Azure -\nA partir daqui você verá as recomendações para sua assinatura. Se você tiver discos órfãos, eles serão listados.\nReferência:\nhttps://codeserendipity.com/2020/07/08/microsoft-azure-nd-unattached-disks-that-can-be-deleted-and-other-recommendations/\nDistribuição de votos da comunidade\nD (82%) C (18%)'
    }, {
        'question': '20\nVocê tem um aplicativo Web do Azure chamado webapp1.\nOs usuários relatam que frequentemente enfrentam erros HTTP 500 quando se conectam ao webapp1.\nVocê precisa fornecer aos desenvolvedores do webapp1 acesso em tempo real aos erros de conexão. A solução deve fornecer todos os erros de conexão\ndetalhes.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 466,
        'answers': [{
            'text': 'A. No webapp1, habilite o log do servidor Web\n',
            'correct': true
        }, {
            'text': 'B. No Azure Monitor, crie uma pasta de trabalho\n',
            'correct': false
        }, {
            'text': 'C. No Azure Monitor, crie um alerta de integridade do serviço\n',
            'correct': false
        }, {
            'text': 'D. No webapp1, ative o registro do aplicativo',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nA (86%) 14%\nTópico 6'
    }, {
        'question': '21\nVocê tem um aplicativo Web do Azure chamado App1.\nVocê precisa monitorar a disponibilidade do App1 usando um teste web de várias etapas.\nO que você deve usar no Azure Monitor?\n',
        'number': '',
        'page': 466,
        'answers': [{
            'text': 'A. Integridade do Serviço Azure\n',
            'correct': false
        }, {
            'text': 'B. Informações/insights sobre aplicativos do Azure\n',
            'correct': true
        }, {
            'text': 'C. as configurações de diagnóstico\n',
            'correct': false
        }, {
            'text': 'D. métricas',
            'correct': false
        }
        ],
        'explication': 'B\nCarregue o teste da web -\n1. No portal Application Insights, no painel Disponibilidade, selecione Adicionar teste clássico e, em seguida, selecione Várias etapas como SKU.\n2. Carregue seu teste da web em várias etapas.\n3. Defina os locais de teste, frequência e parâmetros de alerta.\n4. Selecione Criar.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/azure-monitor/app/availability-multistep\nDistribuição de votos da comunidade\nB (100%)'
    },


    {
        'question': `Questão 22. Tópico 6.
HOTSPOT –
            Você tem uma assinatura do Azure que tem o log de diagnóstico habilitado e está configurado para enviar logs para um workspace do Log Analytics.
            Você está investigando uma interrupção de serviço.
            Você precisa visualizar a hora do evento, o nome do evento e os recursos afetados.
            Como você deve preencher a consulta ? Para responder, selecione as opções apropriadas na área de resposta.
    NOTA: Cada seleção correta vale um ponto.
            Área Quente:
`,
        'number': 22,
        'page': 11,
        'studyCase': true,

        'answers': [{
            'text': '',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "AzureActivity",
                    'correct': true
                }, {
                    'text': "Heartbeat",
                    'correct': false
                }, {
                    'text': "NetworkMonitoring",
                    'correct': false
                },
                {
                    'text': "Perf",
                    'correct': false
                }
            ]
        },

        {
            'text': `     |
    Where Level == 'Critical'
        `,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': " | extend",
                    'correct': false
                }, {
                    'text': "| join",
                    'correct': false
                }, {
                    'text': "| print",
                    'correct': false
                },
                {
                    'text': "| project",
                    'correct': true
                }
            ]
        },

        {
            'text': `
TimeGenerated, OperationNameValue, ResouceId'
    `,
            'options': [
                {
                    text: ' ',
                    correct: true
                },
            ]
        }

        ],
        'typeQuestion': 'select',
        'caseStudy': true,
        'explication': ` 
            Caixa 1: AzureActivity -
    A tabela AzureActivity possui entradas do log de atividades do Azure, que fornece informações sobre eventos de nível de assinatura ou de grupo de gerenciamento que ocorrem no Azure.
            Vamos ver apenas as entradas críticas durante uma semana específica.
            O operador where é comum na linguagem de consulta Kusto.onde filtra uma tabela para linhas que correspondem a critérios específicos.O exemplo a seguir usa vários comandos.Primeiro, a consulta recupera todos os registros da tabela.Em seguida, ele filtra os dados apenas para registros que estão no intervalo de tempo.Por fim, ele filtra esses resultados apenas para registros que possuem nível Crítico.

    AzureActivity -
            | onde TimeGenerated > datetime(10 /01 / 2020) e TimeGenerated < datetime(10 /07 / 2020)
    | onde Nível == 'Crítico'
Incorreto:
            não Perf: A tabela Perf tem dados de desempenho coletados de máquinas virtuais que executam o agente Log Analytics.

    Caixa 2: | projeto -
        Selecione um subconjunto de colunas: projeto.
            Use project para incluir apenas as colunas desejadas.Com base no exemplo anterior, vamos limitar a saída a determinadas colunas:

AzureActivity -
            | onde TimeGenerated > datetime(10 /01 / 2020) e TimeGenerated < datetime(10 /07 / 2020)
    | onde Nível == 'Crítico'
        | projeto TimeGenerated, Level, OperationNameValue, ResourceGroup, _ResourceId
Referência:
https://github.com/MicrosoftDocs/dataexplorer-docs/blob/main/data-explorer/kusto/query/tutorial.md
`
    },






    {
        'question': '23\nVocê tem um cofre dos Serviços de Recuperação denominado RSV1. O RSV1 possui uma política de backup que retém instantâneos instantâneos por cinco dias e backup diário por 14 dias.\ndias.\nRSV1 realiza backups diários da VM1. VM1 hospeda um site estático que foi atualizado há oito dias.\nVocê precisa recuperar a VM1 até um ponto há oito dias. A solução deve minimizar o tempo de inatividade.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 468,
        'answers': [{
            'text': 'A. Desalocar VM1.\n',
            'correct': false
        }, {
            'text': 'B. Restaure a VM1 usando a opção Substituir configuração de restauração existente.\n',
            'correct': true
        }, {
            'text': 'C. Excluir VM1.\n',
            'correct': false
        }, {
            'text': 'D. Restaure VM1 usando a opção Criar nova configuração de restauração.',
            'correct': false
        }
        ],
        'explication': 'B\nSubstitua o existente:\nVocê pode restaurar um disco e usá-lo para substituir um disco na VM existente.\nA VM atual deve existir. Se tiver sido excluído, esta opção não poderá ser usada.\nO Backup do Azure tira um instantâneo da VM existente antes de substituir o disco e o armazena no local de preparo especificado. Discos existentes\nconectados à VM são substituídos pelo ponto de restauração selecionado.\nO instantâneo é copiado para o cofre e retido de acordo com a política de retenção.\nApós a operação de substituição do disco, o disco original é retido no grupo de recursos. Você pode optar por excluir manualmente os discos originais se eles\nnão são necessários.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/backup/backup-azure-arm-restore-vms\nDistribuição de votos da comunidade\nB (53%) D (47%)'
    },
    {
        'question': `Questão 24 Tópico 6
            Você tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/gquestao24topico6.png" alt="imagem da questão"></img>
            Você planeja criar uma regra de coleta de dados chamada DCR1 no Azure Monitor.
            Quais recursos você pode definir como fontes de dados no DCR1 e quais recursos você pode definir como destinos no DCR1? Para responder,
            selecione as opções apropriadas na área de resposta.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Fontes de dados:`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Apenas VM1",
                    'correct': true
                }, {
                    'text': "Somente VM1 e armazenamento1",
                    'correct': false
                }, {
                    'text': "Somente VM1, armazenamento1 e DB1",
                    'correct': false
                },
                {
                    'text': "VM1, armazenamento1, espaço de trabalho1 e DB1",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Destinos:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "armazenamento1 apenas",
                    'correct': false
                }, {
                    'text': "Somente espaço de trabalho1",
                    'correct': true
                }, {
                    'text': "Somente espaço de trabalho1 e armazenamento1",
                    'correct': false
                },
                {
                    'text': "Somente espaço de trabalho1, armazenamento1 e DB11",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `Caixa 1: Somente VM1 -
            Uma máquina virtual pode ter uma associação a vários DCRs, e um DCR pode ter várias máquinas virtuais associadas a ela.
            Na guia Recursos, adicione os recursos (máquinas virtuais, conjuntos de dimensionamento de máquinas virtuais, Arc para servidores) que devem ter a Regra de coleta de dados aplicada.

            Caixa 2: Somente Workspace1 -
            Na guia Destino, adicione um ou mais destinos para a fonte de dados. Você pode selecionar vários destinos do mesmo tipo, por exemplo, vários
            workspaces do Log Analytics (ou seja, "multi-homing").
            Observação: as Regras de coleta de dados (ou DCR) melhoram algumas áreas-chave da coleta de dados de VMs, incluindo melhor controle e escopo da coleta de dados (por exemplo, coleta de um subconjunto de VMs para um único workspace), coleta uma vez e envio para o Log Analytics e o Azure Monitor Metrics, envio para vários workspaces (multi-homing para Linux), filtragem de eventos do Windows aprimorada e gerenciamento de extensão aprimorado.
            Referência:
            https://docs.microsoft.com/en-us/azure/azure-monitor/agents/data-collection-rule-azure-monitor-agent
            
`
    },
    {
        'question': `Questão 25 Tópico 6
            Você tem o arquivo de atribuição de função mostrado na exposição a seguir.
            <img src="imagens/gquestao25topico6.png" alt="imagem da questão"></img>
            Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
        `,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `[Escolha de resposta] atribuiu a função de Proprietário para VM1`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Usuário3 é",
                    'correct': false
                },
                {
                    'text': " Usuário3 e Usuário4 são",
                    'correct': false
                },
                {
                    'text': "Usuário1 e Usuário3 são ",
                    'correct': true
                }, {
                    'text': "Usuário1, Usuário3 e Usuário4 ",
                    'correct': false
                },
                {
                    'text': " Usuário1, Usuário2, Usuário3 e Usuário4",
                    'correct': false
                }
            ]
        },

        {
            'text': '[Escolha de resposta] pode criar uma máquina virtual em RG1',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Usuário1 e Usuário4",
                    'correct': true
                }, {
                    'text': "Usuário1, Usuário2 e Usuário3",
                    'correct': false
                }, {
                    'text': "Usuário1, Usuário2 e Usuário4",
                    'correct': false
                },
                {
                    'text': " Usuário1, Usuário3 e Usuário4",
                    'correct': false
                },
                {
                    'text': " Usuário1, Usuário2, Usuário3 e Usuário4",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `A maioria concordou com a fonte
            
`
    },

    {
        'question': `Questão 26 Tópico 6
            Você tem a seguinte função de controle de acesso baseado em função (RBAC) personalizada.
            <img src="imagens/gquestao26topico6.png" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
            NOTA: Cada seleção correta vale um ponto.
            Área de acesso:

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Os usuários atribuídos à Função1 podem atribuir a Função1 aos usuários.',
            'correct': false
        }, {
            'text': 'Os usuários atribuídos à Função1 podem implantar novas máquinas virtuais.',
            'correct': true
        }, {
            'text': 'Os usuários atribuídos à Função1 podem definir um endereço IP estático em uma máquina virtual.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Comentário mais votado:
            Para mim N,Y,Y. Microsoft.Compute/virtualMachines/* Executa todas as ações de máquina virtual, incluindo criar, atualizar, excluir, iniciar, 
            reiniciar e desligar máquinas virtuais. Executa scripts em máquinas virtuais.
        `

    },

    {
        'question': `Questão 27 Tópico 6
            Você tem uma assinatura do Azure que contém os recursos mostrados na tabela a seguir.
            <img src="imagens/gquestao27topico6parte1.png" alt="imagem da questão"></img>
            O NSG1 é configurado conforme mostrado na exposição a seguir.
            <img src="imagens/gquestao27topico6parte2.jpg" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
            Hot Area:

           

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'VM1 pode acessar o armazenamento1.',
            'correct': true
        }, {
            'text': 'VM2 pode acessar VM1 usando o protocolo HTTPS.',
            'correct': true
        }, {
            'text': 'As regras de segurança do NSG1 aplicam-se a qualquer máquina virtual na VNET1.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Um dos comentários mais votados:
            Estou assumindo que o NSG é aplicado à Subnet1. Y. 
            As regras de saída têm prioridade 145 para permitir acesso ao storage1 Y.
            As regras de entrada têm permissão padrão de Vnet para Vnet para que a VM2 possa acessar a VM1. A regra de negação 110 é para tráfego de Internet chegando. N.
            Podemos ver que o NSG está associado a 1 sub-rede da imagem.
        `

    },
    
    
    {
        'question': '28\nVocê tem uma assinatura do Azure chamada Subscription1 que contém duas redes virtuais do Azure chamadas VNet1 e VNet2. A VNet1 contém um gateway VPN\nchamado\nVPNGW1 que usa roteamento estático. Há uma conexão VPN site a site entre sua rede local e a VNet1.\nEm um computador chamado Client1 que executa o Windows 10, você configura uma conexão VPN ponto a site para a VNet1.\nVocê configura o peering de rede virtual entre a VNet1 e a VNet2. Você verifica se consegue se conectar à VNet2 a partir da rede local. O Client1\nnão consegue se conectar à VNet2.\nVocê precisa garantir que consegue conectar o Client1 à VNet2.\nO que você deve fazer?\n',
        'number': '',
        'page': 476,
        'answers': [{
            'text': 'A. Selecione Usar o gateway da rede virtual remota ou o Route Server no peering da VNet1 para a VNet2.\n',
            'correct': false
        }, {
            'text': 'B. Selecione Usar o gateway da rede virtual remota ou o Route Server no peering da VNet2 para a VNet1.\n',
            'correct': false
        }, {
            'text': 'C. Baixe e reinstale o pacote de configuração do cliente VPN no Client1.\n',
            'correct': true
        }, {
            'text': 'D. Habilite o BGP no VPNGW1.',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (94%) 6%'
    },

    {
        'question': `Questão 29 Tópico 6
            Você tem duas assinaturas do Azure chamadas Sub1 e Sub2. Sub1 está em um grupo de gerenciamento chamado MG1. Sub2 está em um grupo de gerenciamento chamado MG2.
            Você tem os grupos de recursos mostrados na tabela a seguir.
            <img src="imagens/gquestao29topico6parte1.png" alt="imagem da questão"></img>
            Você tem as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/gquestao29topico6parte2.png" alt="imagem da questão"></img>
            Você atribui funções aos usuários conforme mostrado na tabela a seguir.
            <img src="imagens/gquestao29topico6parte3.png" alt="imagem da questão"></img>
            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'O usuário1 pode entrar na VM1.',
            'correct': false
        }, {
            'text': 'O usuário2 pode gerenciar discos e instantâneos de disco da VM1.',
            'correct': false
        }, {
            'text': 'O usuário2 pode gerenciar discos e instantâneos de disco da VM3.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Comentário mais votado:
            Acho que as respostas devem ser: NNN 1. O Usuário1 pode fazer login na VM1 Não O Usuário1 é atribuído como Contribuidor de Máquina Virtual no MG1. E o Contribuidor de Máquina Virtual não pode fazer login na VM como um usuário regular. 2. O Usuário2 pode gerenciar discos e snapshots de disco da VM1 Não Como o Usuário2 só tem Usuário de Máquina Virtual em Sub1, ele pode fazer login na VM1, mas não pode gerenciar discos ou snapshots 3. O Usuário2 pode gerenciar discos e snapshots de disco da VM3 Não O Contribuidor de Máquina Virtual só tem permissão para gerenciar discos, 
            mas não snapshots de disco (permissão de Contribuidor de Snapshot de Disco)
        `

    },
    
    {
        'question': '30\nVocê tem um locatário do Azure Active Directory (Azure AD) vinculado a 10 assinaturas do Azure.\nVocê precisa monitorar centralmente a atividade do usuário em todas as assinaturas.\nO que você deve usar?\n',
        'number': '',
        'page': 478,
        'answers': [{
            'text': 'A. Perfil Azure Application Insights\n',
            'correct': false
        }, {
            'text': 'B. acessar avaliações\n',
            'correct': false
        }, {
            'text': 'C. Filtros de registro de atividades\n',
            'correct': false
        }, {
            'text': 'D. um espaço de trabalho do Log Analytics',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)\nTópico 6'
    },


    {
        'question': `31. Tópico 6. ARRASTAR E SOLTAR -\n(OBS: NO MOMENTO NÃO ESTÁ CONTANDO NA CONTAGEM DE ACERTO, SE QUISER SABER SE RESPONDEU CORRETO CLIQUE EM VER RESPOSTA)

        DRAG DROP –
        você tem uma assinatura do Azure que contém uma máquina virtual chamada VM1.
        VM1 possui um disco de sistema operacional denominado Disk1 e um disco de dados denominado Disk2.
        Você precisa fazer backup do Disk2 usando o Backup do Azure.
        Quais são as três ações que você deve executar em sequência ? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize - as na ordem correta.
        Selecione e coloque:

`,
        'number': '31',
        'page': 11,
        'answers': [

            [
                {
                    'text': 'Ações \n',
                    'options': [
                        { 'text': 'Configurar uma identidade gerenciada', 'correct': true, 'index': '3' },
                        { 'text': 'Crie um cofre de backup do Azure', 'correct': true, 'index': '1' },
                        { 'text': 'Crie um cofre dos Serviços de Recuperação.', 'correct': false, 'index': '-1' },
                        { 'text': 'Delegar permissões para o cofre.', 'correct': false, 'index': '-1' },
                        { 'text': 'Crie uma política de backup e configure o backup.', 'correct': true, 'index': '2' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer \n',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': `Comentário: Resposta correta:
1 - Crie um cofre de backup do Azure.
            2 - Crie uma política de backup e configure o backup. 
            3 - Configure uma identidade gerenciada.Link: https://docs.microsoft.com/en-us/azure/backup/backup-managed-disks#:~:text=Review%20%2B%20create.-,Configure%20backup,-Azure%20Disk%20backup`,
        'typeQuestion': 'dragdrop'
    },

    {
        'question': '32\nVocê tem uma sub-rede chamada Subnet1 que contém máquinas virtuais do Azure. Um grupo de segurança de rede (NSG) denominado NSG1 está associado à Subnet1.\nNSG1 contém apenas as regras padrão.\nVocê precisa criar uma regra no NSG1 para evitar que os hosts no formulário Subnet1 se conectem ao portal do Azure. Os hosts devem ser capazes de se conectar\noutros hosts da Internet.\nPara que você deve definir Destino na regra?\n',
        'number': '',
        'page': 479,
        'answers': [{
            'text': 'A. Grupo de segurança de aplicativos\n',
            'correct': false
        }, {
            'text': 'B. Endereços IP\n',
            'correct': false
        }, {
            'text': 'C. Etiqueta de serviço\n',
            'correct': true
        }, {
            'text': 'D. Qualquer',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (81%) B (19%)\nTópico 6'
    }, {
        'question': '33\nVocê tem uma assinatura do Azure chamada Subscrição1 que contém um espaço de trabalho do Azure Log Analytics chamado Workspace1.\nVocê precisa visualizar os eventos de erro de uma tabela chamada Event.\nQual consulta você deve executar no Workspace1?\n',
        'number': '',
        'page': 479,
        'answers': [{
            'text': 'A. pesquise em (Evento) "erro"\n',
            'correct': true
        }, {
            'text': 'B. Evento | onde EventType é "erro"\n',
            'correct': false
        }, {
            'text': 'C. selecione * do evento onde EventType == "erro"\n',
            'correct': false
        }, {
            'text': 'D. Evento Get-Event | onde {$_.EventType == "erro"},',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nA (88%) 12%\nTópico 6'
    }, {
        'question': '34\nVocê tem um aplicativo Web do Serviço de Aplicativo do Azure chamado App1.\nVocê precisa coletar rastreamentos de desempenho para App1.\nO que você deve usar?\n',
        'number': '',
        'page': 479,
        'answers': [{
            'text': 'A. Perfil do Azure Application Insights\n',
            'correct': true
        }, {
            'text': 'B. o registro de atividades\n',
            'correct': false
        }, {
            'text': 'C. o centro de implantação\n',
            'correct': false
        }, {
            'text': 'D. as configurações Diagnosticar e resolver problemas',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `35\nVocê tem uma assinatura do Azure que contém as contas de armazenamento mostradas na tabela a seguir.
            <img src="imagens/xquestao35topico6.png" alt="imagem da questão"></img>

            \nVocê implanta um aplicativo Web chamado App1 na região oeste do Azure dos EUA.\nVocê precisa fazer backup do App1. A solução deve minimizar custos.
            \nQual conta de armazenamento você deve usar como destino para o backup?\n`,
        'number': '',
        'page': 480,
        'answers': [{
            'text': 'A. armazenamento1\n',
            'correct': false
        }, {
            'text': 'B. armazenamento2\n',
            'correct': true
        }, {
            'text': 'C. armazenamento3\n',
            'correct': false
        }, {
            'text': 'D. armazenamento4',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nB (85%) A (15%)'
        , 'filters': ['K002']
    },

    {
        'question': `Questão 36. Tópico 6.
               HOTSPOT

            Você tem uma assinatura do Azure vinculada a um locatário do Azure AD. O locatário contém dois usuários chamados Usuário1 e Usuário2.

            A assinatura contém os recursos mostrados na tabela a seguir.

            <img src="imagens/zquestao36topico6parte1.png" alt="imagem da questão"></img>

            A assinatura contém as regras de alerta mostradas na tabela a seguir.
            <img src="imagens/zquestao36topico6parte2.png" alt="imagem da questão"></img>


            Os usuários executam a seguinte ação:

            • O usuário1 cria um novo disco virtual e anexa o disco à VM1
            • O usuário2 cria uma nova tag de recurso e atribui a tag a RG1 e VM1

            Quais regras de alerta são acionadas por cada usuário? Para responder, selecione as opções apropriadas na área de resposta.

            NOTA: Cada seleção correta vale um ponto.
        `,
        'number': 1,
        'page': 540,
        'studyCase': true,
        'answers': [{
            'text': 'Usuário1',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Nenhum alerta é acionado",
                    'correct': false
                }, {
                    'text': "Somente Alert1 é acionado",
                    'correct': false
                }, {
                    'text': "Somente Alert2 é acionado",
                    'correct': true
                },
                {
                    'text': "Alerta1 e Alerta2 são acionados",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Usuário2',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Nenhum alerta é acionado",
                    'correct': false
                }, {
                    'text': "Somente Alert1 é acionado",
                    'correct': false
                }, {
                    'text': "Somente Alert2 é acionado",
                    'correct': false
                },
                {
                    'text': "Alerta1 e Alerta2 são acionados",
                    'correct': true
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': true,
        'explication': ` 
                `    , 'filters': ['K002']
    },
    {
        'question': `questão 37 tópico 6
            Você tem uma assinatura do Azure que contém várias máquinas virtuais na região do Azure West US.
            Você precisa usar o Traffic Analytics no Azure Network Watcher para monitorar o tráfego da máquina virtual.
            Quais dois recursos você deve criar? Cada resposta correta apresenta parte da solução.

            OBSERVAÇÃO: Cada seleção correta vale um ponto.
        `,
        'number': '',
        'page': 482,
        'answers': [{
            'text': 'A. um espaço de trabalho do Log Analytics\n',
            'correct': true
        }, {
            'text': 'B.  uma pasta de trabalho do Azure Monitor\n',
            'correct': false
        }, {
            'text': 'C.  uma conta de armazenamento\n',
            'correct': false
        }, {
            'text': 'D. um espaço de trabalho do Microsoft Sentinel',
            'correct': false
        }, {
            'text': 'e. uma Regra de Coleta de Dados (DCR) no Azure Monitor ',
            'correct': true
        }
        ],
        'explication': 'Distribuição de votos na comunidade AE (50%) CA (48%) outros 2%'
    },

    {
        'question': '37\nVocê planeja implantar várias máquinas virtuais do Azure que executarão o Windows Server 2019 em um conjunto de escala de máquina virtual usando um recurso do Azure\nModelo de gerente.\nVocê precisa garantir que o NGINX esteja disponível em todas as máquinas virtuais após sua implantação.\nO que você deve usar?\n',
        'number': '',
        'page': 482,
        'answers': [{
            'text': 'A. uma extensão Desired State Configuration (DSC)\n',
            'correct': true
        }, {
            'text': 'B. o cmdlet New-AzConfigurationAssignment\n',
            'correct': false
        }, {
            'text': 'C. Informações sobre aplicativos do Azure\n',
            'correct': false
        }, {
            'text': 'D. um perfil de configuração de dispositivo do Microsoft Endpoint Manager',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': `38\nVocê tem uma assinatura do Azure que contém oito máquinas virtuais e os recursos mostrados na tabela a seguir.\nVocê precisa configurar o acesso para VNET1. A solução deve atender aos seguintes requisitos:
            
            <img src="imagens/zquestao38topico6.png" alt="imagem da questão"></img>

            \n• As máquinas virtuais conectadas à VNET1 devem ser capazes de se comunicar com as máquinas virtuais conectadas à VNET2 usando o backbone da Microsoft.
            \n• As máquinas virtuais conectadas à VNET1 devem ser capazes de acessar storage1, storage2 e Azure AD usando o backbone da Microsoft.
            \nQual é o número mínimo de pontos de extremidade de serviço que você deve adicionar à VNET1?\n`,
        'number': '',
        'page': 483,
        'answers': [{
            'text': 'A. 1\n',
            'correct': false
        }, {
            'text': 'B. 2\n',
            'correct': true
        }, {
            'text': 'C. 3\n',
            'correct': false
        }, {
            'text': 'D. 5',
            'correct': false
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nB (89%) 11%\nTópico 6',
         'filters': ['K002']
    }, {
        'question': '39\nVocê precisa configurar um aplicativo Web do Azure chamado contoso.azurewebsites.net para hospedar www.contoso.com.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 483,
        'answers': [{
            'text': 'A. Crie registros A chamados www.contoso.com e asuid.contoso.com.\n',
            'correct': false
        }, {
            'text': 'B. Crie um registro TXT chamado asuid que contenha o ID de verificação do domínio.\n',
            'correct': true
        }, {
            'text': 'C. Crie um registro CNAME chamado asuid que contenha o ID de verificação do domínio.\n',
            'correct': false
        }, {
            'text': 'D. Crie um registro TXT chamado www.contoso.com que tenha o valor contoso.azurewebsites.net.',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nB (68%) C (21%) 7%'
    }, {
        'question': '40\nVocê tem uma assinatura do Azure que contém 10 grupos de segurança de rede (NSGs), 10 máquinas virtuais e um espaço de trabalho do Log Analytics chamado\nEspaço de trabalho1. Cada NSG está conectado a uma máquina virtual.\nVocê precisa configurar um alerta do Azure Monitor Network Insights que será acionado quando for detectado tráfego de rede suspeito.\nO que você deve fazer primeiro?\n',
        'number': '',
        'page': 484,
        'answers': [{
            'text': 'A. Implantar o Monitor de Conexão.\n',
            'correct': false
        }, {
            'text': 'B. Configurar endpoints de coleta de dados.\n',
            'correct': false
        }, {
            'text': 'C. Configure um link privado.\n',
            'correct': false
        }, {
            'text': 'D. Configure os logs de fluxo do NSG.',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (90%) 10%'
    },
    

    {
        'question': `Questão 41. Tópico 6

            HOTSPOT

            Você tem uma assinatura do Azure chamada Sub1 que contém os recursos mostrados na tabela a seguir.

            <img src="imagens/zquestao51topico6.png" alt="imagem da questão"></img>

            Sub1 contém a seguinte regra de alerta:

            • Nome: Alerta1
            • Escopo: Todos os grupos de recursos em Sub1
            o Inclui todos os recursos futuros
            • Condição: Todas as operações administrativas
            • Ações: Ação1

            Sub1 contém a seguinte regra de processamento de alerta:

            • Nome: Regra1
            • Escopo: Sub1
            • Tipo de regra: Suprimir notificações
            • Aplicar a regra: Em um horário específico
            o Início: 10 de agosto de 2022
            o Fim: 13 de agosto de 2022

            Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.

            NOTA: Cada seleção correta vale um ponto.

            HOTSPOT

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'Se criar um grupo de recursos em Sub1 em 11 de agosto de 2022, o Alert1 será listado no portal do Azure.\n',
            'correct': true
        }, {
            'text': 'Se você criar um grupo de recursos em Sub1 em 12 de agosto de 2022, uma mensagem de email será enviada para admin1@contoso.com.',
            'correct': false
        }, {
            'text': 'Se você adicionar uma tag ao RG1 em 15 de agosto de 2022, uma mensagem de email será enviada para admin1@contoso.com.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `
        `
        ,
        'filters':[
            'K001'
        ]

    },


    {
        'question': ` 42 Tópico 6
            Você tem uma assinatura do Azure que contém uma conta de armazenamento chamada storage1 na região Norte da Europa do Azure.
            Você precisa garantir que, quando os dados do blob forem adicionados ao storage1,
            uma cópia secundária seja criada na região leste dos EUA. A solução deve minimizar o esforço administrativo.

            O que você deve configurar?
        `,

        'number': '',
        'page': 484,
        'answers': [{
            'text': 'A. backup operacional.\n',
            'correct': false
        }, {
            'text': 'B. replicação de objeto.\n',
            'correct': true
        }, {
            'text': 'C. Armazenamento com redundância geográfica (GRS).\n',
            'correct': false
        }, {
            'text': 'D.  uma regra de gerenciamento do ciclo de vida.',
            'correct': false
        }
        ],
        'explication': `
            Distribuição de votos da comunidade
            B (92%)
            8%
        `
    },


    {
        'question': '43\nVocê tem uma assinatura do Azure que contém dois espaços de trabalho do Log Analytics chamados Workspace1 e Workspace2 e 100 máquinas virtuais que\nexecute o Windows Server.\nVocê precisa coletar dados e eventos de desempenho das máquinas virtuais. A solução deve atender aos seguintes requisitos:\n• Os logs devem ser enviados para Workspace1 e Workspace 2.\n• Todos os eventos do Windows devem ser capturados.\n• Todos os eventos de segurança devem ser capturados.\nO que você deve instalar e configurar em cada máquina virtual?\n',
        'number': '',
        'page': 486,
        'answers': [{
            'text': 'A. o agente do Azure Monitor\n',
            'correct': true
        }, {
            'text': 'B. a extensão de diagnóstico do Windows Azure (WAD)\n',
            'correct': false
        }, {
            'text': 'C. o agente VM do Windows',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)'
    }, {
        'question': '44\nVocê tem uma assinatura do Azure que contém uma máquina virtual chamada VM1 e uma função do Azure chamada App1.\nVocê precisa criar uma regra de alerta que executará o App1 se a VM1 parar.\nO que você deve criar para a regra de alerta?\n',
        'number': '',
        'page': 487,
        'answers': [{
            'text': 'A. um grupo de segurança de aplicativos\n',
            'correct': false
        }, {
            'text': 'B. um grupo de segurança que possui associação dinâmica de dispositivos\n',
            'correct': false
        }, {
            'text': 'C. um grupo de ação\n',
            'correct': true
        }, {
            'text': 'D. um grupo de aplicativos',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (100%)\nTópico 6'
    }, {
        'question': '45\nVocê tem uma assinatura do Azure que contém uma rede virtual chamada VNet1.\nA VNet1 utiliza dois circuitos ExpressRoute que se conectam a dois datacenters locais separados.\nVocê precisa criar um painel para exibir métricas detalhadas e uma representação visual da topologia da rede.\nO que você deve usar?\n',
        'number': '',
        'page': 487,
        'answers': [{
            'text': 'A. Informações da Rede do Azure Monitor\n',
            'correct': true
        }, {
            'text': 'B. uma Regra de Coleta de Dados (DCR)\n',
            'correct': false
        }, {
            'text': 'C. Observador de Rede Virtual do Azure\n',
            'correct': false
        }, {
            'text': 'D. Análise de Log',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (91%) 9%'
    }, {
        'question': '46\nVocê implanta máquinas virtuais do Azure em três regiões do Azure\nCada região contém uma rede virtual. Cada rede virtual contém múltiplas sub-redes emparelhadas numa topologia de malha completa.\nCada sub-rede contém um grupo de segurança de rede (NSG) que possui regras definidas.\nUm usuário relata que não pode usar a porta 33000 para conectar-se de uma máquina virtual em uma região a uma máquina virtual em outra região.\nQuais são as duas opções que você pode usar para diagnosticar o problema? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 488,
        'answers': [{
            'text': 'A. Gerenciador de Rede Virtual do Azure\n',
            'correct': false
        }, {
            'text': 'B. Verificação de fluxo de IP\n',
            'correct': true
        }, {
            'text': 'C. Informações da Rede do Azure Monitor\n',
            'correct': false
        }, {
            'text': 'D. Solução de problemas de conexão\n',
            'correct': true
        }, {
            'text': 'E. regras de segurança eletivas',
            'correct': false
        }
        ],
        'explication': 'AC\nDistribuição de votos da comunidade\nBD (100%)\nTópico 6'
        ,
        'filters':[
            'K001'
        ]
    }, {
        'question': '47\nVocê tem uma assinatura do Azure.\nVocê precisa receber um alerta por email quando um bloqueio de recurso for removido de qualquer recurso na assinatura.\nO que você deve usar para criar um alerta de log de atividades no Azure Monitor?\n',
        'number': '',
        'page': 488,
        'answers': [{
            'text': 'A. um recurso, uma condição e um grupo de ação\n',
            'correct': true
        }, {
            'text': 'B. um recurso, uma condição e um grupo do Microsoft 365\n',
            'correct': false
        }, {
            'text': 'C. um espaço de trabalho do Log Analytics, um recurso e um grupo de ação\n',
            'correct': false
        }, {
            'text': 'D. um endpoint de coleta de dados, um grupo de segurança de aplicativo e um grupo de recursos',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nUm (100%)'
    },

    {
        'question': `Questão 48 Tópico 6
        Você tem uma assinatura do Azure que contém os alertas mostrados na exposição a seguir.
        <img src="imagens/hquestao48topico6.png" alt="imagem da questão"></img>
        Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.
`,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `Para Alerta1, Resposta do usuário [opção de resposta].`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "não pode ser alterado",
                    'correct': false
                }, {
                    'text': "pode ser alterado apenas para Novo",
                    'correct': false
                }, {
                    'text': "pode ser alterado apenas para Reconhecido",
                    'correct': false
                },
                {
                    'text': "pode ser alterado para Novo ou Reconhecido",
                    'correct': true
                }
            ]
        },

        {
            'text': 'Para Alerta2, Resposta do usuário [opção de resposta].',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "não pode ser alterado",
                    'correct': false
                }, {
                    'text': "pode ser alterado apenas para Reconhecido",
                    'correct': false
                }, {
                    'text': "só pode ser alterado para fechado",
                    'correct': false
                },
                {
                    'text': "pode ser alterado para Reconhecido ou Fechado",
                    'correct': true
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `comentarios mais votados não concordam com a fone
        mais votado: 
        Testado em laboratório. Resposta correta para:
         Caixa1: pode ser alterada para Novo ou Reconhecido Explicação: "Alterar a resposta do usuário não afeta a condição do alerta" é o que o portal diz ao alterar a resposta de um alerta cuja resposta do usuário está fechada 
        Caixa2: pode ser alterada para Reconhecido ou Fechado           
`
    },
    {
        'question': `Questão 49 Tópico 6
        Você cria uma política de backup de cofre do Recovery Services chamada Policy1,
        conforme mostrado na seguinte exposição:
        <img src="imagens/hquestao49topico6.png" alt="imagem da questão"></img>
        Use os menus suspensos para selecionar a opção de resposta que completa cada declaração com base nas informações apresentadas no gráfico.
        `,
        'number': 17,
        'page': 11,
        'studyCase': true,


        'answers': [{
            'text': `O backup que ocorrer no domingo, 1º de março, será retido para [opção de resposta].`,
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "30 dias",
                    'correct': false
                }, {
                    'text': "10 semanas",
                    'correct': false
                }, {
                    'text': "36 meses",
                    'correct': false
                },
                {
                    'text': "10 anos",
                    'correct': true
                }
            ]
        },

        {
            'text': 'O backup que ocorrer no domingo, 1º de novembro, será retido para [opção de resposta].',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "30 dias",
                    'correct': false
                }, {
                    'text': "10 semanas",
                    'correct': false
                }, {
                    'text': "36 meses",
                    'correct': true
                },
                {
                    'text': "10 anos",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': false,
        'explication': `concordaram . 
        Caixa 1: 10 anos O ponto de backup anual ocorre em 1º de março e seu período de retenção é de 10 anos.
        Caixa 2: 36 meses O ponto de backup mensal ocorre no dia 1º de cada mês e seu período de retenção é de 36 meses. Observação: a política de retenção do Azure leva o maior período de retenção para cada backup. Em caso de conflito entre 2 políticas diferentes. Referência: https://docs.microsoft.com/en-us/microsoft-365/compliance/retention?view=o365-worldwide
            
`
    },

    {
        'question': `Questão 50. Tópico 6
            HOTSPOT
            -

            Você tem uma assinatura do Azure que contém os cofres mostrados na tabela a seguir.
            <img src="imagens/xquestao50topico6parte1.png" alt="imagem da questão"></img>

            Você implanta as máquinas virtuais mostradas na tabela a seguir.
            <img src="imagens/xquestao50topico6parte2.png" alt="imagem da questão"></img>

            Você tem as políticas de backup mostradas na tabela a seguir.
            <img src="imagens/xquestao50topico6parte3.png" alt="imagem da questão"></img>

            Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.

            OBSERVAÇÃO: Cada seleção correta vale um ponto.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'É possível fazer backup da VM1 usando a Política1.\n',
            'correct': true
        }, {
            'text': 'É possível fazer backup da VM2 usando a Política3.',
            'correct': false
        }, {
            'text': 'É possível fazer backup da VM2 usando a Política2.',
            'correct': true
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': ` Algumas divergências mas resposta dada aqui igual a fonte
        `

    },

    {
        'question': '51\nVocê tem uma assinatura do Azure. A assinatura contém máquinas virtuais que se conectam a uma rede virtual chamada VNet1.\nVocê planeja configurar o Azure Monitor para VM Insights.\nVocê precisa garantir que todas as máquinas virtuais se comuniquem apenas com o Azure Monitor por meio do VNet1.\nO que você deve criar primeiro?\n',
        'number': '',
        'page': 493,
        'answers': [{
            'text': 'A. uma regra de coleta de dados (DCR)\n',
            'correct': false
        }, {
            'text': 'B. um espaço de trabalho do Log Analytics\n',
            'correct': false
        }, {
            'text': 'C. um Azure Monitor Private Link Scope (AMPLS)\n',
            'correct': true
        }, {
            'text': 'D. um ponto de extremidade privado',
            'correct': false
        }
        ],
        'explication': 'C\nDistribuição de votos da comunidade\nC (85%) Outros'
    },



    {
        'question': `Questão 52. Tópico 6.
                HOTSPOT

            Você tem uma assinatura do Azure que contém os cofres mostrados na tabela a seguir.

            <img src="imagens/xquestao52topico6parte1.png" alt="imagem da questão"></img>

            Você cria uma conta de armazenamento que contém os recursos mostrados na tabela a seguir.
            
            <img src="imagens/xquestao52topico6parte2.png" alt="imagem da questão"></img>

            Em qual cofre você pode fazer backup de cont1 e share1? Para responder, selecione as opções apropriadas na área de resposta.

            NOTA: Cada resposta correta vale um ponto.
        `,
        'number': 1,
        'page': 540,
        'studyCase': true,
        'answers': [{
            'text': 'Cont1',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente backup1",
                    'correct': true
                }, {
                    'text': "Apenas recuperação1",
                    'correct': false
                }, {
                    'text': "Backup1 ou Recuperação1",
                    'correct': false
                },
                {
                    'text': "Não é possível fazer backup em Backup1 ou Recovery1",
                    'correct': false
                }
            ]
        },

        {
            'text': 'Compartilhar1',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente backup1",
                    'correct': false
                }, {
                    'text': "Apenas recuperação1",
                    'correct': true
                }, {
                    'text': "Backup1 ou Recuperação1",
                    'correct': false
                },
                {
                    'text': "Não é possível fazer backup em Backup1 ou Recovery1",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': true,
        'explication': ` 
                `
        , 'filters': ['K002']
    },


    {
        'question': '53\nVocê tem uma assinatura do Azure que contém um trabalho do Azure Stream Analytics chamado Job1.\nVocê precisa monitorar eventos de entrada para Job1 para identificar o número de eventos que NÃO foram processados.\nQual métrica você deve usar?\n',
        'number': '',
        'page': 495,
        'answers': [{
            'text': 'A. Eventos fora de ordem\n',
            'correct': false
        }, {
            'text': 'B. Eventos de saída\n',
            'correct': false
        }, {
            'text': 'C. Eventos de entrada tardia\n',
            'correct': false
        }, {
            'text': 'D. Eventos de entrada em atraso',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)\nTópico 6'
    }, {
        'question': '54\nVocê tem uma assinatura do Azure que contém um banco de dados SQL do Azure chamado DB1.\nVocê planeja usar o Azure Monitor para monitorar o desempenho do DB1. Você deve ser capaz de executar consultas para analisar dados de log.\nQual destino você deve configurar nas configurações de diagnóstico do DB1?\n',
        'number': '',
        'page': 495,
        'answers': [{
            'text': 'A. Enviar para um espaço de trabalho do Log Analytics.\n',
            'correct': true
        }, {
            'text': 'B. Arquivar em uma conta de armazenamento.\n',
            'correct': false
        }, {
            'text': 'C. Transmita para um hub de eventos do Azure.',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nA (100%)'
    }, {
        'question': '55\nVocê tem uma assinatura do Azure. A assinatura contém máquinas virtuais que executam o Windows Server.\nVocê tem uma regra de coleta de dados (DCR) chamada Rule1.\nVocê planeja usar o Agente Monitor do Azure para coletar eventos dos logs de eventos do sistema Windows.\nVocê só precisa coletar eventos do sistema que tenham um ID 1001.\nQue tipo de consulta você deve usar para a fonte de dados na Regra1?',
        'number': '',
        'page': 496,
        'answers': [{
            'text': '\nA.SQL\n',
            'correct': false
        }, {
            'text': 'B. XPath',
            'correct': true
        }, {
            'text': '\nC.KQL',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (80%) C (20%)\nTópico 6'
    }, {
        'question': '56\nVocê tem uma assinatura do Azure que contém uma máquina virtual chamada VM1.\nVocê tem um datacenter local que contém um controlador de domínio denominado DC1. ExpressRoute é usado para conectar o datacenter local\npara o Azure.\nVocê precisa usar o Connection Monitor para identificar a latência da rede entre VM1 e DC1.\nO que você deve instalar no DC1?\n',
        'number': '',
        'page': 496,
        'answers': [{
            'text': 'A. o agente Azure Connected Machine para servidores habilitados para Azure Arc\n',
            'correct': false
        }, {
            'text': 'B. a extensão da máquina virtual do Azure Network Watcher Agent\n',
            'correct': false
        }, {
            'text': 'C. o agente Log Analytics\n',
            'correct': false
        }, {
            'text': 'D. uma extensão de agente do Azure Monitor',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (48%) C (41%) 9%'
    }, {
        'question': '57\nVocê tem uma assinatura do Azure que tem o Tra c Analytics configurado.\nVocê implanta uma nova máquina virtual chamada VM1 que possui as seguintes configurações:\n• Região: Leste dos EUA\n• Rede virtual: VNet1\n• Grupo de segurança de rede NIC: NSG1\nVocê precisa monitorar o tráfego da VM1 usando o Tra c Analytics.\nQuais configurações você deve definir?\n',
        'number': '',
        'page': 497,
        'answers': [{
            'text': 'A. Configurações de diagnóstico para VM1\n',
            'correct': false
        }, {
            'text': 'B. Registros de fluxo NSG para NSG1\n',
            'correct': true
        }, {
            'text': 'C. Configurações de diagnóstico para NSG1\n',
            'correct': false
        }, {
            'text': 'D. Insights para VM1',
            'correct': false
        }
        ],
        'explication': 'B\nDistribuição de votos da comunidade\nB (100%)\nTópico 6'
    }, {
        'question': '58\nVocê tem uma assinatura do Azure. A assinatura contém 10 máquinas virtuais que executam o Windows Server. Cada máquina virtual hospeda um site em\nIIS e tem o Agente Monitor do Azure instalado.\nVocê precisa coletar os logs do IIS de cada máquina virtual e armazená-los em um workspace do Log Analytics.\nO que você deve configurar primeiro?\n',
        'number': '',
        'page': 497,
        'answers': [{
            'text': 'A. um ponto final de coleta de dados\n',
            'correct': true
        }, {
            'text': 'B. um escopo de link privado do Azure Monitor (AMPLS)\n',
            'correct': false
        }, {
            'text': 'C. Configurações de diagnóstico\n',
            'correct': false
        }, {
            'text': 'D. Insights de VM\n',
            'correct': false
        }, {
            'text': 'E. um endpoint privado',
            'correct': false
        }
        ],
        'explication': 'A\nDistribuição de votos da comunidade\nA (100%)'
    },

    {
        'question': `Questão 59. Tópico 6
            HOTSPOT
            você tem uma assinatura do Azure que contém duas contas de armazenamento denominadas contoso101 e contoso102.
            A assinatura contém as máquinas virtuais mostradas na tabela a seguir.

            <img src="imagens/xquestao59topico6parte1.png" alt="imagem da questão"></img>


            A VNet1 tem pontos finais de serviço configurados conforme mostrado na exposição Pontos finais de serviço. (Clique na guia Terminais de serviço.)
            <img src="imagens/xquestao59topico6parte2.png" alt="imagem da questão"></img>

            O terminal de serviço Microsoft.Storage tem a política de terminal de serviço mostrada na exposição Microsoft.Storage. (Clique na guia Microsoft.Storage.)
            <img src="imagens/xquestao59topico6parte3.png" alt="imagem da questão"></img>

            Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.

            NOTA: Cada seleção correta vale um ponto.

                    \n`,
        'number': '',
        'page': 549,
        'studyCase': false,
        'answers': [{

            'text': 'VM1 pode acessar contoso102\n',
            'correct': false
        }, {
            'text': 'VM2 pode acessar contoso101',
            'correct': true
        }, {
            'text': 'VM2 usa um IP privado para acessar Azure AD',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': ` Muita divergência nos comentários. Pego o mais votado (mas n esta tão alto assim)
        `
        ,
        'filters':[
            'K001'
        ]
    },


    {
        'question': '60\nVocê tem uma assinatura do Azure que contém várias máquinas virtuais na região do Azure Oeste dos EUA.\nVocê precisa usar o Tra c Analytics no Azure Network Watcher para monitorar o tráfego da máquina virtual.\nQuais são os dois recursos que você deve criar? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.\n',
        'number': '',
        'page': 500,
        'answers': [{
            'text': 'A. um espaço de trabalho do Log Analytics\n',
            'correct': true
        }, {
            'text': 'B. uma pasta de trabalho do Azure Monitor\n',
            'correct': false
        }, {
            'text': 'C. uma conta de armazenamento\n',
            'correct': false
        }, {
            'text': 'D. um espaço de trabalho do Microsoft Sentinel\n',
            'correct': false
        }, {
            'text': 'E. uma regra de coleta de dados (DCR) no Azure Monitor',
            'correct': true
        }
        ],
        'explication': 'AC\nDistribuição de votos da comunidade\nEA (50%) AC (48%)'
    },

    {
        'question': `Questão 1. Tópico 7. (Estudo de caso)
          Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso1.html
            Pergunta
            HOTSPOT -
            Você precisa definir as configurações do dispositivo para atender aos requisitos técnicos e aos requisitos do usuário.
            Quais são as duas configurações que você deve modificar? Para responder, selecione as configurações apropriadas na área de resposta.
            Área Quente:
            <img src="imagens/questo2topico7estudocaso1.png" alt="imagem da questão"></img>`,
        'number': '',
        'page': 505,
        'answers': [{
            'text': 'Veja a resposta em : https://kimbellyf.github.io/quiz-edition/imagens/respostacorretaquestao2topico7estudocaso1.png\n',
            'correct': true
        }
        ],
        'explication': `
            Veja a resposta em :
            
            https://kimbellyf.github.io/quiz-edition/imagens/respostacorretaquestao2topico7estudocaso1.png\n
            Caixa 1: Selecionado -
            Somente usuários selecionados devem poder ingressar em dispositivos

            Caixa 2: Sim -
            Certifique-se de que quando os usuários ingressam em dispositivos no Azure Active Directory (Azure AD), os usuários usam um telefone celular para verificar sua identidade.`
            ,
        'filters': ['K001','K002']
    },


    {
        'question': `Questão 2. Tópico 7. (Estudo de caso)
          Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso1.html
          \nPergunta\nVocê precisa atender aos requisitos do usuário para Admin1.\nO que você deveria fazer?\n`,
        'number': '',
        'page': 505,
        'answers': [{
            'text': 'A. Na folha do Azure Active Directory, modifique os Grupos\n',
            'correct': false
        }, {
            'text': 'B. Na folha do Azure Active Directory, modifique as Propriedades\n',
            'correct': false
        }, {
            'text': 'C. Na folha Assinaturas, selecione a assinatura e modifique as configurações de controle de acesso (IAM)\n',
            'correct': false
        }, {
            'text': 'D. Na folha Assinaturas, selecione a assinatura e modifique as Propriedades',
            'correct': true
        }
        ],
        'explication': 'D\nCenário:\n✑ Designe um novo usuário chamado Admin1 como administrador de serviço da assinatura do Azure.\n✑ Admin1 deve receber alertas por e-mail sobre interrupções no serviço.\nSiga estas etapas para alterar o Administrador de Serviço no portal do Azure.\n1. Certifique-se de que seu cenário seja suportado verificando as limitações para alterar o Administrador de Serviço.\n2. Entre no portal do Azure como administrador da conta.\n3. Abra Cost Management + Billing e selecione uma assinatura.\n4. Na navegação esquerda, clique em Propriedades.\n5. Clique em Administrador de serviço.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/role-based-access-control/classic-administrators\nDistribuição de votos da comunidade\nD (56%) C (44%)'
        , 'filters': ['K001','K002']
    },


    {
        'question': `1. Tópico 8. 
            Informações introdutórias
            Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso.html
            Pergunta
            HOTSPOT –
            Você precisa configurar o Backup do Azure para fazer backup dos compartilhamentos de arquivos e das máquinas virtuais.
            Qual é o número mínimo de cofres e políticas de backup dos Serviços de Recuperação que você deve criar? Para responder, selecione as opções apropriadas na área de resposta.
            NOTA: Cada seleção correta vale um ponto.
            Área Quente:`,
        'number': '2',
        'page': 11,

        answers: [
            {
                text: 'Cofres dos Serviços de Recuperação',
                options:
                    [
                        {
                            text: 'Selecione',
                            correct: false
                        },
                        {
                            text: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            correct: false
                        },
                        {
                            text: '7',
                            correct: false
                        },
                    ]
            },
            {
                text: 'Políticas de backup:',
                options: [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        text: '1',
                        correct: false
                    },
                    {
                        text: '2',
                        correct: false
                    },
                    {
                        text: '3',
                        correct: false
                    },
                    {
                        text: '4',
                        correct: false
                    },
                    {
                        text: '5',
                        correct: false
                    },
                    {
                        text: '6',
                        correct: true
                    },

                ]
            }

        ],
        typeQuestion: 'select',
        'explication': `Caixa 1: 3 –
            Se você tiver fontes de dados em várias regiões, crie um cofre dos Serviços de Recuperação para cada região.
            Os compartilhamentos de arquivos e VMs estão localizados em três regiões: Oeste dos EUA, Leste dos EUA, Centro dos EUA.

            Caixa 2: 6 -
            Uma política de backup tem como escopo um cofre. Para cada cofre precisamos de uma política de backup para compartilhamentos de arquivos e uma política de backup para VM.
            Observação:
            faça backup dos compartilhamentos de arquivos e das máquinas virtuais do Azure usando


            a Referência de Backup do Azure:
            https://docs.microsoft.com/en-us/azure/backup/backup-create-rs-vault https://docs.microsoft. com/en-us/azure/backup/guidance-best-practices`,
    },


    {
        'question': `2. Tópico 8. ARRASTAR E SOLTAR -\n (OBS: NO MOMENTO NÃO ESTÁ CONTANDO NA CONTAGEM DE ACERTO, SE QUISER SABER SE RESPONDEU CORRETO CLIQUE EM VER RESPOSTA)
            Informações introdutórias
            Estudo de caso -
            
            Estudo de caso - Contoso link : https://kimbellyf.github.io/quiz-edition/contoso.html

            Pergunta
            DRAG DROP –
            Você precisa configurar os alertas para VM1 e VM2 para atender aos requisitos técnicos.
            Quais são as três ações que você deve executar em sequência? Para responder, mova todas as ações da lista de ações para a área de resposta e organize-as na ordem correta.
            Selecione e coloque:`,
        'number': '2',
        'page': 11,
        'answers': [

            [
                {
                    'text': 'Ações \n',
                    'options': [
                        { 'text': 'Crie um espaço de trabalho do Log Analytics.', 'correct': true, 'index': '1' },
                        { 'text': 'Uma conta de armazenamento do Azure', 'correct': false, 'index': '-1' },
                        { 'text': 'Defina as configurações de diagnóstico.', 'correct': false, 'index': '-1' },
                        { 'text': 'Crie uma regra de alerta.', 'correct': true, 'index': '3' },
                        { 'text': 'Colete contadores de desempenho do Windows dos agentes do Log Analytics.', 'correct': true, 'index': '2' },
                        { 'text': 'Crie um banco de dados SQL do Azure.', 'correct': false, 'index': '-1' },
                    ],
                    'function': 'origin'

                },
                {
                    'text': 'Answer \n',
                    'options': [
                    ],
                    'function': 'destiny'

                }
            ],

        ],
        'explication': 'Comentário mais votado: Não tenho certeza, mas acho que a resposta deveria ser: 1. Crie um espaço de trabalho do log Analytics. 2. Colete contadores de desempenho do Windows dos agentes do Log Analytics. 3. Crie uma regra de alerta.',
        'typeQuestion': 'dragdrop'
    },


    {
        question: `Questão 1. Tópico 9. Informações introdutórias
                    Estudo de caso - Contoso link : https://kimbellyf.github.io/quiz-edition/contoso.html
                    Pergunta
                    HOTSPOT -
                    Você precisa garantir que o Usuário1 possa criar definições de iniciativa e que o Usuário4 possa atribuir iniciativas ao RG2. A solução deve atender aos requisitos técnicos.
                    Qual função você deve atribuir a cada usuário? Para responder, selecione as opções apropriadas na área de resposta.
                    NOTA: Cada seleção correta vale um ponto.
                    Área Quente:

            `,
        number: 9,
        page: 12,
        answers: [
            {
                text: 'Usuário1:',
                options:
                    [
                        {
                            text: 'Selecione',
                            correct: false
                        },
                        {
                            text: 'Colaborador do RG1',
                            correct: false
                        },
                        {
                            text: 'Colaborador do Sub1',
                            correct: false
                        },
                        {
                            text: 'Administrador de segurança para RG1',
                            correct: false
                        },
                        {
                            text: 'Colaborador de política de recursos para Sub1',
                            correct: true
                        },
                    ]
            },
            {
                text: 'Usuário4:',
                options: [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        text: 'Colaborador do RG2',
                        correct: false
                    }, {
                        text: 'Colaborador do Sub1',
                        correct: false
                    }, {
                        text: 'Administrador de segurança para Sub1',
                        correct: false
                    },
                    {
                        text: 'Colaborador de Política de Recursos para RG2',
                        correct: true
                    },
                ]
            }

        ],
        typeQuestion: 'select',
        explication: 'Comentário mais votado: A resposta correta é: VNET1 terá apenas a tag Department: D1 e a VNET 2 terá apenas a tag Label: Value1'
    },


    {
        'question': `2. Tópico 9. Estudo de caso -
            Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso.html
            \nPergunta\nVocê precisa garantir que pode conceder permissões somente leitura do Group4 Azure RBAC para todos os compartilhamentos do Azure.\nO que você deveria fazer?\n',
            `,
        'number': '',
        'page': 517,
        'answers': [{
            'text': 'A. No storage2, habilite o acesso baseado em identidade para os compartilhamentos de arquivos.\n',
            'correct': true
        }, {
            'text': 'B. Recrie o armazenamento2 e defina o namespace hierárquico como Ativado.\n',
            'correct': false
        }, {
            'text': 'C. No armazenamento1 e no armazenamento4, altere o tipo de conta para StorageV2 (uso geral v2).\n',
            'correct': false
        }, {
            'text': 'D. Crie uma assinatura de acesso compartilhado (SAS) para armazenamento1, armazenamento2 e armazenamento4.',
            'correct': false
        }
        ],
        'explication': 'A\nOs Arquivos do Azure dão suporte à autenticação baseada em identidade por meio do Bloco de Mensagens do Servidor (SMB) por meio dos Serviços de Domínio do Active Directory locais\n(AD DS) e Azure\nServiços de Domínio Active Directory (Azure AD DS).\nReferência:\nhttps://docs.microsoft.com/en-us/azure/storage/les/storage-les-active-directory-overview'
    }, {
        'question': `Questão 1. Tópico 10
            
            Estudo de caso - Contoso link : https://kimbellyf.github.io/quiz-edition/contoso1.html
            \nPergunta\nVocê precisa implementar uma solução de backup para App1 depois que o aplicativo for movido.\nO que você deve criar primeiro?\n`,
        'number': '',
        'page': 520,
        'answers': [{
            'text': 'A. um plano de recuperação\n',
            'correct': false
        }, {
            'text': 'B. um servidor de backup do Azure\n',
            'correct': false
        }, {
            'text': 'C. uma política de backup\n',
            'correct': false
        }, {
            'text': 'D. um cofre dos Serviços de Recuperação',
            'correct': true
        }
        ],
        'explication': 'D\nUm cofre dos Serviços de Recuperação é um contentor lógico que armazena os dados de backup para cada recurso protegido, como VMs do Azure. Quando o backup\ntrabalho para um recurso protegido é executado, ele cria um ponto de recuperação dentro do cofre dos Serviços de Recuperação.\nCenário:\nExistem três níveis de aplicativos, cada um com cinco máquinas virtuais.\nMova todas as máquinas virtuais do App1 para o Azure.\nCertifique-se de que todas as máquinas virtuais do App1 estejam protegidas por backups.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/backup/quick-backup-vm-portal\nDistribuição de votos da comunidade\nD (100%)'
        , 'filters': ['K001','K002']
    },

    {
        'question': `Questão 2. Tópico 10
            Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso1.html
            \nPergunta\nVocê precisa mover os arquivos do blueprint para o Azure.\nO que você deveria fazer?\n',
        `,
        'number': '',
        'page': 522,
        'answers': [{
            'text': 'A. Gere uma chave de acesso. Mapeie uma unidade e copie os arquivos usando o File Explorer.\n',
            'correct': false
        }, {
            'text': 'B. Use o Azure Storage Explorer para copiar os arquivos.\n',
            'correct': true
        }, {
            'text': 'C. Use o serviço Azure Import/Export.\n',
            'correct': false
        }, {
            'text': 'D. Gere uma assinatura de acesso compartilhado (SAS). Mapeie uma unidade e copie os arquivos usando o File Explorer.',
            'correct': false
        }
        ],
        'explication': 'B\nO Azure Storage Explorer é uma ferramenta gratuita da Microsoft que permite que você trabalhe com dados do Azure Storage no Windows, macOS e Linux. Você pode\nusá-lo para carregar e baixar dados do armazenamento de blobs do Azure.\nCenário:\nAs alterações planejadas incluem: mover os arquivos de blueprint do produto existente para o armazenamento de blobs do Azure.\nOs requisitos técnicos incluem: copiar os arquivos de blueprint para o Azure pela Internet.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/move-data-to-azure-blob-using-azure-storage-explorer\nDistribuição de votos da comunidade\nB (100%)'
        , 'filters': ['K001','K002']
    },

    {
        'question': `Questão 3. Tópico 10. Informações introdutórias
                    Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso1.html
                    Pergunta
                    HOTSPOT -
                    Você precisa identificar os requisitos de armazenamento para a Contoso.
                    Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
                    NOTA: Cada seleção correta vale um ponto.
                    Hot Area:
                    Área quente:
                    \n`,
        'number': '',
        'page': 549,
        'studyCase': true,
        'answers': [{

            'text': 'A Contoso requer uma conta de armazenamento que dê suporte ao armazenamento de Blobs.\n',
            'correct': true
        }, {
            'text': 'A Contoso requer uma conta de armazenamento que dê suporte ao armazenamento da Tabela do Azure..\n',
            'correct': false
        }, {
            'text': 'A Contoso requer uma conta de armazenamento que dê suporte ao Armazenamento de Arquivos do Azure.',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Caixa 1: Sim -
            A Contoso está movendo os arquivos de blueprint do produto existente para o armazenamento de Blobs do Azure.
            Use o armazenamento padrão não gerenciado para os discos rígidos das máquinas virtuais. Usamos Page Blobs para isso.

            Caixa 2: Não -
            Caixa 3: Não`
            ,
        'filters': ['K001','K002']
    },

    {
        'question': `Questão 3 tópico 10. 
            Informações introdutórias
            Estudo de caso - Contoso..

            Estudo de caso - Contoso link : https://kimbellyf.github.io/quiz-edition/contoso1.html

    Pergunta
            HOTSPOT -
    Você precisa identificar os requisitos de armazenamento para a Contoso.
            Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira.Caso contrário, selecione Não.
    NOTA: Cada seleção correta vale um ponto.
            Hot Area:
\n`,
        'number': '',
        'page': 549,
        'studyCase': true,
        'answers': [{

            'text': ' A Contoso requer uma conta de armazenamento que dê suporte ao armazenamento de Blobs.\n',
            'correct': true
        }, {
            'text': 'A Contoso requer uma conta de armazenamento que dê suporte ao armazenamento da Tabela do Azure..\n',
            'correct': false
        }, {
            'text': 'A Contoso requer uma conta de armazenamento que dê suporte ao Armazenamento de Arquivos do Azure.\n',
            'correct': false
        }],

        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': `Caixa 1: Sim -
    A Contoso está movendo os arquivos de blueprint do produto existente para o armazenamento de Blobs do Azure.
            Use o armazenamento padrão não gerenciado para os discos rígidos das máquinas virtuais.Usamos Page Blobs para isso.

    Caixa 2: Não -
        Caixa 3: Não`
        , 'filters': ['K001','K002']
    },

    {
        'question': `Questão 1.Tópico 11. Informações introdutórias
            Estudo de caso -
    Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso.html
    Pergunta
HOTSPOT -
    Você precisa criar container1 e share1.
            Quais contas de armazenamento você deve usar para cada recurso ? Para responder, selecione as opções apropriadas na área de resposta.
    OBSERVAÇÃO: Cada seleção correta vale um ponto.
            Área de Hot:
`,
        'number': 1,
        'page': 540,
        'studyCase': true,

        'answers': [{
            'text': 'contêiner1:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Somente armazenamento2",
                    'correct': false
                }, {
                    'text': "somente armazenamento2 e armazenamento3",
                    'correct': true
                }, {
                    'text': "somente armazenamento1, armazenamento2 e armazenamento3",
                    'correct': false
                },
                {
                    'text': "somente armazenamento2, armazenamento3 e armazenamento4",
                    'correct': false
                },
                {
                    'text': "armazenamento 1, armazenamento2, armazenamento3 e armazenamento4",
                    'correct': false
                }
            ]
        },


        {
            'text': 'Compartilhar1(File1)',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "somente armazenamento2",
                    'correct': true
                }, {
                    'text': "armazenamento4 apenas",
                    'correct': false
                }, {
                    'text': "somente armazenamento2 e armazenamento4",
                    'correct': false
                },
                {
                    'text': "somente armazenamento1, armazenamento2 e armazenamento4",
                    'correct': false
                },
                {
                    'text': "armazenamento1, armazenamento2, armazenamento3 e armazenamento4",
                    'correct': false
                },

            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': true,
        'explication': `Referência:
https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview.
            Há discordância nos comentários
        `
    },

    {
        'question': `Questão 2. Informações introdutórias
            Estudo de caso -
    Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso.html

    Pergunta
HOTSPOT -
    Você precisa criar um storage5.A solução deve suportar as alterações planejadas.
            Qual tipo de conta de armazenamento você deve usar e qual conta você deve configurar como a conta de armazenamento de destino ? Para responder, selecione as opções apropriadas na área de resposta.
    OBSERVAÇÃO: Cada seleção correta vale um ponto.
            Hot Area:
`,
        'number': 1,
        'page': 540,
        'studyCase': true,


        'answers': [{
            'text': 'Tipo de conta:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Armazenamento de Blobs",
                    'correct': false
                }, {
                    'text': "BlockBlobStorage",
                    'correct': false
                }, {
                    'text': "Armazenamento (uso geral v1)",
                    'correct': false
                },
                {
                    'text': "StorageV2 (uso geral v2)",
                    'correct': true
                }
            ]
        },

        {
            'text': 'Destino',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Armazenamento1",
                    'correct': false
                }, {
                    'text': "Armazenamento2",
                    'correct': true
                }, {
                    'text': "Armazenamento3",
                    'correct': false
                },
                {
                    'text': "Armazenamento4",
                    'correct': false
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'caseStudy': true,
        'explication': `https://docs.microsoft.com/en-us/azure/storage/blobs/object-replication-configure?tabs=portal: 
`
    },


    {
        question: `Questão 1. Tópico 11. 
            Estudo de caso - Contoso link : https://kimbellyf.github.io/quiz-edition/contoso.html
            Pergunta
            HOTSPOT -
            Você precisa criar container1 e share1.
            Quais contas de armazenamento você deve usar para cada recurso? Para responder, selecione as opções apropriadas na área de resposta.
            NOTA: Cada seleção correta vale um ponto.
            Área Quente:
            `,
        number: 2,
        page: 12,

        answers: [
            {
                text: 'Contêiner1:',
                options: [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        text: "somente armazenamento2",
                        correct: false
                    }, {
                        text: "somente armazenamento2 e armazenamento3",
                        correct: true
                    }, {
                        text: "somente armazenamento1, armazenamento2 e armazenamento3",
                        correct: false
                    }, {
                        text: "somente armazenamento2, armazenamento3 e armazenamento4",
                        correct: false
                    },
                    {
                        text: "armazenamento 1, armazenamento2, armazenamento3 e armazenamento4",
                        correct: false
                    },
                ]
            }, {
                text: 'Compartilhar1',
                options: [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        text: "somente armazenamento2",
                        correct: true
                    }, {
                        text: "armazenamento4 apenas",
                        correct: false
                    }, {
                        text: "somente armazenamento2 e armazenamento4",
                        correct: false
                    }, {
                        text: "somente armazenamento1, armazenamento2 e armazenamento4",
                        correct: false
                    },
                    {
                        text: "armazenamento1, armazenamento2, armazenamento3 e armazenamento4",
                        correct: false
                    },

                ]
            }
        ],
        typeQuestion: 'select',
        explication: `Referência:
https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers https://docs.microsoft.com/en-us/azure/storage/ comum/visão geral da conta de armazenamento`
    },


    {
        question: `Questão 2. Tópico 11. 
            Estudo de caso - Contoso link : https://kimbellyf.github.io/quiz-edition/contoso.html
            Pergunta
            HOTSPOT -
            Você precisa criar um storage5. A solução deve suportar as alterações planejadas.
            Qual tipo de conta de armazenamento você deve usar e qual conta você deve configurar como a conta de armazenamento de destino? Para responder, selecione as opções apropriadas na área de resposta.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
            Área Quente:
            `,
        number: 2,
        page: 12,

        answers: [
            {
                text: 'Tipo de conta:',
                options: [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        text: "Armazenamento de Blobs",
                        correct: false
                    }, {
                        text: "BlockBlobStorage",
                        correct: false
                    }, {
                        text: "Armazenamento (uso geral v1)",
                        correct: false
                    }, {
                        text: "StorageV2 (uso geral v2)",
                        correct: true
                    }]
            }, {
                text: 'Destino',
                options: [
                    {
                        text: 'Selecione',
                        correct: false
                    },
                    {
                        text: "Armazenamento1",
                        correct: false
                    }, {
                        text: "Armazenamento2",
                        correct: true
                    }, {
                        text: "Armazenamento3",
                        correct: false
                    }, {
                        text: "Armazenamento4",
                        correct: false
                    }]
            }
        ],
        typeQuestion: 'select',
        explication: `Referência:
        https://docs.microsoft.com/en-us/azure/storage/blobs/object-replication-configure?tabs=portal`
    },


    {
        'question': `Questão 3. Tópico 11 
            Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso.html
            Pergunta
            Você precisa identificar qual conta de armazenamento usar para o registro de fluxo do tráfego IP da VM5. A solução deve atender aos requisitos de retenção.
            Qual conta de armazenamento você deve identificar?
            \n',

        `,
        'number': '',
        'page': 532,
        'answers': [{
            'text': 'A. armazenamento1\n',
            'correct': false
        }, {
            'text': 'B. armazenamento2\n',
            'correct': true
        }, {
            'text': 'C. armazenamento3\n',
            'correct': false
        }, {
            'text': 'D. armazenamento4',
            'correct': false
        }
        ],
        'explication': `B.
            Comentário mais votado:
            Por pelo menos dois motivos, storage2 é o único candidato: 
            - Localização: a conta de armazenamento usada deve estar na mesma região que o NSG. 
            - A retenção está disponível somente se você usar contas de armazenamento de uso geral v2 (GPv2).
             Referência: https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-nsg-flow-logging-overview
        `
    },





    {
        'question': `Questão 1. Tópico 12. Estudo de caso Litware.
        Estudo de caso - Litware link : https://kimbellyf.github.io/quiz-edition/litware.html
         \nPergunta\nVocê descobre que o VM3 NÃO atende aos requisitos técnicos.\nVocê precisa verificar se o problema está relacionado aos NSGs.\nO que você deve usar?\n`,
        'number': '',
        'page': 535,
        'answers': [{
            'text': 'A. Diagrama em VNet1\n',
            'correct': false
        }, {
            'text': 'B. Configurações de diagnóstico no Azure Monitor\n',
            'correct': false
        }, {
            'text': 'C. Diagnosticar e resolver problemas nos perfis do Tra c Manager\n',
            'correct': false
        }, {
            'text': 'D. As recomendações de segurança no Azure Advisor\n',
            'correct': false
        }, {
            'text': 'E. Verificação de fluxo de IP no Azure Network Watcher',
            'correct': true
        }
        ],
        'explication': 'E\nCenário: A Contoso deve atender aos requisitos técnicos, incluindo:\nCertifique-se de que o VM3 possa estabelecer conexões de saída pela porta TCP 8080 com os servidores de aplicativos no escritório de Montreal.\nA verificação de fluxo de IP verifica se um pacote é permitido ou negado para ou de uma máquina virtual. As informações consistem em direção, protocolo, IP local,\nIP remoto, porta local e porta remota. Se o pacote for negado por um grupo de segurança, o nome da regra que negou o pacote será retornado. Enquanto\nqualquer IP de origem ou destino pode ser escolhido,\nA verificação de fluxo de IP ajuda os administradores a diagnosticar rapidamente problemas de conectividade de ou para a Internet e de ou para o ambiente local.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-ip-ow-verify-overview\nDistribuição de votos da comunidade\nE (100%)'
    }, {
        'question': `Questão 1. Tópico 13. Estudo de caso Litware. 
             Estudo de caso - Litware link : https://kimbellyf.github.io/quiz-edition/litware.html
            \nPergunta\nVocê precisa garantir que a VM1 possa se comunicar com a VM4. A solução deve minimizar o esforço administrativo.\nO que você deveria fazer?\n`,
        'number': '',
        'page': 537,
        'answers': [{
            'text': 'A. Crie um NSG e associe o NSG à VM1 e à VM4.\n',
            'correct': false
        }, {
            'text': 'B. Estabeleça peering entre VNET1 e VNET3.\n',
            'correct': true
        }, {
            'text': 'C. Atribua à VM4 um endereço IP de 10.0.1.5/24.\n',
            'correct': false
        }, {
            'text': 'D. Crie uma rota definida pelo usuário de VNET1 para VNET3.',
            'correct': false
        }
        ],
        'explication': 'C\nReferência:\nhttps://docs.microsoft.com/en-us/azure/vpn-gateway/tutorial-site-to-site-portal\nDistribuição de votos da comunidade\nB (89%) 11%'
    },


    {
        question: `Questão 2. Tópico 13. Informações introdutórias

            Estudo de caso - Litware link : https://kimbellyf.github.io/quiz-edition/litware.html
            
            Pergunta
            HOTSPOT -
            Você precisa atender aos requisitos de conexão do escritório de Nova York.
            O que você deveria fazer? Para responder, selecione as opções apropriadas na área de resposta.
            NOTA: Cada seleção correta vale um ponto.
            Área Quente:
            `,
        'number': 1,
        'page': 540,
        'studyCase': true,


        'answers': [{
            'text': 'No portal do Azure:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Crie apenas um circuito ExpressRoute",
                    'correct': false
                }, {
                    'text': "Crie apenas um gateway de rede virtual.",
                    'correct': false
                }, {
                    'text': "Crie um gateway de rede virtual e um gateway de rede local.",
                    'correct': true

                }, {
                    'text': "Crie um circuito ExpressRoute e um gateway de dados local.",
                    'correct': false
                }, {
                    'text': "Crie um gateway de rede virtual e um gateway de dados local.",
                    'correct': false
                },
            ]
        },

        {
            'text': 'No escritório de Nova York:',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Implante o ExpressRoute.",
                    'correct': false
                }, {
                    'text': "Implante um servidor DirectAccess.",
                    'correct': false
                }, {
                    'text': "Implemente um proxy de aplicativo da Web.",
                    'correct': false
                },
                {
                    'text': "Configure uma conexão VPN site a site.",
                    'correct': true
                },
            ]
        }
        ],
        'typeQuestion': 'select',
        'explication': `Caixa 1: Crie um gateway de rede virtual e um gateway de rede local.
        Gateway VPN do Azure. O serviço de gateway VPN permite-lhe ligar a VNet à rede local através de um dispositivo VPN. Para obter mais informações, consulte
        Conectar uma rede local a uma rede virtual do Microsoft Azure. O gateway VPN inclui os seguintes elementos:
        ✑ Gateway de rede virtual. Um recurso que fornece um dispositivo VPN virtual para a VNet. É responsável por encaminhar o tráfego da rede local para a
        VNet.
        ✑ Gateway de rede local. Uma abstração do dispositivo VPN local. O tráfego de rede do aplicativo em nuvem para a rede local é roteado por meio desse gateway.
        ✑ Conexão. A conexão possui propriedades que especificam o tipo de conexão (IPSec) e a chave compartilhada com o dispositivo VPN local para criptografar o tráfego.
        ✑ Sub-rede do gateway. O gateway de rede virtual é mantido na sua própria sub-rede, que está sujeita a vários requisitos, descritos na secção Recomendações abaixo.
        Caixa 2: Configurar uma conexão VPN site a site
        No local, crie uma conexão site a site para o gateway de rede virtual e o gateway de rede local.

        Cenário: Conecte o escritório de Nova Iorque à VNet1 pela Internet usando uma conexão criptografada.
        Respostas incorretas:
        Azure ExpressRoute: Estabelecido entre a sua rede e o Azure, através de um parceiro ExpressRoute. Esta conexão é privada. O tráfego não passa pela internet.
        Referência:
        https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/vpn
            `
    },


    {
        question: `Questão 1. Tópico 14. Informações introdutórias

            Estudo de caso - Contoso link : https://kimbellyf.github.io/quiz-edition/contoso1.html
            
            Pergunta
            HOTSPOT -
            Você precisa recomendar uma solução para o App1. A solução deve atender aos requisitos técnicos.
            O que você deve incluir na recomendação? Para responder, selecione as opções apropriadas na área de resposta.
            OBSERVAÇÃO: Cada seleção correta vale um ponto.
            Área Hot:
            `,
        'number': 1,
        'page': 540,
        'studyCase': true,


        'answers': [{
            'text': 'Número de redes virtuais',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "1",
                    'correct': true
                }, {
                    'text': "2",
                    'correct': false
                }, {
                    'text': "3",
                    'correct': false
                }]
        },

        {
            'text': 'Número de sub-redes por rede virtual',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "1",
                    'correct': false
                }, {
                    'text': "2",
                    'correct': false
                }, {
                    'text': "3",
                    'correct': true
                }
            ]
        }
        ],
        'typeQuestion': 'select',
        'explication': `Comentário mais votado: Conforme os requisitos: 
        - Você tem um aplicativo público chamado App1. 
        O App1 é composto pelas três camadas a seguir: Um banco de dados SQL,
         Um front-end da Web e Uma camada intermediária de processamento. 
         Cada camada é composta por cinco máquinas virtuais. 
         Os usuários acessam o front-end da Web usando apenas HTTPS. 
         - Mova todas as máquinas virtuais do App1 para o Azure. 
         - Minimize o número de portas abertas entre as camadas do App1.
          Caixa 1: 1 1 VNET e siga a arquitetura do aplicativo N-tier. 
          Caixa 2: 3 3 sub-redes (1 sub-rede para cada camada do App1).
           As camadas podem se comunicar entre si, porque estão dentro da mesma VNET. Claro que você precisaria de NSGs adicionais para restringir o tráfego. Referência: https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/n-tier/n-tier-sql-server
        `,
        'filters': ['K001','K002']
    },



    {
        'question': `Questão 2. Tópico 14
          Estudo de caso - Contoso link : https://kimbellyf.github.io/quiz-edition/contoso1.html
          Pergunta\nVocê está planejando a mudança do App1 para o Azure.\nVocê cria um grupo de segurança de rede (NSG).\nVocê precisa recomendar uma solução para fornecer aos usuários acesso ao App1.\nO que você deve recomendar?\n`,
        'number': '',
        'page': 545,
        'answers': [{
            'text': 'A. Crie uma regra de segurança de entrada para a porta 443 da Internet. Associe o NSG à sub-rede que contém os servidores web.\n',
            'correct': true
        }, {
            'text': 'B. Crie uma regra de segurança de saída para a porta 443 da Internet. Associe o NSG à sub-rede que contém os servidores web.\n',
            'correct': false
        }, {
            'text': 'C. Crie uma regra de segurança de entrada para a porta 443 da Internet. Associe o NSG a todas as sub-redes.\n',
            'correct': false
        }, {
            'text': 'D. Crie uma regra de segurança de saída para a porta 443 da Internet. Associe o NSG a todas as sub-redes.',
            'correct': false
        }
        ],
        'explication': 'A\nApenas a sub-rede do servidor Web e de entrada, pois os usuários acessam o front-end da Web usando apenas HTTPS.\nObservação Cenário: você tem um aplicativo público chamado App1. App1 é composto pelas três camadas a seguir:\n✑ Um banco de dados SQL\n✑ Um front-end da web\n✑ Uma camada intermediária de processamento\nCada camada é composta por cinco máquinas virtuais. Os usuários acessam o front-end da web usando apenas HTTPS.\nDistribuição de votos da comunidade\nUm (100%)'
        ,
        'filters': ['K001','K002']
    },

    {
        'question': `Questão 1. Tópico 15. Informações introdutórias
                    Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso.html
                    Pergunta
                    HOTSPOT –
                    Você implementa as alterações planejadas para NSG1 e NSG2.
                    Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.
                    NOTA: Cada seleção correta vale um ponto.
                    Área quente:
                    \n`,
        'number': '',
        'page': 549,
        'studyCase': true,
        'answers': [{

            'text': 'Da VM1, você pode estabelecer uma sessão de Área de Trabalho Remota para a VM2.\n',
            'correct': true
        }, {
            'text': 'Na VM2, você pode executar ping na VM3.\n',
            'correct': true
        }, {
            'text': 'Da VM2, você pode estabelecer uma sessão de Área de Trabalho Remota para VM3.\n',
            'correct': false
        }
        ],
        'typeQuestion': 'multiplecheckboxyesorno',
        'explication': 'Resposta mais votada : Acho que as respostas deveriam ser: SSN VM1 tem regras de entrada, portanto, não há restrição de saída. VM2 possui regras de saída, portanto, não há restrições de entrada. Conseqüentemente, VM1 pode estabelecer RDP para VM2. VM2 —ping—> VM3: Sim (nenhuma restrição além de RDP de saída) VM2 —RDP—> VM3: Não (RDP de saída não é permitido em VM2).'
    },

    {
        'question': `Questão 3. Tópico 15.
            Estudo de caso -
            Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/contoso.html
            \nPergunta\nVocê precisa adicionar VM1 e VM2 ao pool de back-end do LB1.\nO que você deve fazer primeiro?\n`,
        'number': '',
        'page': 550,
        'answers': [{
            'text': 'A. Conecte a VM2 à VNET1/Subnet1.\n',
            'correct': false
        }, {
            'text': 'B. Reimplantar VM1 e VM2 na mesma zona de disponibilidade.\n',
            'correct': false
        }, {
            'text': 'C. Reimplantar VM1 e VM2 no mesmo conjunto de disponibilidade.\n',
            'correct': true
        }, {
            'text': 'D. Crie um novo NSG e associe o NSG à VNET1/Subnet1.',
            'correct': false
        }
        ],
        'explication': `Reference:
                        https://docs.microsoft.com/en-us/azure/load-balancer/quickstart-load-balancer-standard-internal-portal
                        Community vote distribution
                        C (80%)
                        A (18%)
                        Comentário mais votado: Você não pode usar o balanceador de carga 
                        básico para balancear entre VMs individuais. Eles precisam estar em um conjunto de escala ou conjunto de disponibilidade
                    `
    }, {
        'question': '4\nVocê precisa garantir que a VM1 possa se comunicar com a VM4. A solução deve minimizar o esforço administrativo.\nO que você deveria fazer?\n',
        'number': '',
        'page': 551,
        'answers': [{
            'text': 'A. Crie uma rota definida pelo usuário de VNET1 para VNET3.\n',
            'correct': false
        }, {
            'text': 'B. Crie um NSG e associe o NSG à VM1 e à VM4.\n',
            'correct': false
        }, {
            'text': 'C. Atribua à VM4 um endereço IP de 10.0.1.5/24.\n',
            'correct': false
        }, {
            'text': 'D. Estabeleça peering entre VNET1 e VNET3.',
            'correct': true
        }
        ],
        'explication': 'D\nDistribuição de votos da comunidade\nD (100%)'
    },

    {
        'question': `Questão 1. Tópico 16. Informações introdutórias
        Estudo de caso -

        Estudo de caso -
        Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/litware.html
        
        Pergunta
        HOTSPOT -
        Você precisa implementar Role1.
        Qual comando você deve executar antes de criar Role1? Para responder, selecione as opções apropriadas na área de resposta.
        NOTA: Cada seleção correta vale um ponto.
        Área quente:
            `,
        'number': 1,
        'page': 3,
        'studyCase': true,


        'answers': [{
            'text': '',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "Find-RoleCapability",
                    'correct': false
                }, {
                    'text': "Get-AzureADDirectoryRole",
                    'correct': false
                }, {
                    'text': "Get-AzRoleDefinition",
                    'correct': true
                }, {
                    'text': "Get-AzResourceProvider",
                    'correct': false
                }]
        },

        {
            'text': '-Name Reader',
            'options': [
                {
                    text: 'Selecione',
                    correct: false
                },
                {
                    'text': "ConvertFrom-Json",
                    'correct': false
                }, {
                    'text': "ConvertFrom-String",
                    'correct': false
                }, {
                    'text': "ConvertTo-Json",
                    'correct': true
                }, {
                    'text': "ConvertTo-XML",
                    'correct': false
                }]
        }
        ],
        'typeQuestion': 'select',
        'explication': 'Get-AzRoleDefinition e ConvertTo-Json'
    },

    {
        'question': `

        Questão 2. Tópico 16. Informações introdutórias
        Estudo de caso -
        Link do estudo de caso: https://kimbellyf.github.io/quiz-edition/litware.html
        
        \nPergunta\nVocê precisa recomendar uma solução para automatizar a configuração para os usuários do departamento financeiro. A solução deve atender aos requisitos técnicos\nrequisitos.\nO que você deveria incluir na recomendação?\n`,
        'number': '',
        'page': 555,
        'answers': [{
            'text': 'A. Azure AD B2C\n',
            'correct': false
        }, {
            'text': 'B. grupos dinâmicos e políticas de acesso condicional\n',
            'correct': true
        }, {
            'text': 'C. Proteção de identidade do Azure AD\n',
            'correct': false
        }, {
            'text': 'D. um aplicativo lógico do Azure e o cliente Microsoft Identity Management (MIM)',
            'correct': false
        }
        ],
        'explication': 'B\nCenário: Garanta a Autenticação Multifator (MFA) do Azure somente para os usuários no departamento financeiro.\nA recomendação é usar políticas de acesso condicional que podem ser direcionadas a grupos de usuários, aplicativos específicos ou outras\ncondições.\nReferência:\nhttps://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates\nDistribuição de votos da comunidade\nB (100%)'
    },
    /*
    
        {
            question: "Dentro de qual elemento HTML colocamos o JavaScript?",
            number: 1,
            page: 1,
            typeQuestion: 'select',
            answers: [
                [
                    { text: "<javascript>", correct: false },,,,,
                    { text: "<js>", correct: false },,,,,
                ],
                [
                    { text: "<script>", correct: true },,,,,
                    { text: "<scripting>", correct: false },,,,
                ]
            ],
            explication: ''
        },,,,,
        */

]