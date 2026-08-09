const BASE_URL = 'http://localhost:3000';

type TestResult = {
  name: string;
  method: string;
  endpoint: string;
  expected: number[];
  received: number;
  success: boolean;
  error?: string;
};

const results: TestResult[] = [];

let categoryId = '';
let taskId = '';

async function request(
  name: string,
  method: string,
  endpoint: string,
  expected: number[],
  body?: unknown,
) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    let data: unknown;

    try {
      data = await response.json();
    } catch {
      data = null;
    }

    const success = expected.includes(response.status);

    results.push({
      name,
      method,
      endpoint,
      expected,
      received: response.status,
      success,
      error: success ? undefined : JSON.stringify(data),
    });

    console.log(
      `${success ? '✅' : '❌'} ${method.padEnd(6)} ${endpoint} → ${response.status}`,
    );

    if (!success) {
      console.log(`   Esperado: ${expected.join(' ou ')}`);
      console.log(`   Resposta: ${JSON.stringify(data)}`);
    }

    return {
      response,
      data,
    };
  } catch (error) {
    results.push({
      name,
      method,
      endpoint,
      expected,
      received: 0,
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });

    console.log(`❌ ${method.padEnd(6)} ${endpoint} → ERRO`);
    console.log(`   ${error instanceof Error ? error.message : error}`);

    return null;
  }
}

async function main() {
  console.log('\n========================================');
  console.log('        TASKFY API TEST SUITE');
  console.log('========================================\n');

  // ======================================
  // CATEGORIES
  // ======================================

  console.log('📁 CATEGORIES\n');

  // POST /categories
  const createCategory = await request(
    'Criar categoria',
    'POST',
    '/categories',
    [201],
    {
      name: `Teste ${Date.now()}`,
      color: '#22c55e',
    },
  );

  if (createCategory?.data) {
    const category = createCategory.data as {
      id?: string;
    };

    categoryId = category.id ?? '';
  }

  // GET /categories
  await request('Listar categorias', 'GET', '/categories', [200]);

  // GET /categories/:id
  if (categoryId) {
    await request(
      'Buscar categoria',
      'GET',
      `/categories/${categoryId}`,
      [200],
    );
  }

  // PATCH /categories/:id
  if (categoryId) {
    await request(
      'Atualizar categoria',
      'PATCH',
      `/categories/${categoryId}`,
      [200],
      {
        color: '#ef4444',
      },
    );
  }

  // ======================================
  // TASKS
  // ======================================

  console.log('\n📝 TASKS\n');

  // POST /tasks
  if (categoryId) {
    const createTask = await request('Criar task', 'POST', '/tasks', [201], {
      title: `Task de teste ${Date.now()}`,
      description: 'Task criada automaticamente pelo teste.',
      priority: 'HIGH',
      status: 'TODO',
      categoryId,
    });

    if (createTask?.data) {
      const task = createTask.data as {
        id?: string;
      };

      taskId = task.id ?? '';
    }
  }

  // GET /tasks
  await request('Listar tasks', 'GET', '/tasks', [200]);

  // GET /tasks/:id
  if (taskId) {
    await request('Buscar task', 'GET', `/tasks/${taskId}`, [200]);
  }

  // PATCH /tasks/:id
  if (taskId) {
    await request('Atualizar task', 'PATCH', `/tasks/${taskId}`, [200], {
      status: 'DOING',
      priority: 'URGENT',
    });
  }

  // DELETE /tasks/:id
  if (taskId) {
    await request('Excluir task', 'DELETE', `/tasks/${taskId}`, [200]);
  }

  // DELETE /categories/:id
  if (categoryId) {
    await request(
      'Excluir categoria',
      'DELETE',
      `/categories/${categoryId}`,
      [200],
    );
  }

  // ======================================
  // RESULTADO
  // ======================================

  const passed = results.filter((result) => result.success);
  const failed = results.filter((result) => !result.success);

  console.log('\n========================================');
  console.log('              RESULTADO');
  console.log('========================================\n');

  console.log(`Total:     ${results.length}`);
  console.log(`Passaram:  ${passed.length}`);
  console.log(`Falharam:  ${failed.length}`);

  if (failed.length > 0) {
    console.log('\n❌ ENDPOINTS COM PROBLEMA:\n');

    for (const result of failed) {
      console.log(`${result.method} ${result.endpoint}`);

      console.log(`Esperado: ${result.expected.join(' ou ')}`);

      console.log(`Recebido: ${result.received}`);

      if (result.error) {
        console.log(`Erro: ${result.error}`);
      }

      console.log('');
    }

    process.exitCode = 1;
  } else {
    console.log('\n🎉 Todos os endpoints passaram nos testes!\n');
  }
}

main();
