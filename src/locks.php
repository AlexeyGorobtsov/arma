<?php

    $locks = [
        [
            'id' => 101,
            'lock_name' => 'Bravus 3000.MX Pro',
            'firm_name' => 'ABUS',
            'base_lock_price' => '9342',
            'base_key_price' => '2100',
            'locks' => [
                // HERE in PART2 WILL BE LOCKS by each one
            ]
        ],[
            'id' => 203,
            'lock_name' => 'N6',
            'firm_name' => 'APECS',
            'base_lock_price' => '1234',
            'base_key_price' => '500',
            'locks' => [
                // HERE in PART2 WILL BE LOCKS by each one
            ]
        ]
    ];

    $templates = [
        1 => [
            'doors' => [
                [
                    'id' => 1,
                    'name' => 'Квартира',
                    'desc' => 'Верхний',
                    'photo_id' => 1,
                    'individual' => 0,
                    'keys' => [1, 2]
                ],[
                    'id' => 2,
                    'name' => 'Тамбур',
                    'desc' => '',
                    'photo_id' => 2,
                    'individual' => 2,
                    'keys' => [1, 2, 3, 4]
                ],[
                    'id' => 3,
                    'name' => 'Калитка',
                    'desc' => 'От дома',
                    'photo_id' => 4,
                    'individual' => 2,
                    'keys' => [1, 2, 3, 4]
                ],[
                    'id' => 4,
                    'name' => 'Дверь дома',
                    'desc' => 'Передняя',
                    'photo_id' => 5,
                    'individual' => 0,
                    'keys' => [1, 2, 3, 4]
                ],[
                    'id' => 4,
                    'name' => 'Задняя дверь',
                    'desc' => '',
                    'photo_id' => 6,
                    'individual' => 0,
                    'keys' => [3, 4]
                ]
            ],
            'keys' => [
                [
                    'id' => 1,
                    'name' => 'Муж',
                ],
                [
                    'id' => 2,
                    'name' => 'Жена',
                ],
                [
                    'id' => 3,
                    'name' => 'Тёща',
                ],
                [
                    'id' => 4,
                    'name' => 'Тесть',
                ],
            ],
            'meta' => [
                'chosen_system' => 203,
                'project_title' => 'Семья',
                'template_id' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'customer_name' => '',
                'customer_phone' => '',
                'customer_mail' => '',
            ],
        ],
        2 => [
            'doors' => [
                [
                    'id' => 1,
                    'name' => 'Квартира',
                    'desc' => 'Верхний',
                    'photo_id' => 1,
                    'individual' => 0,
                    'keys' => [1, 2]
                ],[
                    'id' => 2,
                    'name' => 'Тамбур',
                    'desc' => '',
                    'photo_id' => 2,
                    'individual' => 2,
                    'keys' => [1, 2, 3]
                ],[
                    'id' => 3,
                    'name' => 'Калитка',
                    'desc' => 'От дома',
                    'photo_id' => 4,
                    'individual' => 2,
                    'keys' => [2, 3, 4]
                ],[
                    'id' => 4,
                    'name' => 'Дверь дома',
                    'desc' => 'Передняя',
                    'photo_id' => 5,
                    'individual' => 0,
                    'keys' => [1, 2, 3, 4]
                ],[
                    'id' => 4,
                    'name' => 'Задняя дверь',
                    'desc' => '',
                    'photo_id' => 6,
                    'individual' => 0,
                    'keys' => [3, 4]
                ]
            ],
            'keys' => [
                [
                    'id' => 1,
                    'name' => 'Муж',
                ],
                [
                    'id' => 2,
                    'name' => 'Жена',
                ],
                [
                    'id' => 3,
                    'name' => 'Тёща',
                ],
                [
                    'id' => 4,
                    'name' => 'Тесть',
                ],
            ],
            'meta' => [
                'chosen_system' => 101,
                'project_title' => 'Семья-2.0',
                'template_id' => 2,
                'created_at' => date('Y-m-d H:i:s'),
                'customer_name' => '',
                'customer_phone' => '',
                'customer_mail' => '',
            ],
        ],
    ];

?>